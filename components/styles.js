import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor:'white', flex:1
    },

    title:{
        fontSize:22, 
        fontWeight:'800',
        marginBottom:15,
        color:'#313131'
    },

    btnSkill:{
        marginRight:6, backgroundColor:'#3c97e1', alignSelf: 'flex-start', padding:6, borderRadius:5, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },  elevation: 3, shadowOpacity: 0.15
    },

    textBtnSkill:{
        fontSize:12, color:'white'
    },

    blcSkill:{
        width:50,
        height:50,
        borderRadius: 50/2, 
        justifyContent:'center', 
        alignItems:'center',
        marginHorizontal:8, 
        backgroundColor:'white', alignSelf: 'flex-start', padding:6, shadowColor: '#000', shadowOffset: { width: 1, height: 1},  elevation: 3, shadowOpacity: 0.15
    },

    imgSkill:{
        width:30, height:30
    },


  listItem:{
    marginHorizontal:5,
    marginVertical:10,
    flex:1, 
  },

  Image:{
    width:170, height:170, borderRadius:8,
  },

  imageFloue:{
    width:170, height:170, borderRadius:8,
    opacity:0.5
  },

  listImage:{
    width:170, 
    height:170,
    borderRadius:8,
    shadowColor: '#000000', 
    shadowOffset: { width: 1, height: 1 }, 
    elevation: 3, 
    shadowOpacity: 0.2,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'
  }

  

});