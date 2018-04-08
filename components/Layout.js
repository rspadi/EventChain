import React, { Component } from 'react';
import Head from 'next/head';
import MyHeader from './Header';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'

import BTC from '../images/BTC.png';
import ETH from '../images/ETH.png';
import LTC from '../images/LTC.png';

//const Layout3 = () => (
class Layout extends Component {

  static async getInitialProps (props) {
    var activeMenuItem = 'home';
    if (props.activeMenuItem != null)
      activeMenuItem = props.activeMenuItem;

    return { activeMenuItem };
  }

  render() {
    return (
      <div class="Site">
      <style>{`.Site {display: flex; min-height: 100vh; flex-direction: column;} .Site-content {flex: 1; }`}</style>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/react-datepicker/1.3.0/react-datepicker.css"
          />
        </Head>

        <MyHeader activeMenuItem = {this.props.activeMenuItem} />

        {/*
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header><Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
              Project Name
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Container>
        </Menu>
        */}

        <div class="Site-content">
          {this.props.children}
        </div>

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '2em 0em' }}>
          <Container textAlign='left'>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column floated='right' width={6}>
                  <Header inverted as='h4' content='Any Questions?' />
                  <p>Please <a href='#'><b>Contact Me</b></a> if you have any question, suggestions, ideas for improvements… or if you would like to hire me for contract work.</p>
                </Grid.Column>
                <Grid.Column floated='left' width={6}>
                  <Header inverted as='h4' content='Your donation for this project is very welcome.' />
                  <List size='tiny' inverted>
                    <List.Item ><Image src={BTC} style={{ marginRight: 5}} />3AepRv8MVpnr3mDnzfDmcHvpFEx8osAA1k </List.Item>
                    <List.Item ><Image src={ETH} style={{ marginRight: 5}} />0x6C37e55c7b9B5e9961375384AE334803fAB3dBC1 </List.Item>
                    <List.Item ><Image src={LTC} style={{ marginRight: 5}} />MUh3x97KZrfvER1Cmz3u3f7zYWzKgPLo59 </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider inverted section />

            <Grid columns={2} divided>
              <Grid.Row stretched celled>
                <Grid.Column floated='right' width={6}>
                  <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>Home</List.Item>
                    <List.Item as='a' href='#'>Contact Me</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column floated='left' width={6}>
                  <Icon size='small' fitted name='copyright' ><span style={{fontSize:12, }}> Robert Spadinger</span></Icon>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Container>
        </Segment>
      </div>
    );
  }
}

export default Layout
