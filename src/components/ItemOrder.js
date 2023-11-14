import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { Receipt21, Clock, Message } from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';
import { BlogList, CategoryList, detail } from '../../data';

const ItemOrder = ({ item, onPress, variant }) => {
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1, }}>
      <View>
        <TouchableOpacity style={styles.cardItem} onPress={() => { }}>
          <FastImage
            style={styles.cardImage}
            source={{
              uri: item.image,
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}>
            <View style={styles.cardContent}>
              <View style={styles.cardCategory}>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryLabel}>{item.category}</Text>
                </View>
              </View>
              <View>
                <View style={styles.cardIcon}>
                  <TouchableOpacity onPress={onPress}>
                    <Receipt21 color={colors.white()} variant={variant} size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </FastImage>
          <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
            <View style={{ gap: 10 }}>
              <Text
                style={styles.blogTitle}>
                {item.title}
              </Text>
              <TouchableOpacity style={{ ...styles.cardContent, backgroundColor: colors.black(0.15), paddingVertical: 15,paddingHorizontal:15, }}>
                <Text style={{ ...styles.cardContent, textAlign: 'center' }}>Detail Pesanan</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity style={{ backgroundColor: '#79AC78', padding: 5, borderRadius: 15, top: 260 }} onPress={() => { }}>
                <Text style={{ textAlign: 'center', color: colors.black(), fontSize: 25 }}>Bayar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default ItemOrder;

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: colors.black(0.03),
    borderRadius: 15,
    width: '100%',
    height: 700,
  },
  cardbut: {
    padding: 5,
    // textAlign: 'center',
    // justifyContent: 'flex-start',
    backgroundColor: '#79AC78',
    borderRadius: 30,
  },
  cardImage: {
    marginTop: 15,
    width: '100%',
    height: 205,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 15,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
    marginHorizontal: 5,
    marginTop: 0,
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
  cardCategory: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 2,
    maxWidth: '60%',
  },
  categoryBadge: {
    backgroundColor: colors.white(),
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  categoryLabel: {
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.blue(),
  },
  blogTitle: {
    fontSize: 30,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  blogContent: {
    fontSize: 15,
    lineHeight: 5,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(),
  }
});