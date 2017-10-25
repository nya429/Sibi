import {  StyleSheet,Dimensions } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },

  content:{
    height:'100%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },

instructions: {
    marginTop:-60,
    marginLeft:240,
    textShadowColor:'rgb(163, 150, 97)',
    textShadowOffset:{height:2,width:1},
    color:'rgba(35, 33, 27,0.9)',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    fontSize:20,
    letterSpacing: 2,
    lineHeight:23,
    fontWeight: 'bold',
  },
  inputContainer: {
      flexDirection:'row',
      marginTop:40,
  },

  placeholderStyle:{
    fontFamily: "AnotherFont",
    borderColor: 'rgba(255,255,255,0.1)'
  },

  textInput:{
    marginVertical:10,
    height:50,
    width:180,
    fontSize:16,
    marginHorizontal:10,
    borderWidth:1,
    borderColor:'rgb(255, 187, 0)',
    fontWeight:'bold',
    color:"rgb(224, 206, 74)",
    backgroundColor:'rgba(36, 40, 33, 0.78)',
  },

  touchableOpacityText:{
    alignSelf:'center',
    fontFamily:'Helvetica',
    marginVertical:25,
    fontSize:33,
    color:'rgb(255,255,255)',
  },

  touchableOpacityView: {
    margin:100,
    shadowOffset:{height:5,width:6},
    shadowOpacity:0.6,
    shadowRadius:2,
    shadowColor:'rgba(255, 255, 255, 0.25)',
    borderRadius:100,
    margin:1.5,
    width:97,
    height:97,
    backgroundColor:'rgba(135, 113, 66, 0.9)',
},

touchableOpacity: {
      marginTop:20,
  },

  businessListView:{
  },

  business: {
    backgroundColor:'rgba(36, 40, 33, 0.78)',
    marginVertical:4,
    width:380,
    height:180,
    borderColor:'rgb(255, 187, 0)',
    borderWidth:1,
    flexDirection:'row',
  },

  businessImage: {
    height:170,
    width:170,
    margin:5
  },

  businesContent:{

    marginLeft:10,
    fontSize:14,
    color:'white'
  },

  businessName: {
    marginTop:10,
    marginLeft:10,
    fontSize:22,
    fontWeight:'bold',
   color:'rgb(249, 233, 112)',
  },

  businessRating: {
    marginLeft:15,
    marginTop:10,
    fontSize:18,
    color:'rgb(249, 233, 112)',
  },

  businessAddress: {
    color:'rgba(249, 233, 112, 0.7)',
    marginTop:5,
    marginLeft:20,
    fontSize:18,
  },

  loading: {
    height:461,
    width:200,
    alignItems:'flex-start',
  },

  loadingText: {

    fontSize:23,
    color:'rgb(249, 233, 112)',
    marginTop:50,
  },
});



export default Styles;
