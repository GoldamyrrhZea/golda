import { View, Text,  Image, StyleSheet } from 'react-native'
import React from 'react'
import TFs from '../../assets/logo.png'

const Header = () => {
  return (
    <View style= {styles.header}>

        <Image source={TFs} style={styles.logoheader}/>
        <Text style={styles.HeaderTitle}>Golda's Ketchen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 140,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: '#503a1f',
        
    },
    logoheader: {
      width: 100,
      height: 100,
    },
    HeaderTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
        color: '#ffeec6', 
    }

   
  });

export default Header