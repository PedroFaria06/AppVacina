import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CustomDrawer } from '../../components/CustomDrawer';
import { Home } from '../Home';
import { CriarConta } from '../CriarConta';
import { RecuperarSenha } from '../RecuperarSenha';
import { NovaVacina } from '../NovaVacina';
import { EditarVacina } from '../EditarVacina';
import { ProximaVacina } from '../ProximaVacina';
import { Login } from '../Login';

const HomeNavigator = () => {
  const Drawer = createDrawerNavigator()
  return (

    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>

      <Drawer.Screen
        name="Minhas Vacinas"
        component={Home}
        options={{
          drawerIcon: () => <Image source={require('../../assets/imgs/agulha.png')} style={{ height: '120%', width: '15%' }} />,
          headerStyle: { backgroundColor: '#c0e7e2' },
          drawerActiveTintColor: '#419ED7',
          drawerInactiveTintColor: "#429ed7",
          headerTintColor: '#add4d1',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 30, color: '#419ED7' },
        }} />

      <Drawer.Screen name="Próximas Vacinas" component={ProximaVacina} options={{
        drawerIcon: () => <Image source={require('../../assets/imgs/calen.png')} style={{ height: '120%', width: '15%' }} />,
        headerStyle: { backgroundColor: '#c0e7e2' },
        drawerActiveTintColor: '#419ED7',
        drawerInactiveTintColor: "#429ed7",
        headerTintColor: '#add4d1',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 30, color: '#429ed5' },
      }} />

      <Drawer.Screen name="Nova Vacina" component={NovaVacina} options={{
        title: "Nova vacina",
        drawerItemStyle: { height: 0 },
        headerStyle: { backgroundColor: '#c0e7e2' },
        headerTintColor: '#add4d1',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 30, color: '#429ed5' },
      }} />

      <Drawer.Screen name="Editar Vacina" component={EditarVacina} options={{
        title: "Editar vacina",
        drawerItemStyle: { height: 0 },
        headerStyle: { backgroundColor: '#c0e7e2' },
        headerTintColor: '#add4d1',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 30, color: '#429ed5' },
      }} />

    </Drawer.Navigator>
  )
}

const Navigation = () => {

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={
            {
              title: 'Login',
              headerStyle: { backgroundColor: '#c0e7e2' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 30, color: '#429ed5' },
              headerShown: false
            }} />

        <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />

        <Stack.Screen name="Criar Conta" component={CriarConta}
          options={
            {
              title: 'Nova Conta',
              headerStyle: { backgroundColor: '#c0e7e2' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 30, color: '#429ed5' },
            }} />

        <Stack.Screen name="Recuperar Senha" component={RecuperarSenha}
          options={
            {
              title: 'MyHealth',
              headerStyle: { backgroundColor: '#c0e7e2' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 30, color: '#429ed5' },
            }} />

        <Stack.Screen name="Ed Senha" component={RecuperarSenha}
          options={
            {
              title: 'MyHealth',
              headerStyle: { backgroundColor: '#c0e7e2' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontWeight: 'bold', fontSize: 30, color: '#429ed5' },
            }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Navigation;
