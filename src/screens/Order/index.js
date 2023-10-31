import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Element3, Like1, Send, ProfileCircle, Book, Home2, Message, Add } from 'iconsax-react-native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../theme';
import { ItemOrder, ItemProfile, ListHorizontal, ItemSmall } from '../../components';

const Order = () => {
  const recentblog = BlogList.slice(6,7);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Order</Text>
        <Add color={colors.black()} variant="Linear" size={24} />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 24, gap: 10, paddingVertical: 10 }}>
          {recentblog.map((item, index) => (
            <ItemOrder item={item} key={index} />
          ))}
        </View>
        {/* <ListBlog /> */}
      </ScrollView>
      
    </View>
  );
};
const ListBlog = () => {
  const verticalData = BlogList.slice(5);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        {/* <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 25, marginTop: 10 }}>NEWS</Text>
              <ListHorizontal data={horizontalData} /> */}
        <View style={styles.listCard}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 25, marginVertical: 15 }}>Produk Rekomendaasi</Text>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
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
  title: {
    fontSize: 25,
    fontFamily: fontType['Ls-Reguler'],
    color: colors.black(),
    letterSpacing: -0.3,
  }
});
