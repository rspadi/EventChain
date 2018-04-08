//this is our home page - we provide some basic details about this
//page and the underlying smart contract
import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Container, Segment, Button, Form, Radio, Message, Header, Image } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import Event from '../ethereum/event';
import { Link, Router } from '../routes';

import h1 from '../images/eventList.png';
import DatePicker from 'react-datepicker';

class EventIndex extends Component {

  static async getInitialProps (props) {
    return {}
  }

  async createEvents() {
    const accounts = await web3.eth.getAccounts();
    let eventAddresses = await factory.methods.getDeployedEvents().call();
    let eventCount = eventAddresses.length;

    if(eventCount == 0) {
      //create 2 active events
      await factory.methods
        .createEvent('Title 1', 'Description 1 ...', 'Location 1', web3.utils.toWei('0.1', 'ether'), '50', '1577901600')
        .send({
          from: accounts[0],
          gas: '5000000'
        });

//return;

      await factory.methods
        .createEvent('Title 2', 'Description 2 ...', 'Location 2', web3.utils.toWei('0.1', 'ether'), '50', '1577901600')
        .send({
          from: accounts[0],
          gas: '5000000'
        });

      //create 1 expired events
      await factory.methods
        .createEvent('Expired Event', 'Description ...', 'Location', web3.utils.toWei('0.1', 'ether'), '50', '152226360')
        .send({
          from: accounts[0],
          gas: '5000000'
        });

      //create event & cancel it
      await factory.methods
        .createEvent('Canceled Event', 'Description ...', 'Location', web3.utils.toWei('0.1', 'ether'), '50', '1577901600')
        .send({
          from: accounts[0],
          gas: '5000000'
        });

      eventAddresses = await factory.methods.getDeployedEvents().call();
      await Event(eventAddresses[eventAddresses.length-1]).methods.cancelEvent().send({
        from: accounts[0],
        gas: '5000000'
      });
    }

  }

  // <style jsx global>{datePickerModuleStyle}</style>
  // <style jsx global>{datePickerStyle}</style>
  // <style dangerouslySetInnerHTML={{ __html: s1 }} />

  render() {
    return (
      <Layout activeMenuItem ='home'>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Event Managment on the Blockchain</Header>
          <p>This is a simple DAPP (decentralized application) that provides basic event managment capabilities on the Ethereum blockchain...</p>
          <Image src={h1} style={{  marginTop: '2em' }}  />

          <div style={{marginTop: 20}}>
            <Button
              onClick={this.createEvents}
              size="mini"
              content="Create Events"
              primary
            />
          </div>

        </Container>
      </Layout>
    );
  }
}

export default EventIndex;
