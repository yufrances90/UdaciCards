import {
    StyleSheet
} from 'react-native';

const globalStyles = StyleSheet.create({
    submitBtn: {
        marginTop: 40,
        borderColor: '#000066',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 5,
    },
    submitBtnText: {
        color: '#000066',
        textAlign: 'center'
    },
    centeredContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }   
});

export default globalStyles;