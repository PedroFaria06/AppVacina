import React, { useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const showHome = () => {
        props.navigation.push('HomeNavigator');
    }

    const showCriarConta = () => {
        props.navigation.push('Criar Conta');
    }

    const showRecuperarSenha = () => {
        props.navigation.push('Recuperar Senha');
    }

    return (
        <View style={styles.background}>

            <ImageBackground source={require('../../assets/imgs/topo.jpg')} resizeMode="cover" style={styles.image} />
            <View style={styles.Titulos}>
                <View style={styles.titulo}>
                    <Image source={require('../../assets/imgs/agulha.png')} style={{ height: '60%', width: 50, marginTop: 30, }} />
                    <Text style={styles.title}>MyHealth</Text>
                </View>
                <View>
                    <Text style={styles.description}>Controle as suas vacinas e fique seguro</Text>
                </View>
            </View>

            <View style={styles.inputs}>
                <View style={styles.container}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={setSenha} />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnEntrar} onPress={showHome}>
                    <Text style={styles.letra}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCriar} onPress={showCriarConta}>
                    <Text style={styles.letra}>Criar minha conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnEsqueci} onPress={showRecuperarSenha}>
                    <Text style={styles.letra}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
