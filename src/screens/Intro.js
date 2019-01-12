import React from 'react'
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';


export default class Intro extends React.Component {
  LoginPengguna = () => {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4834d4' }}>
        <StatusBar backgroundColor="#4834d4" barStyle="light-content" />
        <Text style={{fontWeight:'bold', fontSize:20, color: '#ffffff'}}> APLIKASI </Text>
        <Text style={{fontWeight:'bold', fontSize:22, color: '#ffffff'}}> SISTEM INFORMASI </Text>
        <Text style={{fontWeight:'bold', fontSize:22, color: '#ffffff'}}> DATA SERVER PELANGGAN </Text>
        <Text style={{fontWeight:'bold', fontSize:45, color: '#ffffff'}}> SELINDO </Text>

        <TouchableOpacity style={{
                                  width:300, 
                                  backgroundColor:'#686de0', 
                                  borderRadius: 25, 
                                  marginVertical: 15, 
                                  paddingVertical: 15
                                }} 
                          onPress={this.LoginPengguna}>
          <Text style={{fontSize:16, fontWeight:'500', color:'#ffffff', textAlign:'center'}}> Login </Text>
      </TouchableOpacity>
      </View>
    )
  }
}

