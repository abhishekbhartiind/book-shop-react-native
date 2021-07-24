import React from 'react'
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../constants'

const LineDivider = () => {
    return (
        <View style={styles.divider}>
            <View style={{ 
                flex: 1, 
                borderLeftColor: COLORS.lightGray,
                borderLeftWidth: 1
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        width: 1,
        paddingVertical: 18
    },
});

export default LineDivider
