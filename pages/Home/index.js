import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Card from '../../components/Card';
import styles from './styles.js'

export const Home = (props) => {

    const [vacinas, setVacinas] = useState([])

    const listaVacinas = [
        {
            id: 1,
            nome: 'BCG',
            data: '11/06/2022',
            dose: 'Dose única',
            comprovante: 'file:///data/user/0/com.myhealth/cache/rn_image_picker_lib_temp_2aab7aa3-4ddf-4c13-8dd8-9d4c3fcebda6.jpg',
            proxima: ''
        },
        {
            id: 2,
            nome: 'Febre Amarela',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: 'file:///data/user/0/com.myhealth/cache/rn_image_picker_lib_temp_2aab7aa3-4ddf-4c13-8dd8-9d4c3fcebda6.jpg',
            proxima: '11/10/2023'
        },
        {
            id: 3,
            nome: 'Covid 19',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: 'file:///data/user/0/com.myhealth/cache/rn_image_picker_lib_temp_2aab7aa3-4ddf-4c13-8dd8-9d4c3fcebda6.jpg',
            proxima: '11/10/2023'
        },
        {
            id: 4,
            nome: 'Dengue',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: 'file:///data/user/0/com.myhealth/cache/rn_image_picker_lib_temp_2aab7aa3-4ddf-4c13-8dd8-9d4c3fcebda6.jpg',
            proxima: '11/10/2023'
        },
        {
            id: 5,
            nome: 'Outra Vacina',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: 'file:///data/user/0/com.myhealth/cache/rn_image_picker_lib_temp_2aab7aa3-4ddf-4c13-8dd8-9d4c3fcebda6.jpg',
            proxima: '11/10/2023'
        },
        {
            id: 6,
            nome: 'Mais uma',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: 'file:///data/user/0/com.myhealth/cache/rn_image_picker_lib_temp_2aab7aa3-4ddf-4c13-8dd8-9d4c3fcebda6.jpg',
            proxima: '11/10/2023'
        },

    ]

    if (vacinas.length == 0) {
        setVacinas(listaVacinas)
    }

    if (typeof props.route.params !== 'undefined') {
        if (typeof props.route.params.itemAdicionar !== 'undefined') {
            console.log(props.route.params.itemAdicionar);
            vacinas.push({
                id: props.route.params.itemAdicionar.id,
                nome: props.route.params.itemAdicionar.nome,
                data: props.route.params.itemAdicionar.data,
                dose: props.route.params.itemAdicionar.dose,
                proxima: props.route.params.itemAdicionar.proxima,
                comprovante: props.route.params.itemAdicionar.comprovante
            })
        }
        if (typeof props.route.params.itemEditar !== 'undefined') {
            var index = vacinas.findIndex((item) => item.id == props.route.params.itemEditar.id)
            if (index !== -1) {
                let arrayTemporario = vacinas.slice();
                arrayTemporario[index] = props.route.params.itemEditar;
                setVacinas(arrayTemporario);
                props.route.params.itemEditar = 'undefined';
            }
        }
        if (typeof props.route.params.idApagar !== 'undefined') {
            var index = vacinas.findIndex((item) => item.id == props.route.params.idApagar)
            if (index !== -1) {
                vacinas.splice(index, 1);
            }
        }
    }

    const showNovaVacina = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Nova Vacina' });
    }

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <ScrollView horizontal={false} style={styles.background}>
            <Searchbar
                icon={require('../../assets/imgs/lupa.png')}
                style={styles.srcBar}
                placeholder="Pesquisar Vacina..."
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', width: '100%' }}>
                <FlatList data={vacinas} renderItem={({ item }) => <Card item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={2} />
            </ScrollView>

            <TouchableOpacity onPress={showNovaVacina}>
                <Text style={[styles.btnNovaVacina, styles.shadow]}>
                    Nova Vacina
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}