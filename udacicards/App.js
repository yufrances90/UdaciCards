import React, { Component } from 'react';

import AppRouter from './pages/AppRouter';

import { generateAndSaveInitialData } from './utils/utility';

export default class App extends Component {

    componentDidMount() {
        generateAndSaveInitialData();
    }
    
    render() {
        return (
            <AppRouter />
        );
    }
}
