import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Like1, Receipt21, Message, Share, More } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../../theme';
import { formatDate } from '../../utils/formatDate';
import axios from 'axios';
import ActionSheet from 'react-native-actions-sheet';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';

const BlogDetail = ({ route }) => {
  const { postId } = route.params;
  const [iconStates, setIconStates] = useState({
    liked: { variant: 'Linear', color: colors.grey(0.6) },
    bookmarked: { variant: 'Linear', color: colors.grey(0.6) },
  });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .doc(postId)
      .onSnapshot(documentSnapshot => {
        const blogData = documentSnapshot.data();
        if (blogData) {
          console.log('Blog data: ', blogData);
          setSelectedBlog(blogData)
        } else {
          console.log(`Blog with ID ${postId} not found.`);
        }
        setLoading(false);
      });

    return () => subscriber();
  }, [postId]);

  const navigateEdit = () => {
    closeActionSheet();
    navigation.navigate('Orderedit', { postId });
  };
  const handleDelete = async () => {
    setLoading(true);
    try {
      await firestore()
        .collection('blog')
        .doc(postId)
        .delete()
        .then(() => {
          console.log('Blog deleted!');
        });
      if (selectedBlog?.image) {
        const imageRef = storage().refFromURL(selectedBlog?.image);
        await imageRef.delete();
      }
      console.log('Blog deleted!');
      closeActionSheet();
      setSelectedBlog(null);
      setLoading(false)
      navigation.navigate('Order');
      console.log(selectedBlog.postId)
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 52);
  const headerY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, -52],
  });
  const bottomBarY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, 52],
  });

  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? colors.blue()
            : colors.grey(0.6),
      },
    }));
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.header, { transform: [{ translateY: headerY }] }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
          <Share color={colors.black()} variant="Linear" size={24} />
          <TouchableOpacity onPress={openActionSheet}>
            <More
              color={colors.black()}
              variant="Linear"
              style={{ transform: [{ rotate: '90deg' }] }}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      {loading ? (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size={'large'} color={colors.blue()} />
        </View>
      ) : (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 62,
            paddingBottom: 54,
          }}>
          <FastImage
            style={styles.image}
            source={{
              uri: selectedBlog?.image,
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}></FastImage>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
          </View>
          <Text style={styles.title}>{selectedBlog?.title}</Text>
          <Text style={styles.content}>{selectedBlog?.detail}</Text>
          <Text style={styles.price}>{selectedBlog?.price}</Text>
          {/* <Text style={styles.date}>{selectedBlog?.createdAt}</Text> */}
        </Animated.ScrollView>
      )}
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: colors.darkgreen(),
          borderWidth: 2,
          borderColor: colors.gold(),
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}
        >
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.peach(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.darkgreen(),
    borderWidth: 2,
    borderColor: colors.gold(),
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 250,
    width: 'auto',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.gold(),
  },
  info: {
    color: colors.black(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  category: {
    color: colors.blue(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  date: {
    color: colors.black(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 15,
  },
  title: {
    fontSize: 45,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 1,
    textAlign: 'right',
  },
  content: {
    color: colors.black(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 19,
    lineHeight: 20,
    marginTop: 15,
    textAlign: 'right',
  },
  price: {
    color: colors.black(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 40,
    lineHeight: 50,
    marginTop: 15,
  },
});