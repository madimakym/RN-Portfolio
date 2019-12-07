import React, { Component } from "react";
import Router from './components/routes';
import { YellowBox } from 'react-native';
import * as firebase from 'firebase';
YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(['Warning']);

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC8ZnWwlOY-4yrrPMpL1jWSA9OSxxbwzFs",
  authDomain: "tiggmi-test.firebaseapp.com",
  databaseURL: "https://tiggmi-test.firebaseio.com",
  projectId: "tiggmi-test",
  storageBucket: "tiggmi-test.appspot.com",
  messagingSenderId: "1009417259862",
  appId: "1:1009417259862:web:bbf5827b20722c9f48a4f7"
};

firebase.initializeApp(firebaseConfig);


class App extends Component {
  render(){
      return (
        <Router/>
      );
    }
}

export default App;