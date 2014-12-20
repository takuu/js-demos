window.React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI')
var FluxCartApp = require('./components/FluxCartApp.react');

// Load Mock Product Data into localStorage
ProductData.init();

console.log('Order 1');
// Load Mock API Call
CartAPI.getProductData();

// Render FluxCartApp Controller View
React.render(
<FluxCartApp />,
    document.getElementById('flux-cart')
);