import { View, Text, StyleSheet } from "react-native"
import { s } from "../styles/st-splashScreen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export const SplashScreen = () => {
  Icon.loadFont()

  return <View style={s.viewContainer}>
    <Icon name="menu-open" size={48} color="#fff" />
    <Text style={s.textLoadingApp}>Cargando Menú</Text>
  </View>
}
