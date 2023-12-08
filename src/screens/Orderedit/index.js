import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { fontType, colors } from '../../theme';
import axios from 'axios';

const EditBlogForm = ({ route }) => {
    const { id } = route.params;

    const [blogData, setBlogData] = useState({
        title: '',
        detail: '',
        price: '',
    });
    const handleChange = (key, value) => {
        setBlogData({
            ...blogData,
            [key]: value,
        });
    };  
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getBlogById();
    }, [id]);

    const getBlogById = async () => {
        try {
            const response = await axios.get(
                `https://65716200d61ba6fcc0125d7c.mockapi.io/HebJam/bloghome/${id}`,
            );
            setBlogData({
                title: response.data.title,
                detail: response.data.detail,
                price: response.data.price,
            })
            setImage(response.data.image)
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    const handleUpdate = async () => {
        setLoading(true);
        try {
            await axios
                .put(`https://65716200d61ba6fcc0125d7c.mockapi.io/HebJam/bloghome/${id}`, {
                    title: blogData.title,
                    detail: blogData.detail,
                    price: blogData.price,
                    image,
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color={colors.black()} variant="Linear" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.title}>Edit blog</Text>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingVertical: 10,
                    gap: 10,
                }}>
                <View style={[textInput.borderDashed]}>
                    <TextInput
                        placeholder="Image"
                        value={image}
                        onChangeText={text => setImage(text)}
                        placeholderTextColor={colors.peach(0.6)}
                        style={textInput.image}
                    />
                </View>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Nama Herbal"
                        value={blogData.title}
                        onChangeText={text => handleChange("title", text)}
                        placeholderTextColor={colors.peach(0.6)}
                        multiline
                        style={textInput.title}
                    />
                </View>
                <View style={[textInput.borderDashed, { minHeight: 25 }]}>
                    <TextInput
                        placeholder="Price"
                        value={blogData.price}
                        onChangeText={text => handleChange("price", text)}
                        placeholderTextColor={colors.peach(0.6)}
                        multiline
                        style={textInput.price}
                    />
                </View>
                <View style={[textInput.borderDashed, { minHeight: 200 }]}>
                    <TextInput
                        placeholder="Description"
                        value={blogData.detail}
                        onChangeText={text => handleChange("detail", text)}
                        placeholderTextColor={colors.peach(0.6)}
                        multiline
                        style={textInput.detail}
                    />
                </View>

            </ScrollView>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttonLabel}>Update</Text>
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

export default EditBlogForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkgreen(0.95),
    },
    header: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        elevation: 8,
        paddingTop: 8,
        paddingBottom: 4,
    },
    title: {
        fontFamily: fontType['Pjs-Bold'],
        fontSize: 16,
        color: colors.black(),
    },
    bottomBar: {
        backgroundColor: colors.darkgreen(),
        alignItems: 'flex-end',
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
        borderWidth:2,
        borderColor:colors.gold(),
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.gold(),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        fontSize: 14,
        fontFamily: fontType['Pjs-SemiBold'],
        color: colors.black(),
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
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        borderColor: colors.gold(),
    },
    title: {
        fontSize: 16,
        fontFamily: fontType['Pjs-SemiBold'],
        color: colors.peach(),
        padding: 0,
    },
    content: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.peach(),
        padding: 0,
    },
});
const category = StyleSheet.create({
    title: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.grey(0.6),
    },
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    item: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 25,
    },
    name: {
        fontSize: 10,
        fontFamily: fontType['Pjs-Medium'],
    },
});