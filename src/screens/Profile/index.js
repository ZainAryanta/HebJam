import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Element3, Like1, Send, ProfileCircle, Book, Home2, Message, Add, Archive, ArchiveTick } from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { BlogList, ProfileData } from '../../../data';
import { fontType, colors } from '../../theme';
import { ItemOrder, ItemProfile, ListHorizontal, ItemSmall } from '../../components';


const Profile = () => {
    return (
        <View style={styles.container}>
            <FastImage style={styles.imageBanner} source={{
                uri: 'https://i.pinimg.com/564x/21/87/36/218736a4a20dc61feadffb949f6dcb00.jpg',
                headers: { Authorization: 'someAuthToken' },
                priority: FastImage.priority.high,
            }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 24,
                        gap: 10,
                        bottom: 0,
                    }}>

                    <View style={{ gap: 15, alignItems: 'center' }}>

                        <FastImage
                            style={profile.pic}
                            source={{
                                uri: ProfileData.profilePict,
                                headers: { Authorization: 'someAuthToken' },
                                priority: FastImage.priority.high,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />

                        <View style={{ gap: 5, alignItems: 'center' }}>
                            <Text style={profile.name}>{ProfileData.name}</Text>
                            <Text style={profile.info}>
                                Member since : {ProfileData.createdAt}
                            </Text>
                        </View>

                    </View>

                </ScrollView>
            </FastImage>
            <View style={styles.imageBanner2}>
                <View
                    style={{
                        flexDirection: 'row-reverse',
                        gap: 20,
                        top: 5,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}>
                    <View style={{ flexDirection: 'column-reverse', alignItems: 'center', gap: 5 }}>
                        <Text style={profile.sum}>{ProfileData.transaksi}</Text>
                        <Text style={profile.tag}>Transaksi</Text>
                    </View>
                    <View style={{ flexDirection: 'column-reverse', alignItems: 'center', gap: 5 }}>
                        <Text style={profile.sum}>{ProfileData.saldo}</Text>
                        <Text style={profile.tag}>Poin</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.imageBanner3}>
                <ArchiveTick style={{ marginLeft: 10, marginTop: 10, }} color={colors.darkModeBlack()} size={25} />
                <Text style={profile.konten}>Nyanta.exe@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageBanner3}>
                <ArchiveTick style={{ marginLeft: 10, marginTop: 10, }} color={colors.darkModeBlack()} size={25} />
                <Text style={profile.konten}>Nyanta.exe@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageBanner3}>
                <ArchiveTick style={{ marginLeft: 10, marginTop: 10, }} color={colors.darkModeBlack()} size={25} />
                <Text style={profile.konten}>Nyanta.exe@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageBanner3}>
                <ArchiveTick style={{ marginLeft: 10, marginTop: 10, }} color={colors.darkModeBlack()} size={25} />
                <Text style={profile.konten}>Nyanta.exe@gmail.com</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
const styles = StyleSheet.create({
    cardImage: {
        width: '115%',
        height: 300,
        marginTop: 240,
        marginLeft: -27,
        borderRadius: 20,
        resizeMode: 'stretch',
    },

    container: {
        flex: 1,
        // backgroundColor: colors.white(),
        backgroundColor: '#3A4D39',
    },
    title: {
        fontSize: 20,
        fontFamily: fontType['Pjs-ExtraBold'],
        color: colors.black(),
    },
    imageBanner: {
        backgroundColor: '#606470',
        borderWidth: 2,
        borderBottomColor: '#FFB000',
        borderLeftColor: '#FFB000',
        borderRightColor: '#FFB000',
        width: 'auto',
        height: 200,
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 75,
    },
    imageBanner2: {
        backgroundColor: '#ECE3CE',
        borderWidth: 2,
        borderColor: '#FFB000',
        width: 300,
        height: 80,
        borderRadius: 20,
        marginLeft: 50,
        bottom: 20,
        fontFamily: fontType['Pjs-ExtraBold'],
    },
    imageBanner3: {
        backgroundColor: '#ECE3CE',
        borderColor: '#FFB000',
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        // flexDirection: 'row',
        // alignContent: 'flex-end',
        marginLeft: 50,
        top: 0,
        fontFamily: fontType['Pjs-ExtraBold'],
        margin: 5,
    },
});
const profile = StyleSheet.create({
    pic: { width: 100, height: 100, borderRadius: 100, top: 15 },
    name: {
        color: colors.white(),
        fontSize: 20,
        fontFamily: fontType['Pjs-Bold'],
        textTransform: 'capitalize',
    },
    info: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.white(),
    },
    sum: {
        fontSize: 25,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.black(),
    },
    tag: {
        fontSize: 20,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.black(),
    },
    status: {
        flexDirection: 'row',
        gap: 20,
    },
    konten: {
        // textAlign: 'center',
        textAlign: 'center',
        flexDirection:'row',
        top:-25,
        fontSize: 17,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.black(),
    },
});
