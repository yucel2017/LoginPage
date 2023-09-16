import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductScreen = () => {

  const fullName = useSelector(state => state.user.fullName);
  const surName = useSelector(state => state.user.surName);
  const eMail = useSelector(state => state.user.eMail);
  const tel = useSelector(state => state.user.tel);

  return (
    <View style={styles.ProductScreen}>
      <View style={styles.kb} >
        <Text style={{ fontSize: 25, color: 'green' }}> KULLANICI BİLGİLERİ </Text>
      </View>
      <View style={styles.card} >
        <Text style={{ fontSize: 20, color: '#662549' }} >AD : {fullName} </Text>
        <Text style={{ fontSize: 20, color: '#662549' }} >SOYAD : {surName} </Text>
        <Text style={{ fontSize: 20, color: '#662549' }} >E-MAIL : {eMail} </Text>
        <Text style={{ fontSize: 20, color: '#662549' }} >TELEFON : {tel} </Text>
      </View>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({

  ProductScreen: {
    flex: 1
  },

  kb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  card: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20
  }
});