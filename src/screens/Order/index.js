import React, { useState, useCallback } from 'react';
import FastImage from 'react-native-fast-image';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { Edit,Element3, Like1, Send, ProfileCircle, Book, Home2, Message, Add, Receipt21 } from 'iconsax-react-native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../theme';
import { ItemDetail, ItemProfile, ListHorizontal, ItemSmall, ItemOrder } from '../../components';
import axios from 'axios';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function Order() {
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

const ListBlog = () => {
  // const horizontalData = BlogList.slice(0, 5);
  // const verticalData = BlogList.slice(4, 6);

  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataBlog = async () => {
    try {
      const response = await axios.get(
        'https://65716200d61ba6fcc0125d7c.mockapi.io/HebJam/bloghome',
      );
      setBlogData(response.data);

      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog()
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataBlog();
    }, [])
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <View style={styles.listCard}>
          {/* <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 25, marginVertical: 15 }}>Order List</Text>
          {verticalData.map((item, index) => (
            <ItemOrder item={item} key={index} />
          ))} */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              gap: 10,
              paddingVertical: 20,
            }} refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

            <View style={{ paddingVertical: 10, gap: 10 }}>
              {loading ? (
                <ActivityIndicator size={'large'} color={colors.blue()} />
              ) : (
                blogData.map((item, index) => <ItemOrder item={item} key={index} />)
              )}
            </View>
          </ScrollView>
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
