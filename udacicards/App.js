import React, { Component } from 'react';

import AppRouter from './pages/AppRouter';

import { 
    generateAndSaveInitialData,
    setLocalNotification 
} from './utils/utility';

export default class App extends Component {

    componentDidMount() {
        setLocalNotification();
        generateAndSaveInitialData();
    }
    
    render() {
        return (
            <AppRouter />
        );
    }
}
