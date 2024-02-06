import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Javascript 24 - ES12
                    </Text>
                </View>
                <Image source={{
                    uri: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D',
                }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et sint asperiores quo, ad, obcaecati iure praesentium impedit quidem neque corporis voluptatibus repellendus, veritatis dolorum pariatur commodi laudantium accusamus. Excepturi reprehenderit maxime provident? Nam possimus optio quae minus natus, cum incidunt, consectetur soluta magni rerum eligendi amet debitis, suscipit nihil.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}
                    >
                        <Text style={styles.socialLink}>
                            Read more
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}
                    >
                        <Text style={styles.socialLink}>
                            Follow me
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,

    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.5,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 200,
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLink: {
        color: '#000000',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        fontSize: 16,
        borderRadius: 6,
    }
})