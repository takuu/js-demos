var React = require('react');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var Test = React.createClass({

    propTypes: {
        appState: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div>
                <h1>Test</h1>
                <p>This is just a test page..</p>
                <Navigate page={Pages.HOME}>Go to "home"</Navigate>
            </div>
        );
    }
});

module.exports = Test;
