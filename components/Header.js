import React, { Component } from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import { Link, Router } from '../routes';
// import headerLogo from '../images/EventChain.png';
import headerLogo from '../images/EventChain.png';
//bundling images: https://blog.hellojs.org/importing-images-in-react-c76f0dfcb552

class MyHeader extends Component {

  static async getInitialProps (props) {

    var activeMenuItem = 'home';
    if (props.activeMenuItem != null)
      activeMenuItem = props.activeMenuItem;

    this.setState({ activeMenuItem });
    return { activeMenuItem };
  }

  state = { activeMenuItem: this.props.activeMenuItem }

  handleItemClick = (e, menu) => {
    this.setState({ activeMenuItem: menu.name });

    switch(menu.name) {
     case "home": {
        //we specify a route with name and params => this kind of route needs to be defined in routes.js
        //as following: .add('home', '/:slug', '/') => name of the route, pattern, destination page
        //Router.pushRoute('home', {menuItem: 'home'});
        Router.pushRoute('/');
        break;
     }
     case "eventList": {
        //Router.pushRoute('eventList', {menuItem: 'eventList'});
        Router.pushRoute('/events/list');
        break;
     }
     case "createEvent": {
        //Router.pushRoute('createEvent', {menuItem: 'createEvent'});
        Router.pushRoute('/events/new');
        break;
     }
     default: {
        //Router.pushRoute('home', {menuItem: 'home'});
        Router.pushRoute('/');
        break;
     }
    }
  }

  render() {
    const { activeMenuItem } = this.state;


    return (
      <Menu style={{ marginTop: '10px' }} inverted fixed='top'>
        <Container>
          <Menu.Item name='home' as='a' header onClick={this.handleItemClick} >
            <Image src={headerLogo} style={{ marginRight: '0em' }} />
          </Menu.Item>
          <Menu.Item name='home' as='a' header active={activeMenuItem === 'home'} onClick={this.handleItemClick} >Home</Menu.Item>
          {/* <Menu.Item name='home' active={activeMenuItem === 'home'} onClick={this.handleItemClick} >Home</Menu.Item> */}
          <Menu.Item name='eventList' active={activeMenuItem === 'eventList'} onClick={this.handleItemClick} >Event List</Menu.Item>
          <Menu.Item name='createEvent' active={activeMenuItem === 'createEvent'} onClick={this.handleItemClick} >Create Event</Menu.Item>
        </Container>
      </Menu>
    )
  }

}

export default MyHeader;


//   return (
//     <Menu style={{ marginTop: '10px' }} inverted>
//
//       <Link route="/">
//         <a className="item">Home</a>
//       </Link>
//       <Link route="/events/list">
//         <a className="item">List of Event</a>
//       </Link>
//
//       <Link route="/events/new">
//         <a className="item">Create New Event</a>
//       </Link>
//
//
//     </Menu>
//   );
