import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import { COLORS, SIZES, data } from '../constants'
import HeaderSection from '../components/HeaderSection'
import HeaderButton from '../components/HeaderButton'
import BookSection from '../components/BookSection';

const Home = () => {
    const [profile, setProfile] = useState(data.profileData)
    const [myBooks, setMyBooks] = React.useState(data.booksData);

    return (
        <SafeAreaView style={styles.container}>
            {/** Header Section */}
            <View style={{ height: 200 }}>
                <HeaderSection profile={profile}/>
                <HeaderButton/>
            </View>
            {/** Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/** Books Section */}
                <View>
                    <BookSection books={myBooks}/>
                </View>
                {/** Categories Section */}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        flex: 1,
    },
})

export default Home