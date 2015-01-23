var React = require('react');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var HelloWorld = React.createClass({

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Navigate page={Pages.HOME}>Go to "home"</Navigate>
        <Navigate page={Pages.ABOUT}>Go to "about"</Navigate>
        <Navigate page={Pages.TEST}>Go to "test"</Navigate>
      </div>
    );
  }
});

module.exports = HelloWorld;
