import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, Animated } from 'react-native';
import { Element3, Like1, Send, ProfileCircle, Book, Home2, Message, Add, SearchNormal1 } from 'iconsax-react-native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall, Searchbar } from '../../components';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    return (
        <View style={styles.container}>
            
            <ListBlog />
        </View>
    );
}
// const Itemsearch = () => {
//     
//     return (

//     );
// };
const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Orderdetail" component={Orderdetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const Orderdetail = ({ item, onPress, color }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={BlogList.item}>
                <Text style={{ ...styles.title }}>{item.categoryName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const FlatListCategory = () => {
    const [selected, setSelected] = useState(1);
    const renderItem = ({ item }) => {
        const color = item.id === selected ? colors.blue() : colors.black();
        return (
            <Orderdetail
                item={item}
                onPress={() => setSelected(item.id)}
                color={color}
            />
        );
    };
    return (
        <FlatList
            data={BlogList}
            keyExtractor={item => item.id}
            renderItem={item => renderItem({ ...item })}
            ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
            contentContainerStyle={{ paddingLeft: 5 }}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

const ListBlog = () => {
    const horizontalData = BlogList.slice(0, 5);
    const verticalData = BlogList.slice(4);
    const navigation = useNavigation();
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    const bottomBarY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, 52],
    });
    return (
        <View>
            <Animated.View style={[styles.header, { transform: [{ translateY: headerY }] }]}>
                <Text style={styles.title}>HebJam.</Text>
            </Animated.View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
                <View style={styles.bar}>
                    <SearchNormal1 size={20} color={colors.white(1.0)} variant="Linear" />
                    <Text style={styles.placeholder}>Search</Text>
                </View>
            </TouchableWithoutFeedback >
            <Animated.ScrollView

                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
                contentContainerStyle={{

                    paddingBottom: 70,
                }}>
                <View style={styles.listBlog}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 25, marginTop: 10 }}>NEWS</Text>
                    <ListHorizontal data={horizontalData} />
                    <View style={styles.listCard}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 25, marginVertical: 15 }}>Featured Products</Text>
                        {verticalData.map((item, index) => (
                            <ItemSmall item={item} key={index} />
                        ))}
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkgreen(),
    },
    header: {
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        backgroundColor: '#79AC78',
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderColor: colors.gold(),
        borderWidth: 1,
        height: 55,
        elevation: 8,
        paddingTop: 8,
        paddingBottom: 8,
    },
    footer: {
        height: 40,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    startbottom: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 25,
        color: 'black'
    },
    title: {
        fontSize: 25,
        fontFamily: fontType['Pjs-ExtraBold'],
        color: '#000000',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    listCategory: {
        paddingVertical: 10,
    },
    bar: {
        flexDirection: 'row',
        padding: 20,
        gap: 10,
        marginTop: 20,
        marginHorizontal: 30,
        alignItems: 'center',
        backgroundColor: colors.gold(0.1),
        borderWidth: 2.5,
        borderColor: colors.gold(),
        borderRadius: 10,
        flex: 1,
    },
    placeholder: {
        fontSize: 14,
        fontFamily: fontType['Pjs-Medium'],
        color: colors.grey(0.5),
        lineHeight: 18,
    },
});