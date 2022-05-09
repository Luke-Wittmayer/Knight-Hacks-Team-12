import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [

]

function AcceptedScreen({ navigation }) {
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

export default AcceptedScreen;