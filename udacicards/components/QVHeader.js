import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import globalStyles from '../styles/styles';

export default class QVHeader extends Component {

    render() {
        return (
            <View>
                <View style={styles.returnBtn}>
                    <TouchableOpacity>
                        <AntDesign name="leftcircleo" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={styles.nextBtn}>
                    <TouchableOpacity>
                        <AntDesign name="rightcircleo" size={32} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    returnBtn: {
        marginTop: 50
    },
    nextBtn: {
        marginTop: -35,
        marginLeft: 240
    }
});

