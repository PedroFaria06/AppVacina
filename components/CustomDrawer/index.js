import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { UserHeader } from '../UserHeader'
import styles from './styles.js'

export const CustomDrawer = (props) => {

    const sair = () => {
        props.navigation.pop();
    }

    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <UserHeader />
            <DrawerItemList {...props} />
            <View style={{ flexDirection: 'row', marginLeft: 18 }}>
                <Image source={require('../../assets/imgs/saindo.png')} style={{ height: 40, width: 40 }} />
                <TouchableOpacity onPress={sair}>
                    <Text style={{ color: '#419ED7', paddingTop: 10, marginLeft: 28, fontSize: 15 }}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}