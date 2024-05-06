import { StyleSheet, Text, View , Image,Button} from 'react-native';

export const Home =({navigation}) =>{

    return(
      <View style={styles.container}>
        <Text>Pedro Pedro</Text>
        <Image source={require('../assets/pin.jpg')} style={styles.img}/>
        <Button title='Wassap' onPress={()=>navigation.navigate('Wassap')}/>
        <StatusBar style="auto"/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7AED5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      width:200,
      height:200,
      borderRadius:100,
      margin:20
    }
  });
  