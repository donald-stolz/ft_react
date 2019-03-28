import React, { Component } from 'react';
import styles from './Contact.module.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.submitNewMessage = this.submitNewMessage.bind(this);
    this.updateByPropertyName = this.updateByPropertyName.bind(this);
  }

  submitNewMessage = e => {
    e.preventDefault();
    console.log(this.state);
  };

  updateByPropertyName = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { name, email, phone, subject, message } = this.state;
    return (
      <div className={styles.center}>
        <h1 className={styles.title}>Contact</h1>
        <form
          className={styles.contactForm}
          onSubmit={this.submitNewMessage}
          id="contactform"
        >
          {/* FULL NAME INPUT FIELD */}
          <input
            required
            value={name}
            className={styles.inputField}
            type="text"
            placeholder="Name"
            onChange={event =>
              this.updateByPropertyName('name', event.target.value)
            }
          />

          {/* EMAIL INPUT FIELD */}
          <input
            required
            value={email}
            className={styles.inputField}
            type="email"
            placeholder="Email"
            onChange={event =>
              this.updateByPropertyName('email', event.target.value)
            }
          />

          {/* PHONE INPUT FIELD : ex. 123-456-7890 */}
          <input
            required
            value={phone}
            className={styles.inputField}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            type="tel"
            placeholder="Email"
            onChange={event =>
              this.updateByPropertyName('email', event.target.value)
            }
          />

          {/* SUBJECT INPUT FIELD */}
          <input
            required
            value={subject}
            className={styles.inputField}
            type="subject"
            placeholder="Subject"
            onChange={event =>
              this.updateByPropertyName('subject', event.target.value)
            }
          />

          {/* MESSAGE TEXT AREA */}
          <textarea
            required
            value={message}
            rows={this.state.rows}
            cols={this.state.cols}
            placeholder="Your message..."
            className={styles.inputField}
            style={{ resize: 'vertical' }}
            onChange={event =>
              this.updateByPropertyName('message', event.target.value)
            }
          />

          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
