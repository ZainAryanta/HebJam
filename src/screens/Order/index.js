import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Element3, Like1, Send, ProfileCircle, Book, Home2, Message, Add, Receipt21 } from 'iconsax-react-native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../theme';
import { ItemDetail, ItemProfile, ListHorizontal, ItemSmall } from '../../components';

// const Order = () => {
//   // const horizontalData = BlogList.map((item) => {
//   //     return {
//   //         title : item.title,
//   //         image : item.image
//   //     }
//   // })
//   // return (
//   //     <View style={styles.container}>
//   //       <View style={styles.header}>
//   //         <Text style={styles.title}>Order</Text>
//   //         <Add color={colors.black()} variant="Linear" size={24} />
//   //       </View>
//   //       <ScrollView showsVerticalScrollIndicator={false}>
//   //         <View style={{ paddingHorizontal: 24, gap: 10, paddingVertical: 10 }}>
//   //           <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
//   //             {horizontalData.map((item, index) => (
//   //               <TouchableOpacity key={index} style={styles.cardItem} onPress={() => { }}>
//   //                 <FastImage
//   //                   style={styles.cardImage}
//   //                   source={{
//   //                     uri: item.image,
//   //                     headers: { Authorization: 'someAuthToken' },
//   //                     priority: FastImage.priority.high,
//   //                   }}
//   //                   resizeMode={FastImage.resizeMode.cover}>
//   //                   <View style={styles.cardContent}>
//   //                     <View>
//   //                       <View style={styles.cardIcon}>
//   //                         <TouchableOpacity onPress={() => { }}>
//   //                           <Receipt21 color={colors.white()} size={20} />
//   //                         </TouchableOpacity>
//   //                       </View>
//   //                     </View>
//   //                   </View>
//   //                 </FastImage>
//   //               </TouchableOpacity>
//   //             ))}
//   //           </View>
//   //         </View>
//   //       </ScrollView>
//   //     </View>
//   //   );
//   <View style={styles.container}>
//     <View style={styles.header}>
//       <Text style={styles.title}>HebJam.</Text>
//     </View>
//     <ListBlog />
//   </View>
// };
// export default Order;

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
  const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(4,6);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        {/* <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 25, marginTop: 10 }}>NEWS</Text>
        <ListHorizontal data={horizontalData} /> */}
        <View style={styles.listCard}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 25, marginVertical: 15 }}>Order List</Text>
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
