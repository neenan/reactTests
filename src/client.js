import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDom.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}><App /></MuiThemeProvider>,document.getElementById('react')
);