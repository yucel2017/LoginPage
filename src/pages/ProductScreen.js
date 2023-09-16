import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductScreen = () => {

  const fullName = useSelector(state => state.user.fullName);
  const surName = useSelector(state => state.user.surName);
  const eMail = useSelector(state => state.user.eMail);
  const tel = useSelector(state => state.user.tel);

  return (
    <View>
      <Text>AD : {fullName} </Text>
      <Text>SOYAD : {surName} </Text>
      <Text>E-mail : {eMail} </Text>
      <Text>TELEFON : {tel} </Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})