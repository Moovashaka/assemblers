import React, { Component } from 'react';
import Navbar from './components/navigation/Navbar.js'
import Footer from './components/main/Footer.js'
import Jumbox from './components/main/Jumbox.js'
import Box from './components/main/Box.js'
import Form from './components/main/Form.js'
import Card from './components/content/Card.js'
import Cardone from './components/content/Cardone.js'
import Cardtwo from './components/content/Cardtwo.js'
import comp from './images/computers.jpg'
import theme from './theme.js'
import Twitter from './components/main/Twitter.js'


class App extends Component {
  state = {
    fields: {}
  };
  onChange = updatedValue => {
  this.setState({  fields: {
    ...this.state.fields,
    ...updatedValue }});
}
render() {
  return (
        <>
        <Navbar />
        <Box bg="black">
        <Card
        title="FAQ"
        qonetitle="What if something is missing?"
        text=" Our fitters carry some of the more common spare parts,
         but we advise you to check before our fitters arrive to ensure that all parts have been packaged."
        qtwotitle="Can you dispose of the packaging?"
        content="Unfortunately we can't as it becomes commercial waste if we take it."
        qthreetitle="Do I have to wait in all Day?"
        morecontent="We schedule an appointment to suit
        your needs. Our aim is to arrive within an hour
        of schedule, to facilitate overrunning and traffic."
        />
       <Cardone
        title="Customer Feedback"
        content="We value your experience as our
        customer and are proud of the feedback we receive."
        morecontent=""
        />
       <Cardtwo image={comp}
          title="Pricing &amp; Costs"
          text="We believe in a straightforward and fair
          pricing policy."
          content=" we charge £25 per hour per fitter
          for the first hours work and £20 per hour per fitter for
          subsequent hours. Most tasks can be
          completed by one fitter in 2 - 3 hours."
          morecontent="As each item of furniture requires a different amount of time
          to assemble we will estimate the cost before arrival, but
          only charge for actual time taken to complete the job, as this
          can vary with manufacturer, space available to work in etc."
          evenmorecontent="Our operators have amassed significant experience in assessing
          and estimating job duration, however please be assured that we will bring
          any discrepencies to your attention as soon as they come to light."
          phone="Telephone: 07305 474590 for a FREE and friendly estimate"
        />
        <Twitter />
       </Box>
       <Box bg="black">
       <Form onChange={fields => this.onChange(fields)} />
       </Box>
      <Footer />
      </>

  );
}
}

export default App;
