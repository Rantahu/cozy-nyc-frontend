import React, {Component}   from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

/**
 * Contact Page
 * Forum sends an email to hello@cozy.nyc via formspree
 *
 * ToDo: Switch to support ticket system provided by the cozy.nyc backend
 */
class Contact extends Component {
  render(){
    return (
      <div id="container">
          <h2>contact us.</h2>
          <form className="contactform" action="https://formspree.io/hello@cozy.nyc" method="POST">
            <input type="text" name="name" placeholder="your name." required/>
            <input type="email" name="_replyto" placeholder="your email." required/>
            <textarea name="message" placeholder="message us." required></textarea>
            <br/>
            <input type="hidden" name="_next" value="//cozy.nyc"/>
            <input type="hidden" name="_subject" value="cozy.nyc"/>
            <input type="submit" value="Send"/>
          </form>
      </div>
    );
  }
};

export default Contact;
