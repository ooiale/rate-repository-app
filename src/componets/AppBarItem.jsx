import { Pressable } from "react-native"
import Text from "./Text"



const AppBarItem = ({style, text, onPress}) => {

  return (
    <Pressable onPress={onPress} style={style}>
      <Text color={'white'}
            fontSize={'subheading'}
      
      > {text} </Text>
    </Pressable>
  )
}

export default AppBarItem