import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        backgroundColor: '#add4d1',
        flex: 1,
        alignItems: "center",
        paddingTop: 30
    },
    container: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    containerRadio: {
        width: 252,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap"
    },
    containerRadios: {
        flexDirection: 'row',
        marginBottom: -10
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
        marginTop: 50,
        backgroundColor: '#37BD6D',
        textAlign: 'center',
        paddingVertical: 10,
        width: 150,
        borderRadius: 10
    },
    btnComprovante: {
        backgroundColor: '#419ed7',
        textAlign: 'center',
        paddingVertical: 10,
        width: 150,
        color: 'white',
        fontSize: 15,
    },
    containerImagem: {
        width: 249,
        textAlign: 'center',
        flexDirection: 'column',
        color: 'white',
        fontSize: 15,
    },
    letra: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 30
    }
});