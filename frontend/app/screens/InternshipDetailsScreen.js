import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

function InternshipDetailsScreen({ route }) {
  const internship = route.params;

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={internship.image}/>
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{internship.title}</AppText>
            <AppText style={styles.description}>{internship.description}</AppText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
      padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
      fontSize: 24,
      fontWeight: "500",
  },
  description: {
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 10,
  }
});

export default InternshipDetailsScreen;