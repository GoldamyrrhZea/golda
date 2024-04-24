import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/golda.jpg')} // Replace 'path_to_your_image.jpg' with the actual path to your image
        style={styles.image}
      />
      <Text style={styles.title}>Owner and Chief Cook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the width and height according to your image size
    height: 200,
    resizeMode: 'contain', // Adjust the resizeMode as per your image aspect ratio
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default AboutUsScreen;
