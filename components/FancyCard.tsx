import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText} >Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1683008161869-34589a05bc31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhaiUyMG1laGFsfGVufDB8fDB8fHww',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody} >
                    <Text style={styles.cardTitle}>Taj Mehal</Text>
                    <Text style={styles.cardLabel}>Agra, Uttarpredesh</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam ea enim repudiandae eaque! Facere!</Text>
                    <Text style={styles.cardFooter}>12 min away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
        width: 'auto',
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 6,
    },
    cardFooter: {
        color: '#000000',
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 18,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
})