import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles.js'
import MaskInput, { Masks } from 'react-native-mask-input';

export const CriarConta = (props) => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [repetirSenha, setRepetirSenha] = useState();
    const [nome, setNome] = useState();
    const [sexo, setSexo] = useState();
    const [dataNascimento, setDataNascimento] = useState();

    const showLogin = () => {
        props.navigation.pop()
    }

    return (
        <View style={styles.background}>

            <View>

                <View style={styles.container}>
                    <Text style={styles.label}>Nome completo</Text>
                    <TextInput style={styles.input} value={nome} onChangeText={setNome}></TextInput>
                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Sexo</Text>
                    <View style={styles.containerRadio}>
                        <View style={styles.container}>
                            <RadioButton
                                value="masculino"
                                color="#419ed7"
                                status={sexo === 'masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('masculino')}
                            />
                            <Text style={styles.label}>Masculino</Text>
                        </View>
                        <View style={styles.container}>
                            <RadioButton
                                value="feminino"
                                color="#419ed7"
                                status={sexo === 'feminino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('feminino')}
                            />
                            <Text style={styles.label}>Feminino</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Data Nascimento</Text>
                    <MaskInput
                        style={styles.input}
                        value={dataNascimento}
                        onChangeText={setDataNascimento}
                        mask={Masks.DATE_DDMMYYYY}
                    />
                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={setSenha} />
                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Repetir Senha</Text>
                    <TextInput style={styles.input} secureTextEntry={true} value={repetirSenha} onChangeText={setRepetirSenha}></TextInput>
                </View>

            </View>

            <TouchableOpacity style={styles.btnCadastrar} onPress={showLogin}>
                <Text style={styles.letra}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
}
