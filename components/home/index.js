import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import styles from '../styles';

class Home extends Component {
  static navigationOptions = {
    header: null  
  }


  render(){
      return (
          <ScrollView style={styles.body}>
              <View style={{paddingTop:50, backgroundColor:'white', padding:20, alignItems:'center', borderBottomColor:'#e3e5ea', borderBottomWidth:1}}>
                  <View>
                    <Image source={require('../img/profil.jpg')} style={{ width:140, height:140, borderRadius:140/2, marginBottom:17}} />
                  </View>
                  <Text style={{fontSize:22, fontWeight:'400'}}>Maky Madi</Text>
                  <Text style={{color:'gray', fontSize:13, paddingVertical:8}}>Développeur Front end & Mobile</Text>
                  <Text style={{color:'gray', fontSize:13}}>Dakar - Sénégal</Text>
              </View>
              <View style={{backgroundColor:'white', padding:10, alignItems:'center', borderBottomColor:'#e3e5ea', borderBottomWidth:1}}>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/maky-madi-94818570/')}   style={{alignItems:'center', justifyContent:'center', backgroundColor:'#3c97e1', width:35, height:35, borderRadius:50/2, borderWidth:0.2, borderColor:'#778CA2', shadowColor: '#000', shadowOffset: { width: 1, height: 1 },  elevation: 3, shadowOpacity: 0.15}}>
                    <Entypo name="linkedin" color="white"/>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Linking.openURL('https://github.com/madimakym?tab=repositories')} style={{marginHorizontal:10, alignItems:'center', justifyContent:'center', backgroundColor:'#3c97e1', width:35, height:35, borderRadius:50/2, borderWidth:0.2, borderColor:'#778CA2', shadowColor: '#000', shadowOffset: { width: 1, height: 1 },  elevation: 3, shadowOpacity: 0.15}}>
                    <AntDesign name="github" color="white" style={{marginHorizontal:10}}/>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/makymadi/')} style={{alignItems:'center', justifyContent:'center', backgroundColor:'#3c97e1', width:35, height:35, borderRadius:50/2, borderWidth:0.2, borderColor:'#778CA2', shadowColor: '#000', shadowOffset: { width: 1, height: 1 },  elevation: 3, shadowOpacity: 0.15}}>
                    <Feather name="instagram" color="white"/>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{backgroundColor:'white', marginTop:7, padding:12, borderBottomColor:'#e3e5ea', borderBottomWidth:1}}>
                <Text style={styles.title}>A propos</Text> 
                <Text style={{marginTop:10}}>Développeur Front-end & Mobile, Autodidacte curieux passionné par les nouvelles technologies. Je propose un service de qualité, tout en respectant les standards web actuels. Aujourd'hui je profite de mon statut de freelance pour m'investir dans des projets web innovants.</Text>
                <Text>Mon accompagnement peut couvrir selon vos besoins l'ensemble des étapes d'un projet de sa conception, à la réalisation puis son suivi. N'hésitez pas à me contacter afin d'échanger sur votre projet. J'y répondrai avec plaisir!</Text>
                <Text>A bientôt.</Text>
                <View style={{marginTop:24}}>
                  <View style={{flexDirection:'row', borderBottomColor:'gray', borderBottomWidth:0.3, paddingVertical:15}}>
                    <Text style={{fontWeight:'800'}}>Téléphone</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('tel:+221784336027')} style={{position:'absolute', right:0, top:15}}>
                      <Text style={{color:'gray'}}>(+221)784336027</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{flexDirection:'row', borderBottomColor:'gray', borderBottomWidth:0.2, paddingVertical:15}}>
                    <Text style={{fontWeight:'800'}}>Email</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('mailto:makymadi@gmail.com?subject=&body=')} style={{position:'absolute', right:0, top:15}}>
                      <Text style={{color:'gray'}}>makymadi@gmail.com</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{flexDirection:'row', borderBottomColor:'gray', borderBottomWidth:0.2, paddingVertical:15}}>
                    <Text style={{fontWeight:'800'}}>Skype</Text>
                    <TouchableOpacity style={{position:'absolute', right:0, top:15}}>
                      <Text style={{color:'gray'}}>maky.madi2</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{flexDirection:'row', paddingVertical:15}}>
                    <Text style={{fontWeight:'800'}}>Portfolio</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.makymadi.com')} style={{position:'absolute', right:0, top:15}}>
                      <Text style={{color:'gray'}}>www.makymadi.com</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </ScrollView>
      );
    }
}

 
export default Home;