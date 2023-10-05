import { View, Text, Image, TouchableOpacity } from 'react-native';

const NavMore = ({ tit, btn, onPress }) => {
    return (
        <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 32 }}
        >
            <Text style={{ fontSize: 22, fontWeight: 700 }}>{tit}</Text>
            <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text>{btn}</Text>
                <Image source={require('../assets/iconMore.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default NavMore;
