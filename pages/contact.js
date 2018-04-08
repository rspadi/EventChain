import React, { Component } from 'react';
import { Form, Button, Input, Message, TextArea, Container, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';

//import AWS from 'aws-sdk';

//Fetch: https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
//https://googlechrome.github.io/samples/fetch-api/fetch-post.html
//https://www.robinwieruch.de/react-fetching-data/

//Sending email from Google: https://www.npmjs.com/package/html-form-send-email-via-google-script-without-server
//Send Email PHP: http://www.freecontactform.com/email_form.php

//Setup React with PHP: https://codingdash.com/post/php-with-react-js-end-to-end/

class Contact extends Component {

  static async getInitialProps (props) {
    return {}
  }

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    errorMessage: ''
  };

  postData = (url, data) => {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      //redirect: 'follow', // *manual, follow, error
      //referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json()) // parses response to JSON
  };

  onSubmit = async event => {
    event.preventDefault();

    const { title, description, location, fee, maxParticip, dateTime, loading } = this.state;

    this.setState({ errorMessage: '' });

    try {

      // this.postData('http://everythingiswithin.com/cont.php', {name: 4})
      //   .then(data => console.log(data)) // JSON from `response.json()` call
      //   .catch(error => console.error(error))

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

  };

  render() {

    const { name, email, subject, message, errorMessage } = this.state;

    //var str = {`http://everythingiswithin.com/cont.php?name=${name}&email=${email}&subject=${subject}&message=${message}`};
    var str = 'http://everythingiswithin.com/cont.php?name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
    //console.log('NAME: ' + str);

    return (
      <Layout activeMenuItem ='contact'>
        <Container text style={{ marginTop: '6em' }}>
          <h3>Any questions, ideas, suggestions...? Please drop me a line</h3>
          <p>If you have any questions, ideas for improvements or new features, if you come around any
          software bugs or if you have any other comments - please fill out the form below and let me know.</p>


          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Group >
              <Form.Field width='8'>
                <label htmlFor="name">Name</label>
                <Input
                  id='name'
                  placeholder='Name - Optional'
                  value={name}
                  onChange={event => this.setState({ name: event.target.value })}
                />
              </Form.Field>
              <Form.Field width='8'>
                <label htmlFor="email">E-mail Address</label>
                <Input
                  id='email'
                  placeholder='Email - Optional'
                  value={email}
                  onChange={event => this.setState({ email: event.target.value })}
                />
              </Form.Field>
            </Form.Group >

            <Form.Field>
              <label htmlFor="subject">Subject</label>
              <Input
                id='subject'
                placeholder='Subject - Optional'
                value={subject}
                onChange={event => this.setState({ subject: event.target.value })}
              />
            </Form.Field>

            <Form.Field>
              <label htmlFor="message">Message</label>
              <TextArea
                rows={5}
                id='message'
                placeholder='Message - Required'
                value={message}
                onChange={event => this.setState({ message: event.target.value })}
              />
            </Form.Field>

            <Message error header="There was a problem!" content={this.state.errorMessage} />
            <Button icon='send' floated="right" content='Send Message' labelPosition='left' positive />
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default Contact;
