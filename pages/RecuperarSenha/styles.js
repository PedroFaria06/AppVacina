import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        backgroundColor: '#add4d1',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flexDirection: 'row',

    },
    label: {
        textAlignVertical: 'center',
        margin: 5,
        color: 'white',
        fontSize: 20
    },
    input: {
        backgroundColor: 'white',
        width: 300,
        fontSize: 20,
        color: '#499dcd'
    },
    btnRecuperar: {
        marginTop: 250,
        backgroundColor: '#37BD6D',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,
        width: 220,
        borderRadius: 10
    },
    letra: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center'
    }
});