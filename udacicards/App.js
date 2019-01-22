import React, { Component } from 'react';

import AppRouter from './pages/AppRouter';

import { 
    generateAndSaveInitialData,
    setLocalNotificationU 
} from './utils/utility';

export default class App extends Component {

    componentDidMount() {
        setLocalNotificationU();
        generateAndSaveInitialData();
    }
    
    render() {
        return (
            <AppRouter />
        );
    }
}
