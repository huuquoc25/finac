import { View, Text, TextInput, Image, FlatList, ScrollView } from 'react-native';
import NavMore from '../components/NavMore';
import FlatLst from '../components/FlatLst';
import CateItem from '../components/CateItem';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: 1,
        img: require('../assets/imgDogCard.png'),
        avt: require('../assets/Ava.png'),
        name: 'Anderson G.',
        time: 'Until 26.09',
        tit: 'Go for a walk and feed the dog',
    },
    {
        id: 2,
        img: require('../assets/imgDogCard.png'),
        avt: require('../assets/Ava.png'),
        name: 'Anderson G.',
        time: 'Until 26.09',
        tit: 'Water one a and feed the dog',
    },
    {
        id: 3,
        img: require('../assets/imgDogCard.png'),
        avt: require('../assets/Ava.png'),
        name: 'Anderson G.',
        time: 'Until 26.09',
        tit: 'Go for a walk and feed the dog',
    },
];
const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={{ marginVertical: 44 }}>
            <View style={{ marginHorizontal: 18 }}>
                <View style={{ backgroundColor: '#fff', borderRadius: 18, alignItems: 'center', flexDirection: 'row' }}>
                    <Image style={{ width: 28, marginLeft: 12 }} source={require('../assets/iconSearch.png')} />
                    <TextInput
                        style={{ fontSize: 18, flex: 1, marginLeft: 8, paddingHorizontal: 8, paddingVertical: 12 }}
                        placeholder="Search"
                    />
                    <View style={{ backgroundColor: '#A58EFF', borderRadius: 12, height: 58, width: 58 }}>
                        <Image style={{ width: '100%' }} source={require('../assets/Icon_Filter.png')} />
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <NavMore tit={'Next to you'} btn={'On the map'} onPress={() => navigation.navigate('OnMap')} />
                        <View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <FlatLst
                                        key={item.id}
                                        onPress={() => navigation.navigate('Category')}
                                        item={item}
                                    />
                                )}
                                horizontal
                            />
                        </View>
                    </View>
                    <View>
                        <NavMore tit={'Categories'} btn={'See all'} />
                        <View style={{ gap: 18 }}>
                            <CateItem />
                            <CateItem />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Home;
