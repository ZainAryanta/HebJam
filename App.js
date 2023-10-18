import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import {Like1, Send, MessageText1, ProfileCircle, Receipt21,Clock, Message, Add} from 'iconsax-react-native';
import {getUriFromSource} from 'react-native-svg/lib/typescript/LocalSvg';
import { colors, fontType } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HebJam.</Text>

        <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{...category.item}}>
              <Text style={{...category.title}}>Home</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>People</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Chat</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Library</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.listCategory}>
        <View style={konten.header}>
            <Text style={{fontSize: 16, fontWeight: 'bold',marginLeft: 20}}>NEWS</Text>
          </View>
         
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <View style={{...itemHorizontal.cardItem, marginLeft: 20}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/564x/d9/f2/2c/d9f22ca2536e9df00612b2c22c3f5cfb.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                 <View style={{backgroundColor:colors.black(0.4), padding:5, borderRadius:15}}>
                 <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                 </View>
                 
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{...itemHorizontal.cardItem, marginLeft: 20}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/236x/42/55/98/425598ded8a69b8e44bd91ce6fc06222.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                 <View style={{backgroundColor:colors.black(0.4), padding:5}}>
                 <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                 </View>
                 
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          

          <View style={{...itemHorizontal.cardItem, marginLeft: 20}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/236x/40/07/1e/40071e0a47cfc6be029d4f1d4fec7554.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                 <View style={{backgroundColor:colors.black(0.4), padding:5}}>
                 <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                 </View>
                 
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{...itemHorizontal.cardItem, marginLeft: 20}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/236x/d3/bd/79/d3bd79a423aa4a786e5cce7dfd7c1512.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                 <View style={{backgroundColor:colors.black(0.4), padding:5}}>
                 <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                 </View>
                 
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          </ScrollView>
        </View>


        <View style={konten.container}>
          <View style={konten.header}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Featured Products</Text>
          </View>

          <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/236x/8d/dd/f9/8dddf97b873fe324eade3c38d177ec4e.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '80%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                <View style={{backgroundColor: '#79AC78', padding:5, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/564x/47/49/1e/47491e303049b04c5b484e09b8bb8150.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '80%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                <View style={{backgroundColor: '#79AC78', padding:5, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/236x/17/ac/6f/17ac6f011a83811708617e0dc6d1f72d.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '80%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                <View style={{backgroundColor: '#79AC78', padding:5, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/564x/ae/85/0c/ae850ca669cb3ce3b05b4cc4116f8439.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '80%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                <View style={{backgroundColor: '#79AC78', padding:5, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.pinimg.com/236x/b1/5c/71/b15c71cc745782c8752e355fa730b78a.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '80%'}}>
                  <Text style={itemVertical.cardCategory}>Technology</Text>
                  <Text style={itemVertical.cardTitle}>
                    How to use Redux in ReactJS
                  </Text>
                </View>
                <Receipt21
                  color={colors.black(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                <View style={{backgroundColor: '#79AC78', padding:5, borderRadius: 10}}>
                <Add size={30} color={colors.white()}/>
                </View>
              </View>
            </View>
          </View>
          </View>

          <View style={konten.header}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Review</Text>
          </View>
          <View style={konten.postingan}>
            <View style={inside.header}>
              <ProfileCircle
                variant="Bold"
                size={30}
                style={{color: '#9dc69d', marginRight: 10}}
              />
              <Text style={{fontWeight: 'bold'}}>
                Mukhammad Zainul Musyafa'
              </Text>
            </View>
            <View style={inside.isi}>
              <Text>
                Gaya hidup sehat mencakup serangkaian kebiasaan baik yang dapat
                meningkatkan kesejahteraan fisik dan mental. Memilih makanan
                yang seimbang, kaya akan nutrisi, serta menghindari makanan
                berlemak dan berkalori tinggi adalah langkah awal yang penting.
              </Text>
            </View>
            <View style={inside.tombol}>
              <View style={inside.jumlah}>
                <Like1 variant="Bold" size={24} style={{color: '#9dc69d'}} />
                <Text style={{marginLeft: 5}}>325</Text>
              </View>
              <MessageText1
                variant="Bold"
                size={24}
                style={{color: '#9dc69d'}}
              />
              <Send variant="Bold" size={24} style={{color: '#9dc69d'}} />
            </View>
          </View>
          <View style={konten.postingan}>
            <View style={inside.header}>
              <ProfileCircle
                variant="Bold"
                size={30}
                style={{color: '#9dc69d', marginRight: 10}}
              />
              <Text style={{fontWeight: 'bold'}}>Nur Aria</Text>
            </View>
            <View style={inside.isi}>
              <Text>
                "Gaya hidup sehat adalah investasi terbaik yang dapat Anda
                lakukan untuk masa depan Anda."
              </Text>
              <Image
                style={{width: '100%'}}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                }}
              />
            </View>
            <View style={inside.tombol}>
              <View style={inside.jumlah}>
                <Like1 variant="Bold" size={24} style={{color: '#9dc69d'}} />
                <Text style={{marginLeft: 5}}>798</Text>
              </View>

              <MessageText1
                variant="Bold"
                size={24}
                style={{color: '#9dc69d'}}
              />
              <Send variant="Bold" size={24} style={{color: '#9dc69d'}} />
            </View>
          </View>
          <View style={konten.postingan}>
            <View style={inside.header}>
              <ProfileCircle
                variant="Bold"
                size={30}
                style={{color: '#9dc69d', marginRight: 10}}
              />
              <Text style={{fontWeight: 'bold'}}>Anonymus</Text>
            </View>
            <View style={inside.isi}>
              <Text>
                Dengan menjaga keseimbangan ini, seseorang dapat meningkatkan
                energi, mengurangi risiko penyakit, dan merasakan manfaat
                positif dalam jangka panjang terhadap kualitas hidup mereka.
              </Text>
            </View>
            <View style={inside.tombol}>
              <Like1 variant="Bold" size={24} style={{color: '#9dc69d'}} />
              <MessageText1
                variant="Bold"
                size={24}
                style={{color: '#9dc69d'}}
              />
              <Send variant="Bold" size={24} style={{color: '#9dc69d'}} />
            </View>
          </View>
        </View> 

        
      </ScrollView>
    </View>
  );
}

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 250,
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
    width:'100%',
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
    opacity:0
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    //justifyContent: 'space-between',
    backgroundColor: '#79AC78',
    //flexDirection: 'row',
    alignItems: 'center',

    height: 90,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 25,
    //fontFamily: fontType['Pjs-ExtraBold'],
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  listCategory: {
    paddingVertical: 10,
  },
});


const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'justify',
    //backgroundColor: '#e5eaff',
    marginHorizontal: 3,
    
  },
  title: {
    //fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
    
  },
});

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 3,
    paddingVertical: 5,
    gap: 15,
  },
  cardItem: {
    height:140,
    backgroundColor: '#ffffff',
    borderWidth:3,
    borderColor:'#618264',
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
    height: 135,
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

const story = StyleSheet.create({
  item: {
    borderRadius: 25,
    alignItems: 'center',
    height: 250,
    width: 250,
    backgroundColor: '#ffffff',
    marginVertical: 2,
    marginHorizontal: 6,
    marginLeft: 19,
    borderRadius: 10,
  },
  title: {
    marginTop: 80,
    fontSize: 14,
    lineHeight: 18,
    color: '#454c5a',
  },
});

const konten = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    marginVertical: 10,
  },
  postingan: {
    borderRadius: 10,
    padding: 6,
    backgroundColor: '#D0E7D2',
    marginBottom: 20,
  },
});

const inside = StyleSheet.create({
  header: {
    marginVertical: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  isi: {
    marginVertical: 10,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  tombol: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    top: 8,
    paddingVertical: 15,
  },
  jumlah: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
});