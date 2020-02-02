import React, { Component } from 'react'
import { StyleSheet, Text, View, DrawerLayoutAndroid  } from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'

class Home extends Component {
  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    var drawer = (
      <View style={{flex: 1, backgroundColor: '#91c988'}}>
        <Text style={{margin: 20, fontSize: 15, textAlign: 'left'}}>Your buttons here</Text>
      </View>
    )
    return (
      <View style={styles.container}>
        <DrawerLayoutAndroid renderNavigationView={() => drawer}>
          <View>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </DrawerLayoutAndroid>
        <Button
          title='Signout'
          onPress={this.handleSignout}
          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default withFirebaseHOC(Home)
