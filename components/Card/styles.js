import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',

        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        padding: 5,
    },
    nome: {
        textAlign: 'center',
        color: '#3e92c6',
        fontSize: 20
    },
    dose: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#3e92c6',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
    },
    dataDose: {
        textAlign: 'center',
        color: 'grey'
    },
    proxDose: {
        textAlign: 'right',
        fontSize: 10,
        color: 'red'
    }
})