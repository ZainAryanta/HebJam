import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ArrowLeft,AddSquare,Add} from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from "../../theme";
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const [loading, setLoading] = useState(false);

const AddBlogForm = () => {
  const navigation = useNavigation();
  const [blogData, setBlogData] = useState({
    title: '',
    detail: '',
    price: '',
    image: '',
    createdAt: 0
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleUpload = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`blogimages/${filename}`);

    setLoading(true);
    try {
      await reference.putFile(image);
      const url = await reference.getDownloadURL();
      await firestore().collection('blog').add({
        title: blogData.title,
        image:url,
        price: blogData.price,
        detail: blogData.detail,
        createdAt: new Date(),
      });
      setLoading(false);
      console.log('Blog added!');
      navigation.navigate('Order');
    } catch (error) {
      console.log(error);
    }
  };
  const [image, setImage] = useState(null);
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.peach()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Add List Order</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        {image ? (
          <View style={{ position: 'relative' }}>
            <FastImage
              style={{ width: '100%', height: 127, borderRadius: 5 }}
              source={{
                uri: image,
                headers: { Authorization: 'someAuthToken' },
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: colors.blue(),
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={colors.white()}
                style={{ transform: [{ rotate: '45deg' }] }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color={colors.grey(0.6)} variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['Pjs-Regular'],
                  fontSize: 12,
                  color: colors.grey(0.6),
                }}>
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Nama Herbal"
            value={blogData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor={colors.peach(0.6)}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 25 }]}>
          <TextInput
            placeholder="Price"
            value={blogData.price}
            onChangeText={(text) => handleChange("price", text)}
            placeholderTextColor={colors.peach(0.6)}
            multiline
            style={textInput.price}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 200 }]}>
          <TextInput
            placeholder="Description"
            value={blogData.detail}
            onChangeText={(text) => handleChange("detail", text)}
            placeholderTextColor={colors.peach(0.6)}
            multiline
            style={textInput.detail}
          />
        </View>

      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Order</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.blue()} />
        </View>
      )}
    </View>
  );
};

export default AddBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkgreen(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    borderWidth: 2,
    borderColor: colors.gold(),
  },
  title: {
    fontFamily: fontType["Pjs-Bold"],
    fontSize: 25,
    color: colors.peach(),
  },
  bottomBar: {
    backgroundColor: colors.peach(),
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.darkgreen(),
    borderRadius: 20,
    alignItems: "center",
    width: 350,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.white(),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    backgroundColor: colors.black(0.35),
    borderStyle: "dotted",
    borderWidth: 1,
    borderRadius: 15,
    padding: 18,
    marginTop: 10,
    borderColor: colors.gold(0.8),
  },
  title: {
    fontSize: 16,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.black(),
    padding: 0,
  },
  content: {
    fontSize: 16,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
    padding: 0,
  },
});
