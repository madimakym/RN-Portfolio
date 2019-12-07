import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from '../styles';
import { Tab, Tabs } from 'native-base';
import Lp from './lp/index'
import SiteWeb from './siteWeb/index'
import Dashboard from './dashboard/index'
import Mobile from './mobile/index'


class Portfolio extends Component {

  render(){
      return (
          <View style={styles.body}>
              <Tabs> 
                <Tab heading="Landing Page" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'gray', fontSize:12}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{fontSize:12, fontWeight:'500', color: 'black'}}>
                    <Lp/>
                </Tab>
                
                <Tab heading="Site web" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'gray', fontSize:12}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{fontSize:12, fontWeight:'500', color: 'black'}}>
                    <SiteWeb/>
                </Tab>

                <Tab heading="Dashboard" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'gray', fontSize:12}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{fontSize:12, fontWeight:'500', color: 'black'}}>
                    <Dashboard />
                </Tab>
                    
                <Tab heading="Mobile" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'gray', fontSize:12}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{fontSize:12, fontWeight:'500', color: 'black'}}>
                    <Mobile />
                </Tab>
            </Tabs>
          </View>
      );
    }
}

 
export default Portfolio;