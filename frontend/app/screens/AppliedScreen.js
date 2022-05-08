import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Google',
        description: 'The FANG company everyone wants.',
        image: require('../assets/google.jpg')
    },
    {
        id: 2,
        title: 'Amazon',
        description: 'Long hours for big money',
        image: require('../assets/amazon.jpg')
    }
]

function AppliedScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card 
                    title={item.title}
                    subTitle={item.description}
                    image= {item.image}
                    onPress={() => navigation.navigate("InternshipDetails", item)}
                    />
            }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default AppliedScreen;