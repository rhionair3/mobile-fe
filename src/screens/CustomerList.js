import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, ScrollView, Image, Text, ListView } from 'react-native'
import {Header, Left, Right, Icon} from 'native-base'

export class CustomerList extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2']),
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header>
                <Left>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                    <Text> Customer List</Text>
                </Right>
                </Header>
                <View>
                <ScrollView>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Text style={{fontSize:60}}>{rowData}</Text>}
                    />
                </ScrollView>
                </View>
            </View>
        )
    }
}

export default CustomerList

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });