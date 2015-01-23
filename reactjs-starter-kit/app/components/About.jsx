var React = require('react');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var About = React.createClass({

        propTypes: {
            appState: React.PropTypes.object.isRequired
        },

        render: function() {
            return (
                <div>
                <h1>About</h1>
                    <p>This is a ReactJS starter kit</p>
            <Navigate page={Pages.HOME}>Go to "home"</Navigate>
        </div>
);
}
});

module.exports = About;
