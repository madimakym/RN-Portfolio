import React, { Component } from "react";
import { Image, View, FlatList, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from '../../styles';
import * as firebase from 'firebase';
import { withNavigation } from 'react-navigation';

class portfolio extends Component {
    constructor(props){
        super(props);
    
        this.state ={ 
          isLoading: true,
          data: [],
        }
      }

    componentDidMount(){
        firebase.database().ref('/portfolio/siteweb').on('value', (snapshot) => {
            const userObj = snapshot.val();
            this.setState({
              data: userObj
            })
          });
      }

  render(){

      return (
          <View style={{flex:1, paddingHorizontal:14}}>
            <FlatList
                data={this.state.data}
                showsVerticalScrollIndicator={false}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{padding:10}}>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('detailSiteWeb', {id: index})}>
                          <View style={{alignItems:'center', marginTop:14, backgroundColor:'white', borderRadius:10, shadowColor: 'gray', shadowOffset: { width: 1, height: 1},  elevation: 3, shadowOpacity: 1}}> 
                             <Image source={{uri: item.image}} resizeMode='stretch' style={{width:'100%', height:270, borderRadius:10}}/>
                          </View>
                        </TouchableWithoutFeedback>
                        <View style={{paddingTop:10, alignItems:'center'}}>
                            <Text style={{fontSize:18, color:"#3c97e1"}}>{item.titre}</Text>
                        </View>
                    </View>
                )}
            />
          </View>
      );
    }
}

export default withNavigation(portfolio);