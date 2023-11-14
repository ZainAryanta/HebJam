import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Element3, Like1, Send, ProfileCircle, Book, Home2, Message, Add, Receipt21 } from 'iconsax-react-native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../theme';
import { ItemDetail, ItemProfile, ListHorizontal, ItemSmall } from '../../components';

const Orderdetail = ({ route }) => {
    const { id } = route.params;
    const selectedDetail = BlogList.find(wisata => wisata?.id === id);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Herbal detail</Text>
                <Add color={colors.black()} variant="Linear" size={24} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 24, gap: 10, paddingVertical: 10 }}>
                    {/* {recentblog.map((item, index) => (
                        <ItemDetail item={item} key={index} />
                    ))} */}
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', }}>
                        <View>
                            <TouchableOpacity style={styles.cardItem} onPress={() => { }}>
                                <FastImage
                                    style={styles.cardImage}
                                    source={{
                                        uri: selectedDetail?.image,
                                        headers: { Authorization: 'someAuthToken' },
                                        priority: FastImage.priority.low,
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}>
                                    <View style={styles.cardContent}>
                                        <View style={styles.cardCategory}>
                                            <View style={styles.categoryBadge}>
                                                <Text style={styles.categoryLabel}>{selectedDetail?.category}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={styles.cardIcon}>
                                                <TouchableOpacity onPress={() => { }}>
                                                    <Receipt21 color={colors.white()} size={20} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </FastImage>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                                    <View style={{ gap: 10 }}>
                                        <Text style={{ fontSize: 40, }}>
                                            {selectedDetail?.title}
                                        </Text>
                                        <Text style={{ fontSize: 20, textAlign: 'justify', }}>
                                            {selectedDetail?.detail}
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <TouchableOpacity style={{ backgroundColor: '#79AC78', padding: 5, borderRadius: 15, top: 20 }} onPress={() => { }}>
                                            <Text style={{ textAlign: 'center', color: colors.black(), fontSize: 25 }}>Noted    </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

export default Orderdetail;

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
    },
    cardItem: {
        backgroundColor: colors.black(0.03),
        borderRadius: 15,
        //width: '100%',
        height: 600,
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
        height: 180,
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
        // height: '100%',
        gap: 2,
        // maxWidth: '60%',
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
