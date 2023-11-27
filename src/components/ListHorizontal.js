import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Like1, Send, MessageText1, ProfileCircle, Receipt21, Clock, Message, Add } from 'iconsax-react-native';
import { BlogList, CategoryList } from './data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';
import { useNavigation } from '@react-navigation/native';

const ItemHorizontal = ({ item, variant, onPress }) => {
  const navigation = useNavigation();
  return (
    // <TouchableOpacity style={styles.listCategory}>
    <TouchableOpacity style={itemHorizontal.cardItem} onPress={() => navigation.navigate('Orderdetail', {id: item.id})}>
 
      <View style={{ ...itemHorizontal.cardItem, marginTop:10}}>
        <FastImage
          style={itemHorizontal.cardImage}
          resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: item.image,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.high,
          }}>
          <View style={itemHorizontal.cardContent}>
            <View style={itemHorizontal.cardInfo}>
              <View style={{ backgroundColor: colors.black(0.4), padding: 5, borderRadius: 15 }}>
                <Text style={itemHorizontal.cardTitle}>
                  {item.title}
                </Text>
                <Text style={itemHorizontal.cardText}>{item.createdAt}</Text>
              </View>
            </View>
            <View>
              <View style={itemHorizontal.cardIcon}>
                <Receipt21 color={colors.white()} variant="Linear" size={20} />
              </View>
            </View>
          </View>
        </FastImage>
      </View>
    </TouchableOpacity>

  );
};
const ListHorizontal = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <ItemHorizontal
        item={item} />
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ListHorizontal;

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
    paddingRight:10,
  },
  cardImage: {
    width: 280,
    height: 250,
    borderWidth:1,
    borderColor:colors.gold(),
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    width: '100%',
  },
  cardTitle: {
    fontSize: 14,
    color: colors.white(),

  },
  cardText: {
    fontSize: 14,
    color: colors.white(0.9),
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
    opacity: 0
  },
});

const styles = StyleSheet.create({
  listCategory: {
    paddingVertical: 5,
  },

  header: {
    marginVertical: 5,
  }

});