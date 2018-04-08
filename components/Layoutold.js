import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

class Layout extends Component {

  static async getInitialProps (props) {
    var activeMenuItem = 'home';
    if (props.activeMenuItem != null)
      activeMenuItem = props.activeMenuItem;

    return { activeMenuItem };
  }

  render() {
    //console.log('props: ' + this.props.children)
    return (
      <Container>
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

        <Header activeMenuItem = {this.props.activeMenuItem} />
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
