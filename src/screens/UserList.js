import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header, Left, Right, Icon} from 'native-base'

export class UserList extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
          <Right>
            <Text> User List </Text>
          </Right>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> User Page Management </Text>
        </View>
      </View>
    )
  }
}

export default UserList

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });