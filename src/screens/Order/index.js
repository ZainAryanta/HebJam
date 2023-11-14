import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Element3, Like1, Send, ProfileCircle, Book, Home2, Message, Add, Receipt21 } from 'iconsax-react-native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../theme';
import { ItemDetail, ItemProfile, ListHorizontal, ItemSmall } from '../../components';

const Order = () => {
    const horizontalData = BlogList.map((item) => {
        return {
            title : item.title,
            image : item.image
        }
    })
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Order</Text>
            <Add color={colors.black()} variant="Linear" size={24} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingHorizontal: 24, gap: 10, paddingVertical: 10 }}>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                {horizontalData.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.cardItem} onPress={() => { }}>
                    <FastImage
                      style={styles.cardImage}
                      source={{
                        uri: item.image,
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.high,
                      }}
                      resizeMode={FastImage.resizeMode.cover}>
                      <View style={styles.cardContent}>
                        <View>
                          <View style={styles.cardIcon}>
                            <TouchableOpacity onPress={() => { }}>
                              <Receipt21 color={colors.white()} size={20} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </FastImage>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      );
    
};
export default Order;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white(),
    },
    header: {
        paddingHorizontal: 25,
        gap: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 10,
        paddingTop: 8,
        paddingBottom: 4,
        backgroundColor: '#79AC78',
    },
    cardImage: {
        marginTop: 15,
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    title: {
        fontSize: 25,
        fontFamily: fontType['Ls-Reguler'],
        color: colors.black(),
        letterSpacing: -0.3,
    }
});
