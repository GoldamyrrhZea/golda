import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import historyicon from '../../../assets/12.jpg';
import biologyicon from '../../../assets/12.png';
import othericon from '../../../assets/king.jpg';

import history1 from '../../../assets/th.jpg';
import history2 from '../../../assets/ss1.jpg';

import biology1 from '../../../assets/ad1.jpg';
import biology2 from '../../../assets/ad2.jpg';

import other1 from '../../../assets/sus.avif';
import other2 from '../../../assets/king.jpg';
import other3 from '../../../assets/lab.webp';
import other4 from '../../../assets/sq.jpeg';

const Stack = createStackNavigator();

const HistoryScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(history1, "History Image 1")} style={styles.imageContainer}>
          <Image source={history1} style={styles.image} />
          <Text style={styles.imageTitle}>tomahawk</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(history2, "History Image 2")} style={styles.imageContainer}>
          <Image source={history2} style={styles.image} />
          <Text style={styles.imageTitle}>wagyu steak</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Order Now</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const BiologyScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(biology1, "Biology Image 1")} style={styles.imageContainer}>
          <Image source={biology1} style={styles.image} />
          <Text style={styles.imageTitle}>Chiken Adobo</Text>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => toggleDetails(biology2, "Biology Image 2")} style={styles.imageContainer}>
          <Image source={biology2} style={styles.image} />
          <Text style={styles.imageTitle}>Pork Adobo</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Order Now</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const OtherScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(other1, "Other Image 1")} style={styles.imageContainer}>
          <Image source={other1} style={styles.image} />
          <Text style={styles.imageTitle}>Sushi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(other2, "Other Image 2")} style={styles.imageContainer}>
          <Image source={other2} style={styles.image} />
          <Text style={styles.imageTitle}>King Crab</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(other3, "Other Image 3")} style={styles.imageContainer}>
          <Image source={other3} style={styles.image} />
          <Text style={styles.imageTitle}>labster</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(other4, "Other Image 4")} style={styles.imageContainer}>
          <Image source={other4} style={styles.image} />
          <Text style={styles.imageTitle}>Squid</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Order Now</Text><Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const CategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoryListScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Steak" component={HistoryScreen} />
      <Stack.Screen name="Pinoy Food" component={BiologyScreen} />
      <Stack.Screen name="See Food" component={OtherScreen} />
    </Stack.Navigator>
  );
};

const CategoryListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate('Steak')} style={styles.categoryContainer}>
        <Image source={historyicon} style={styles.categoryIcon} />
        <Text style={styles.category}>Steak's</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pinoy Food')} style={styles.categoryContainer}>
        <Image source={biologyicon} style={styles.categoryIcon} />
        <Text style={styles.category}>Pinoy food</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('See Food')} style={styles.categoryContainer}>
        <Image source={othericon} style={styles.categoryIcon} />
        <Text style={styles.category}>Sea food</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  categoryContainer: {
    width: '30%',
    margin: 10,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageTitle: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CategoryScreen;
