import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        backgroundColor: '#add4d1',
        flex: 1,
        alignItems: "center",
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 30,
        color: '#419ED7',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        paddingLeft: 5

    },
    Titulos: {
        flex: 50
    },
    description: {
        color: '#429ed7',
        fontSize: 30,
        width: 350,
        textAlign: 'center',
        marginTop: 70,
        marginBottom: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    inputs: {
        flex: 20
    },
    container: {
        flexDirection: 'row',
        marginTop: 20
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
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 60
    },
    btnEntrar: {
        backgroundColor: '#37BD6D',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 45,
        width: 150,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10
    },
    btnCriar: {
        backgroundColor: '#419ED7',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
        width: 250,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10
    },
    btnEsqueci: {
        backgroundColor: '#B0CCDE',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
        width: 270,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    letra: {
        color: 'white',
        elevation: 15,
        fontSize: 20
    },
    erro: {
        color: 'red'
    },
    titulo: {
        flexDirection: 'row',
        marginLeft: 50
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: 780,
        width: '100%',

    },
});