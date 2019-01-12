import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header, Left, Right, Icon} from 'native-base'
export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
          <Right>
            <Text> Beranda </Text>
          </Right>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> Home Screen </Text>
        </View>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});