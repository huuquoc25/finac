import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Nav = ({ tit }) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
            }}
        >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/Iicon_Back.png')} />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 700 }}>{tit}</Text>
            </View>
        </View>
    );
};

export default Nav;
