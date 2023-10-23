import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList,Image,ImageBackground, TouchableOpacity} from 'react-native';
import {Element3,Like1, Send, MessageText1, ProfileCircle, Receipt21,Clock, Message, Add} from 'iconsax-react-native';
import {BlogList, CategoryList} from './data';
import { fontType, colors } from './src/theme';
import { ListHorizontal, ItemSmall } from './src/components'; 

export default function App() {
  return (  
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HebJam.</Text>
      </View>
      <ListBlog />
    </View>
  );
}

const ListBlog = () => {
  const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(5);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
      <Text style={{fontSize: 18, fontWeight: 'bold',marginLeft: 25, marginTop: 10}}>NEWS</Text>
        <ListHorizontal data={horizontalData} />
        <View style={styles.listCard}>
        <Text style={{fontSize: 25, fontWeight: 'bold',marginLeft: 25, marginVertical: 15}}>Featured Products</Text>
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
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    backgroundColor: '#79AC78',
    flexDirection: 'row',
    alignItems: 'flex-end',

    height: 55,
    elevation: 8,
    paddingTop: 8,
    paddingBottom:8,
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