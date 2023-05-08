import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        backgroundColor: '#add4d1',
        flex: 1,
        alignItems: "center",
        paddingTop: 70
    },
    container: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    containerRadio: {
        width: 252,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -20
    },
    label: {
        margin: 5,
        color: 'white',
        fontSize: 15,
        marginLeft: 'auto',
    },
    input: {
        backgroundColor: 'white',
        width: 250,
        height: 30,
        fontSize: 15,
        color: '#499dcd',
        paddingBottom: 5
    },
    btnCadastrar: {
        marginTop: 120,
        backgroundColor: '#37BD6D',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 32,
        width: 160,
        borderRadius: 10

    },
    letra: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});