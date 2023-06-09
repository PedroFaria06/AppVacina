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
    btnSalvar: {
        marginTop: 10,
        backgroundColor: '#37BD6D',
        textAlign: 'center',
        paddingVertical: 10,
        width: 170,
        borderRadius: 10
    },
    btnExcluir: {
        marginTop: 90,
        backgroundColor: '#FD7979',
        textAlign: 'center',
        paddingVertical: 5,
        width: 90,
        flexDirection: 'row',
        borderRadius: 10
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 120,
        padding: 10,
        elevation: 2,
        margin: 10
    },
    buttonAceitar: {
        backgroundColor: "#ff8383",
    },
    buttonCancelar: {
        backgroundColor: "#3f92c6",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        width: 250,
        marginBottom: 10,
        textAlign: "center",
        color: '#ff8383'
    },
    brnComprovante: {
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
        textAlign: 'center',
    },
    lixo: {
        width: 17,
        height: 17,
        marginTop: 5,
        marginRight: 5
    },
});