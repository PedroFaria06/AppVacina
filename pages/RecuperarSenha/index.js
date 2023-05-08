import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export const RecuperarSenha = (props) => {

    const [email, setEmail] = useState()

    const showLogin = () => {
        props.navigation.pop()
    }

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} />
            </View>
            <TouchableOpacity style={styles.btnRecuperar} onPress={showLogin}>
                <Text style={styles.letra} >Recuperar Senha</Text>
            </TouchableOpacity>
        </View>
    );
}
