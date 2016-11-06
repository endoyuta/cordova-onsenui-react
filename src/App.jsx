import React from 'react';
import { Page, Button } from 'react-onsenui';
import { notification } from 'onsenui';

export default class App extends React.Component {
  alertPopup() {
    notification.alert('こんにちは');
  }

  render() {
    return (
      <Page>
        <div>Hello World!</div>
        <Button onClick={this.alertPopup}>クリック</Button>
      </Page>
    );
  }
}
