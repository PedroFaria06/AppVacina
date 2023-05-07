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

            <ImageBackground source={require('../../assets/imgs/fundo.jpg')} resizeMode="cover" style={styles.image} />

            <View style={styles.titulo}>
                <Image source={require('../../assets/imgs/vacina.png')} style={{ height: '60%', width: 50, marginTop: 30, marginRight: 20 }} />
                <Text style={styles.title}>My Health</Text>
            </View>
            <View>
                <Text style={styles.description}>Controle as suas vacinas e fique seguro</Text>
            </View>
            <View>
                <View style={styles.container}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={setSenha} />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={showHome}>
                    <Text style={[styles.btnEntrar, styles.shadow]}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showCriarConta}>
                    <Text style={[styles.btnCriar, styles.shadow]}>
                        Criar minha conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showRecuperarSenha}>
                    <Text style={[styles.btnEsqueci, styles.shadow]}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
