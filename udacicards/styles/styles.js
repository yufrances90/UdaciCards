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
    },
    deckElement: {
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 10,
        width: 300,
        height: 180
    },
    deckSmallTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    }, 
});

export default globalStyles;