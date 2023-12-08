import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Like1, Send, MessageText1, ProfileCircle, Receipt21, Clock, Message, Add, Check } from 'iconsax-react-native';
import { BlogList, CategoryList } from './data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { formatDate } from '../utils/formatDate';

const ItemOrder = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={itemVertical.container} onPress={() => navigation.navigate('Orderdetail', { id: item.id })}>
      <View style={itemVertical.listCard}>
        <View style={itemVertical.cardItem}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            style={itemVertical.cardImage}
            source={{
              priority: FastImage.priority.high,
              uri: item?.image,
            }}
          />
          <View style={itemVertical.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '80%' }}>
                <Text style={itemVertical.cardTitle}>{item?.title}</Text>
                <Text style={itemVertical.cardInfo}>{item?.price}</Text>
                <Text style={itemVertical.cardText}>{item?.createdAt}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end',position:'absolute', left:150,top:80}}>
              <View style={{ backgroundColor: colors.darkgreen(), padding: 2, borderRadius: 15 }}>
                <Check size={30} color={colors.white()} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemOrder;

const itemVertical = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    marginVertical: 10,
  },

  listCard: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    gap: 15,

  },
  cardItem: {
    height: 140,
    width:320,
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: colors.gold(),
    flexDirection: 'row',
    borderRadius: 20,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
  },
  cardImage: {
    width: 100,
    height: 132,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    paddingVertical: 10,
  },
});