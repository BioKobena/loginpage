import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
  return (
    <View>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
            {props.name}
        </Text>
    </View>
  )
}

export default Header