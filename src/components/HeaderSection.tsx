import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants'

const HeaderSection = (profile: any) => {
    return (
        <View style={styles.container}>
            {/** Greetings */}
            <View style={styles.greetings}>
                <View style={{ marginRight: SIZES.padding }}>
                    <Text style={styles.textStyle1}>Good Mornings</Text>
                    <Text style={styles.textStyle2}>{profile.name}</Text>
                </View>
            </View>
            {/** Points */}
            <TouchableOpacity 
                style={styles.pointContainer}
                onPress={() => { console.log('Points')}}
            >
                <View style={styles.pointView}>
                    <View
                        style={{
                            width: 30, 
                            height: 30, 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            borderRadius: 25,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <Image
                            source={icons.plus_icon}
                            resizeMode="contain"
                            style={{ width: 20, height: 20 }}
                        />
                    </View>
                    <Text style={styles.point}>{profile.point} Points</Text>
                </View>
            </TouchableOpacity>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: SIZES.padding,
        alignItems: 'center'
    },
    greetings: { 
        flex: 1 
    },
    textStyle1: {
        ...FONTS.h3,
        color: COLORS.white
    },
    textStyle2: {
        ...FONTS.h2,
        color: COLORS.white
    },
    pointContainer: {
        backgroundColor: COLORS.primary,
        height: 40,
        paddingLeft: 3,
        paddingRight: SIZES.radius,
        borderRadius: 20
    },
    pointView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    point: {
        marginLeft: SIZES.base,
        color: COLORS.white,
        ...FONTS.body3,
    }
})

export default HeaderSection