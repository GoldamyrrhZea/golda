import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const ServicesScreen = () => {

  const handleBrowseBooks = () => {
    // Implement browsing logic here
    Alert.alert('Menu', 'You are browsing the book collection!');
  };

  const handleSearchBooks = () => {
    // Implement searching logic here
    Alert.alert('Delicacies', 'You are searching for books!');
  };

  const handleViewFavorites = () => {
    // Implement view favorites logic here
    Alert.alert('View Favorites', 'You are viewing your favorite books!');
  };

  const handleRecommendations = () => {
    // Implement recommendations logic here
    Alert.alert('Recommendations', 'You are viewing book recommendations!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore the Taste</Text>

      <TouchableOpacity style={styles.button} onPress={handleBrowseBooks}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSearchBooks}>
        <Text style={styles.buttonText}>Delicacies</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleViewFavorites}>
        <Text style={styles.buttonText}>View Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRecommendations}>
        <Text style={styles.buttonText}>Recommendations</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#503a1f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    width: '70%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ServicesScreen
