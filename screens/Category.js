import { Image, ImageBackground } from 'react-native';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Category = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={{ width: '100%', height: 397, borderRadius: 32, overflow: 'hidden' }}
                source={require('../assets/imgFlowers1.png')}
            >
                <View style={{ justifyContent: 'space-between', flex: 1, marginVertical: 44, paddingHorizontal: 32 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/Iicon_Back.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/iconShare.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 12,
                                paddingHorizontal: 14,
                                alignItems: 'center',
                                backgroundColor: 'rgba(255,255,255,0.3)',
                                borderRadius: 999,
                            }}
                        >
                            <Image style={{ width: 32, height: 32 }} source={require('../assets/Ava.png')} />
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ marginHorizontal: 4, fontSize: 18, color: '#fff' }}>
                                        Anderson G.
                                    </Text>
                                    <Image source={require('../assets/Icon_Verify.png')} />
                                </View>
                                <Text style={{ color: '#fff', fontSize: 18 }}>* 4.9</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Until 26.09</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={{ padding: 18, justifyContent: 'space-between', flex: 1 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: '80%' }}>
                            <Text style={{ fontSize: 28, fontWeight: 700 }}>Go for a walk and feed the dog</Text>
                        </View>
                        <Image
                            style={{ width: 32, height: 28 }}
                            tintColor={'black'}
                            source={require('../assets/Icon_Like.png')}
                        />
                    </View>
                    <View style={{ marginTop: 18, gap: 18 }}>
                        <Text style={{ fontSize: 20, lineHeight: 28 }}>
                            Leaving for a week, French Bulldog Wilfred needs help feeding twice a day and walk from 26
                            to 30 September. I bought food, it will be easy.
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <Image source={require('../assets/iconWallet.png')} />
                            <Text style={{ fontSize: 18, fontWeight: 600 }}>Reward 34$</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <Image source={require('../assets/iconGeo.png')} />
                            <Text style={{ fontSize: 18, fontWeight: 600 }}>3 HERALD</Text>
                            <Text>400m from you</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image source={require('../assets/Icon_Chat.png')} />
                    <TouchableOpacity
                        style={{ width: 280, borderRadius: 12, alignItems: 'center', backgroundColor: '#A58EFF' }}
                    >
                        <Text style={{ color: '#fff', paddingVertical: 22, fontSize: 18 }}>Respond</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Category;
