import React, { Suspense } from 'react';
import './form.css';

const Map = React.lazy(() => import('./Map'));


export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: '',
      inputNameError: '',
      inputEmail: '',
      inputEmailError: '',
      inputPhone: '',
      select: 'other',
      message: '',
      formSent: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange = e => {
      this.props.onChange({ [e.target.name]: e.target.value })
      this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let isError = false;
    const errors = {};
    if (this.state.inputName.length < 2) {
      isError = true;
      errors.inputNameError = ('Name should be 2 or more letters');
    }

    if (!this.state.inputEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      isError = true;
      errors.inputEmailError = ('Needs valid email address');
    }

    if (isError) {
      this.setState(errors)
      errors.formSent = ('Please check the form for errors');
      };

    return isError;
  }

  handleSubmit = e => {
      e.preventDefault();
      const err = this.validate();

      if (!err) {
        const encode = (data) => {
          return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
        }
        fetch("/", {
          method: "POST",
          headers: {"content-type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "Form", ...this.state })
        })
          .then(() => this.setState({formSent: 'Thank you for your enquiry, we will be in touch as soon as possible'}))
          .catch(error => alert(error));

      {/* Clear Form */}
          this.setState({
          inputName: '',
          inputNameError: '',
          inputEmail: '',
          inputEmailError: '',
          inputPhone: '',
          select: '',
          message: ''
        });

        this.props.onChange({
        inputName: '',
        inputNameError: '',
        inputEmail: '',
        inputEmailError: '',
        inputPhone: '',
        select: '',
        message: ''
        });
       const clearMessageTimer = setTimeout(() => { this.setState({ formSent: '' })}, 10000);
      }
    }

  render() {
    return (

  <section id="contact">
    <div className="contact">
        <h3 className="header">Contact Us</h3>
        <div className="map">
        <Suspense fallback={<div>Loading...</div>}>
        <Map />
        </Suspense>
        <form className="contactForm" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input type="hidden" name="form-name" value="contactForm" />
            <input
              value={this.state.inputName}
              name="inputName"
              type="text"
              onChange={this.handleChange}
              placeholder="Name"
              required />
          </div>
          <span>{this.state.inputNameError}</span>
          <div className="form-group">
            <input
              value={this.state.inputEmail}
              name="inputEmail" type="text"
              onChange={this.handleChange}
              placeholder="Email"
              required />
          </div>
          <span>{this.state.inputEmailError}</span>
          <div className="form-group">
            <input
              value={this.state.inputPhone}
              name="inputPhone"
              type="tel"
              onChange={this.handleChange}
              placeholder="Phone"
              required />
          </div>
            <label>
              <i>Id like to enquire about:</i>
            </label>
        <div className="form-group">
          <select value={this.state.select} name="select"  onChange={this.handleChange}>
            <option value="other">Something else</option>
            <option value='wardrobe'>Wardrobe</option>
            <option value="bed">Bed</option>
            <option value="chest">Chest of Drawers</option>
          </select>
        </div>
        <textarea
            className="form-group"
            id="textbox"
            type="text" value={this.state.message}
            name="message"
            onChange={this.handleChange}
            maxLength="200"
            placeholder="Your Message">
            </textarea>
        <div className="form-group">
        <button className="subbutton" id="submit" type="submit" name="dataSubmit" disabled={this.state.lockSubmit}>Submit</button>
        </div>
      <span>{this.state.formSent}</span>
    </form>
  </div>
</div>
</section>
    );
  }
}
