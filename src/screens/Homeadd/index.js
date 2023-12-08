import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from "../../theme";
import axios from 'axios';

const [loading, setLoading] = useState(false);



const AddBlogForm = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    detail: "",
    category: {},
    price:"",
    image:"",
    // createdAt:{},
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const handleUpload = async () => {
    setLoading(true);
    try {
      await axios.post('https://65716200d61ba6fcc0125d7c.mockapi.io/HebJam/bloghome', {
          title: blogData.title,
          category: blogData.category,
          image,
          price: blogData.price,
          detail: blogData.detail,
          createdAt: new Date(),
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Order');
    } catch (e) {
      console.log(e);
    }
  };
  const [image,  setImage] = useState(null);
  const navigation = useNavigation();
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
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor={colors.peach(0.6)}
            style={textInput.image}
          />
        </View>
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
    width:350,
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
    marginTop:10,
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
