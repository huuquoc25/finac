import { View, Text, Image } from 'react-native';
import Nav from '../components/Nav';

const OnMap = () => {
    return (
        <View style={{ marginVertical: 44 }}>
            <Nav tit={'Next to you'} />
            <View style={{ width: '100%', padding: 18 }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../assets/Maps.png')} />
            </View>
        </View>
    );
};

export default OnMap;
