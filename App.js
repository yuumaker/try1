import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Troye Sivan</Text>
  //   </View>
  // );
  const {box,yellow}=styles;
  return (
    <View style={styles.box1}>
  <Text style={styles.background1}>Troye Sivan</Text>
  {/* <Text style={[box2,background2]}>Nash</Text> */}
  </View>
  );
}

const styles = StyleSheet.create({
  box1:{
    fontSize:20,
    fontWeight:'bold',
    color:'	#444444',
    height:313.5,
    width:355,
    padding:10,
    marging:10,
    alignItems:'center',
  },
  background1:{
    backgroundColor:'#CCEEFF'
  },
  // box2:{
  //   fontSize:20,
  //   fontWeight:'bold',
  //   color:'	#444444',
  //   height:313.5,
  //   width:355,
  //   padding:10,
  //   marging:10,
  // },
  // background2:{
  //   backgroundColor:'#E8CCFF'
  // }

  // container: {
  //   flex: 1,
  //   backgroundColor: '#CCEEFF',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
