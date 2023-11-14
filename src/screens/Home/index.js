import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Element3, Like1, Send, ProfileCircle, Book, Home2, Message, Add } from 'iconsax-react-native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall } from '../../components';
import { useNavigation, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>HebJam.</Text>
            </View>
            {/* <View style={styles.listCategory}>
                <FlatListCategory />
            </View> */}
            <ListBlog />

        </View>
    );
}

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
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
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
        </ScrollView>
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
});