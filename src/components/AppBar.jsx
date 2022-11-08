import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-web'
import { Link } from 'react-router-native'
//import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    paddingTop: 20
  },
  text: {
    color: 'white',
    fontWeight: 700,
    paddingLeft: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to='/signin'>
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar
