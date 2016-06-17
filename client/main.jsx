import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import accounts-ui configuration code into our client side entrypoint
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
