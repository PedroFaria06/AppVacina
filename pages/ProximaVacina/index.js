import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { CardProximaVacina } from '../../components/CardProximaVacina'
import styles from './styles.js'

export const ProximaVacina = (props) => {

    const listaVacinas = [
        {
            id: 1,
            nome: 'BCG',
            proxima: ''
        },
        {
            id: 2,
            nome: 'Febre Amarela',
            proxima: '11/10/2023'
        },
        {
            id: 3,
            nome: 'Teste Vacina',
            proxima: '05/11/2023'
        },
    ]

    const showNovaVacina = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Nova Vacina' });
    }

    return (
        <View style={styles.background}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <FlatList data={listaVacinas} renderItem={({ item }) => <CardProximaVacina item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={1} />
            </View>
            <TouchableOpacity style={styles.btnNovaVacina} onPress={showNovaVacina}>
                <Text style={styles.letra}>Nova Vacina</Text>
            </TouchableOpacity>
        </View>
    );
}