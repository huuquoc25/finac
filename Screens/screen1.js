import { TextInput,StyleSheet, View, Button, Text, Image } from "react-native";

export function Screen1 ({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.search}>
                <Image source={require('../image/Search.png')}/>
                <Image source={require('../image/Icon_Filter.png')}/>
            </View>
            <View style={styles.hbody}>
                <Text  >
                    Next to you
                </Text>
                <Text>
                On the map 
                </Text>
            </View>
        </View>
    );};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "#FCFCFC",
        alignContent:'center'
    },
    search:{
        flex: 1,
        flexDirection: "row",
        paddingLeft:16,
        paddingTop:74
    },
    hbody:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
    },
    text1:{
        color:"#5EA33A",
        fontSize: 20,
        fontFamily:'bold'
    },
    text2:{
        color:"#4A4A4A",
        fontSize: 17,
        textAlign: "center",
        marginTop:30,
        paddingHorizontal:60
    },
    btn:{
        
        marginTop: 20,
        marginHorizontal: 50,
        borderRadius: 80,
        overflow: "hidden",
        fontFamily: "FallingSkyBd",
    },
    btn1:{
        marginTop: 20,
        marginHorizontal: 50,
        borderRadius: 80,
        overflow: "hidden",
    },
    image:{
        alignItems:'center'
    }
});