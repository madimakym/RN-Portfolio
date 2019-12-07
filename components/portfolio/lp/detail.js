import React, { Component } from "react";
import { Image, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import * as firebase from 'firebase';

class Competences extends Component {
    constructor(props){
        super(props);
    
        this.state ={ 
          isLoading: true,
          data: [],
        }
      }

      componentDidMount(){
        var id = this.props.navigation.state.params.id;
        firebase.database().ref('/portfolio/lp/'+id).on('value', (snapshot) => {
            const userObj = snapshot.val();
            this.setState({
                data:userObj
            })
        });
    }

  render(){
    // console.log('#', this.state.data)
      return (
          <ScrollView style={{flex:1, paddingHorizontal:14}}>
            <View style={{marginTop:14}}>
                <View style={{flexDirection:'row', borderBottomColor:'#e3e5ea', borderBottomWidth:0.5, paddingBottom:20}}>
                    <Image source={{uri: this.state.data.image}} resizeMode='stretch' style={{width:150, height:108, borderRadius:10}}/>
                    <View style={{paddingHorizontal:10}}>
                        <Text style={styles.title}>{this.state.data.titre}</Text>
                        <Text style={{marginBottom:10}}>{this.state.data.description}</Text>
                        <TouchableOpacity>
                            <EvilIcons name="eye" color="black" style={{fontSize:20}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            
                <View style={{marginTop:30, borderBottomColor:'#e3e5ea', borderBottomWidth:0.5}}>
                    <Text style={{fontWeight:'800', color:'#313131'}}>Captures d'ecran</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical:20}}>
                            <View style={{alignItems:'center', marginRight:14, marginLeft:10, backgroundColor:'white', borderRadius:10, shadowColor: 'gray', shadowOffset: { width: 1, height: 1},  elevation: 3, shadowOpacity: 1}}> 
                                <Image source={{uri: this.state.data.image}} resizeMode='stretch' style={{width:250, height:200, borderRadius:10}}/>
                            </View>

                        </ScrollView>
                    </View>

                    <View style={{flexDirection:'row',paddingVertical:26, borderBottomColor:'#e3e5ea', borderBottomWidth:0.5}}>
                        <Text style={{ fontWeight:'800', color:'#313131'}}>Technologies:</Text>
                        <Text style={{marginLeft:10}}>{this.state.data.techno}</Text>
                    </View>


                    <View style={{flexDirection:'row',paddingVertical:26, borderBottomColor:'#e3e5ea', borderBottomWidth:0.5}}>
                        <Text style={{ fontWeight:'800', color:'#313131'}}>Entreprise:</Text>
                        <Text style={{marginLeft:10}}>{this.state.data.entreprise}</Text>
                    </View>
            </View>
          </ScrollView>
      );
    }
}

 
export default Competences;