var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ButtonController />
      </div>
    );
  }
})

var ButtonController = React.createClass({
  render: function() {
    return (
      <div>
        hellobutton
      </div>
    );
  }
})

module.exports = App
