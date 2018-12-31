/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import FacebookLoginButton from './components/FacebookLoginButton';
import GoogleLoginButton from './components/GoogleLoginButton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FacebookLoginButton
          onLogin={(result) =>{
                if (result.message) {
                    alert('error: '+ result.message);
                } else if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    alert('Login was successful '+ result.profile.name + '- '+ result.profile.email);
                }
            }
          }
          onLogout={() => {
                alert('Logged out');
            }
          }
        />
        <GoogleLoginButton 
           onLogin={(result) => {
               console.log('Google onLogin')
               if (result.message) {
                 alert('error: ' + result.message)
               } else {
                 alert('Login was successful ' + result.name + ' — ' + result.email)
               }
            }
           }
           onLogout={() => alert('logged out')}
           onError={
             (result) => {
               if (result.error) {
                 alert('error: ' + result.error)
               } else {
                 alert('error')
               }
             }
           }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
