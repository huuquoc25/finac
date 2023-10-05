import { View, Text, Image } from 'react-native'

const CateItem = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/Icon_Moving.png')}/>
      <View style={{flex: 1, flexDirection: 'row',marginLeft: 18, justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{gap: 4}}>
            <Text style={{fontSize: 18, fontWeight: 700}}>Moving and things</Text>
            <Text>24 tasks</Text>
        </View>
        <Image source={require('../assets/iconMore.png')}/>
      </View>
    </View>
  )
}

export default CateItem