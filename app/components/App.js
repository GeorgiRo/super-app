var React = require('react');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider')['default'];

var Paper = require('material-ui/Paper')['default'];
var AppBar = require('material-ui/AppBar')['default'];
var RaisedButton = require('material-ui/RaisedButton')['default'];

var App = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Hello React on Cordova, with Material Design!" 
                    />
                    <Paper style={{ width: "auto", margin: 10 , padding: 10 }}>
                        <div>This is some sample text.</div>  
                        <RaisedButton label="Press Me!" />
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
});

module.exports = App;