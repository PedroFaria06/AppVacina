import { Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles.js'

const Card = (props) => {

    function showEditarVacina() {
        props.navigation.navigate('Editar Vacina', { item: props.item })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={showEditarVacina}>
            <Text style={styles.nome}>{props.item.nome}</Text>
            <Text style={styles.dose}>{props.item.dose}</Text>
            <Text style={styles.dataDose}>{props.item.data}</Text>
            <Image source={{ uri: props.item.comprovante }} style={{ width: 165, height: 60, marginLeft: 'auto', marginRight: 'auto' }} />
            {(props.item.proxima != '') ?
                <Text style={styles.proxDose}>Próxima dose em: {props.item.proxima}</Text>
                :
                <Text style={styles.proxDose}>Não há próxima dose</Text>
            }

        </TouchableOpacity>
    )
}

export default Card;