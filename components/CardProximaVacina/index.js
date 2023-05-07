import { Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles.js'

export const CardProximaVacina = (props) => {

    function showEditarVacina() {
        props.navigation.navigate('Editar Vacina', { item: props.item })
    }

    return (
        (props.item.proxima != '') ?
            <TouchableOpacity style={styles.container} onPress={showEditarVacina}>
                <Text style={styles.nome}>{props.item.nome}</Text>
                <Text style={styles.proxDose}>{props.item.proxima}</Text>
            </TouchableOpacity>
            :
            null
    )
}