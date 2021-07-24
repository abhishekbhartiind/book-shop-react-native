import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants'
import LineDivider from './LineDivider'

const HeaderButton = () => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.buttonSection}>
                {/** Claim */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => { console.log('Claim')}}
                >
                    <View
                        style={styles.headerButton}
                    >
                        <Image
                            source={icons.claim_icon}
                            resizeMode="contain"
                            style={styles.iconImage}
                        />
                        <Text style={styles.iconText}>Claim</Text>
                    </View>
                </TouchableOpacity>
                {/** Divider */}
                <LineDivider/>
                {/** Get Points */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => { console.log('Get Points')}}
                >
                    <View
                        style={styles.headerButton}
                    >
                        <Image
                            source={icons.point_icon}
                            resizeMode="contain"
                            style={styles.iconImage}
                        />
                        <Text style={styles.iconText}>Get Point</Text>
                    </View>
                </TouchableOpacity>
                {/** Divider */}
                <LineDivider/>
                {/** Cart */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => { console.log('My Cart')}}
                >
                    <View
                        style={styles.headerButton}
                    >
                        <Image
                            source={icons.card_icon}
                            resizeMode="contain"
                            style={styles.iconImage}
                        />
                        <Text style={styles.iconText}>My Cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: SIZES.padding
    },
    buttonSection: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.radius
    },
    headerButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconText: {
        marginLeft: SIZES.base,
        ...FONTS.body3,
        color: COLORS.white
    },
    iconImage: {
        width: 30, 
        height: 30
    }
});

export default HeaderButton;