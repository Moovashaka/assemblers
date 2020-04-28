import React from 'react';


export default class ContactForm extends React.Component {
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
          body: encode({ "form-name": "contactForm", ...this.state })
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
    const mapStyles = {
    width: "100%",
    height: "auto",
    frameborder: "0",
    style: "border:0",
    allowfullscreen: "allowfullscreen",
  };


    return (

  <section id="contact">
  <div className="container">
    <div className="card card-body bg-light">
      <h3>Contact Us</h3>
  </div>
  <br />
  <div className="row">
  <div className="col-sm-7">
    <div className="map-address">
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=stonebridge+mill+kestor+lane+longridge+lancashire&zoom=18&scale=1&size=600x300&maptype=roadmap&key=AIzaSyDP0xB9uhXm7e-L0rasGS3hLGCnRzDnYAk&format=png&visual_refresh=true" style={mapStyles} />
<br />
<br />
  <div className="card-block">
  <address className="card-text">
    <br />
    <br />
    <h3><i>RIBBLE VALLEY</i> Tyre &amp; Auto Services Limited</h3>
    Stonebridge Mill, Kestor Lane, Longridge, Preston, Lancashire. PR3 3AD
    <br />
    <br />
    <h3><a href="tel:+44-1772-784000">T: 01772 784000</a> F: 01772 784008</h3>
  </address>
  </div>
  </div>
</div>
      <div className="col-md-5">
        <form name="contactForm" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input type="hidden" name="form-name" value="contactForm" />
            <input
              value={this.state.inputName}
              className="form-control"
              name="inputName"
              type="text"
              onChange={this.handleChange}
              placeholder="Name"
              required />
          </div>
          <br />
          <span>{this.state.inputNameError}</span>
          <br />
          <div className="form-group">
            <input
              value={this.state.inputEmail}
              className="form-control"
              name="inputEmail" type="text"
              onChange={this.handleChange}
              placeholder="Email"
              required />
            <br />
          </div>
          <span>{this.state.inputEmailError}</span>
          <br />
          <div className="form-group">
            <input
              value={this.state.inputPhone}
              className="form-control"
              type="tel"
              name="inputPhone" type="tel"
              onChange={this.handleChange}
              placeholder="Phone"
              required />
            <br />
          </div>
          <div className="form-group">
            <label>
              <i>I'd like to enquire about:</i>
              <br />
              </label>
          </div>
        <div className="form-group">
          <select className="form-control" value={this.state.select} name="select" className="text-center" onChange={this.handleChange}>
            <option value="other">Something else</option>
            <option value='tyres'>Tyres</option>
            <option value="mot">MOT</option>
            <option value="servicing">Servicing</option>
            <option value="brakes">Brakes</option>
            <option value="exhaust">Exhaust</option>
          </select>
        </div>
          <br />
          <br />
          <div className="form-group">
          <textarea
            type="text" value={this.state.message}
            className="form-control"
            name="message"
            onChange={this.handleChange}
            maxLength="200"
            placeholder="Message">
            </textarea>
        </div>
          <br />
          <br />
        <button className="text-center" id="submit" type="submit" name="dataSubmit" disabled={this.state.lockSubmit}>Submit</button>
        <br />
        <br />
        <span>{this.state.formSent}</span>
        <br />
        <br />
        </form>
      </div>
    </div>
  </div>
    </section>

    );
  }
}
