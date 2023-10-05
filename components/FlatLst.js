import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

const FlatLst = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: 264,
                borderRadius: 18,
                overflow: 'hidden',
                marginHorizontal: 18,
                padding: 18,
            }}
        >
            <ImageBackground
                style={{ width: '100%', height: 240, borderRadius: 18, overflow: 'hidden' }}
                source={item.img}
            >
                <View style={{ padding: 18, justifyContent: 'space-between', flexDirection: 'column', flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>{item.time}</Text>
                        <Image source={require('../assets/Icon_Like.png')} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            borderRadius: 999,
                        }}
                    >
                        <Image source={item.avt} />
                        <Text style={{ marginHorizontal: 4, fontSize: 18, color: '#fff' }}>{item.name}</Text>
                        <Image source={require('../assets/Icon_Verify.png')} />
                    </View>
                </View>
            </ImageBackground>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 28,
                }}
            >
                <Text style={{ fontSize: 22, width: '80%' }}>{item.tit}</Text>
                <Image style={{ width: 36, height: 36 }} source={require('../assets/Icon_Chat.png')} />
            </View>
        </TouchableOpacity>
    );
};

export default FlatLst;
