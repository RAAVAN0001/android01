import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container} >
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>see</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>more</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.text}>cards</Text>
                </View>


               
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    text:{
        color:'black',
    },
    container: {
        padding: 10,
    },
    card: {
        flex: 1,
        borderRadius: 5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,

    },
    cardElevated: {
        backgroundColor: '#74B9FF',
        elevation: 10,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 2,

    },
})