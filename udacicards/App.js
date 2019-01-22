import React, { Component } from 'react';

import AppRouter from './pages/AppRouter';

import { 
    generateAndSaveInitialData,
} from './utils/utility';
import {
    setLocalNotificationI
} from './utils/pushNotifications'

export default class App extends Component {

    componentDidMount() {
        setLocalNotificationI();
        generateAndSaveInitialData();
    }
    
    render() {
        return (
            <AppRouter />
        );
    }
}
