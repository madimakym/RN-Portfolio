import React, { Component } from "react";
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import styles from '../styles';


class Competences extends Component {


  render(){
      return (
          <ScrollView style={styles.body}>
              <View style={{ marginTop:15, backgroundColor:'white', padding:12, borderBottomColor:'#e3e5ea', borderBottomWidth:0.5}}>
                <Text style={styles.title}>Compétences techniques</Text> 
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.blcSkill}>
                            <Image source={require('../img/wordPress.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/html-css-js.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/bootstrap.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/react-native.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/electronjs.png')} resizeMode='contain'style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/firebase.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                    </View>
                
                    <View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
                        
                        <View style={styles.blcSkill}>
                            <Image source={require('../img/flutter.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/git.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/javaScript.png')} resizeMode='contain'style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/php.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/react.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/sass.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>

                    </View>


                    <View style={{flexDirection:'row', marginTop:20}}>
                        <View style={styles.blcSkill}>
                            <Image source={require('../img/nodejs.png')} resizeMode='contain'style={styles.imgSkill} />
                        </View>

                        <View style={styles.blcSkill}>
                            <Image source={require('../img/photoshop.png')} resizeMode='contain' style={styles.imgSkill} />
                        </View>
                    </View>
              </View>

              <View style={{ paddingVertical:25, marginHorizontal:6, backgroundColor:'white', paddingHorizontal:12, borderBottomColor:'#e3e5ea', borderBottomWidth:1}}>
                <Text style={styles.title}>Langues</Text> 
                <View style={{flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontWeight:'400'}}>Français</Text> 
                    <Text style={{color:'gray'}}> - Courant</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>Anglais</Text> 
                    <Text style={{color:'gray'}}> - Technique</Text>
                </View>
            </View>


            <View style={{ paddingVertical:25, marginHorizontal:6, backgroundColor:'white', paddingHorizontal:12, borderBottomColor:'#e3e5ea', borderBottomWidth:1}}>
                <Text style={styles.title}>Personalité</Text> 
                <View style={{flexDirection:'row'}}> 
                <View style={styles.btnSkill}>
                    <Text style={{fontSize:12, color:'white'}}>Self-motivation</Text>
                </View>

                    <View style={styles.btnSkill}>
                        <Text style={{fontSize:12, color:'white'}}>Fast learning</Text>
                    </View>
                </View>
            </View>
          </ScrollView>
      );
    }
}

 
export default Competences;