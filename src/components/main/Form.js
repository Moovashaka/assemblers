import React from 'react';
import './form.css'


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
        fetch("client_mailer.php", {
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
        <h3 className="header">Contact Us</h3>

    <div className="map">
    <iframe className="mapImage" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302755.07458312873!2d-3.0037013935293686!3d53.64208603536602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b3ee6fcfe1f89%3A0x1ed6fb17951ed48c!2sMarlborough%20Rd%2C%20Southport%20PR9%200RA!5e0!3m2!1sen!2suk!4v1588347466793!5m2!1sen!2suk"/>

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
              type="tel"
              name="inputPhone" type="tel"
              onChange={this.handleChange}
              placeholder="Phone"
              required />
          </div>
            <label>
              <i>Id like to enquire about:</i>
            </label>
        <div className="form-group">
          <select className="form-control" value={this.state.select} name="select" className="text-center" onChange={this.handleChange}>
            <option value="other">Something else</option>
            <option value='wardrobe'>Wardrobe</option>
            <option value="bed">Bed</option>
            <option value="chest">Chest of Drawers</option>
          </select>
        </div>
        <textarea
            id="textbox"
            type="text" value={this.state.message}
            name="message"
            onChange={this.handleChange}
            maxLength="200"
            cols="30"
            placeholder="Your Message">
            </textarea>
        <div className="form-group">
        <button className="subbutton" id="submit" type="submit" name="dataSubmit" disabled={this.state.lockSubmit}>Submit</button>
        </div>
      <span>{this.state.formSent}</span>
    </form>
  </div>
</section>
    );
  }
}
