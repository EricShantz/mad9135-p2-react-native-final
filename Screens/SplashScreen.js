import SafeAreaView from "react-native-safe-area-view"
import { StyleSheet} from "react-native"
import { View } from "react-native"
import { Text } from "react-native-elements"

export default function SplashScreen(){

  return(
    <View style={(theme.container, theme.backgroundStyling)}>
      <Text> You've reached the splash screen</Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor: "#FF7b34"
//   }
// })