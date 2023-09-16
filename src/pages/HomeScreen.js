import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { CHANGE_FULL_NAME, CHANGE_SUR_NAME, CHANGE_E_MAIL, CHANGE_TEL } from '../redux/actions/actionTypes';

const HomeScreen = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View>

      <View style={{ margin: 20 }}>
        <Text style={styles.title} >AD</Text>
        <TextInput
          style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
          onChangeText={text =>
            dispatch({
              type: CHANGE_FULL_NAME,
              payload: text,
            })
          }
        />

      </View>

      <View style={{ margin: 20 }}>
        <Text style={styles.title} >SOYAD</Text>
        <TextInput
          style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
          onChangeText={text =>
            dispatch({
              type: CHANGE_SUR_NAME,
              payload: text,
            })
          }
        />
      </View>

      <View style={{ margin: 20 }}>
        <Text style={styles.title} >E-MAİL</Text>
        <TextInput style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
          onChangeText={text =>
            dispatch({
              type: CHANGE_E_MAIL,
              payload: text,
            })
          }
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={{ margin: 20 }}>
        <Text style={styles.title} >TELEFON</Text>
        <TextInput style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
          onChangeText={text =>
            dispatch({
              type: CHANGE_TEL,
              payload: text,
            })
          }
          keyboardType="phone-pad"
        />
      </View>

      <View>

        <Button title='Login' onPress={() => navigation.navigate('Product')} />

      </View>

    </View>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 10,
    color: 'green',
    fontWeight: 'bold'
  }

})