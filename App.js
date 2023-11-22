import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, Button, Image } from 'react-native';
import { styles } from './styles/style';

const strawhatPirateInf = [
  {
    firstName: 'Monkey D. Luffy',
    lastName: '"Strawhat"',
    position: 'Captain',
    DFeaten: 'Gum-Gum Fruit',
    Bounty: '3,000,000,000',
   image: require('./assets/luf.jpg'), 
  },
  {
    firstName: 'Roronoa Zoro',
    lastName: '"Pirate Hunter"',
    position: 'Swordsman (righthand man)',
    DFeaten: 'None',
    Bounty: '1,111,000,000',
    image: require('./assets/zor.jpg'), 
  },
  {
    firstName: 'Vinsmoke Sanji',
    lastName: '"Black Leg"',
    position: 'Cook (lefthand man)',
    DFeaten: 'None',
    Bounty: '1,032,000,000',
    image: require('./assets/san.jpg'), 
  },
  {
    firstName: 'Nami',
    lastName: '"Cat Burglar"',
    position: 'Navigator',
    DFeaten: 'None',
    Bounty: '366,000,000',
    image: require('./assets/nam.jpg'), 
  },
  {
    firstName: 'Niko Robin',
    lastName: '"Devil Child"',
    position: 'Archeologist',
    DFeaten: 'Hana-Hana Fruit',
    Bounty: '930,000,000',
    image: require('./assets/rob.jpg'), 
  },
  {
    firstName: 'Ussop',
    lastName: '"GOD"',
    position: 'Sniper',
    DFeaten: 'None',
    Bounty: '500,000,000',
    image: require('./assets/usp.jpg'), 
  },
  {
    firstName: 'Tony Tony Chopper',
    lastName: '"Cotton Candy Lover"',
    position: 'Doctor',
    DFeaten: 'Human-Human Fruit',
    Bounty: '1,000',
    image: require('./assets/chop.jpg'), 
  },
  {
    firstName: 'Franky',
    lastName: '"Cyborg"',
    position: 'Shipwright',
    DFeaten: 'None',
    Bounty: '394,000,000',
    image: require('./assets/fra.jpg'), 
  },
  {
    firstName: 'Brook',
    lastName: '"Soul King" ',
    position: 'Musician',
    DFeaten: 'Revive-Revive Fruit',
    Bounty: '383,000,000',
    image: require('./assets/brk.jpg'), 
  },
  {
    firstName: 'Jimbei',
    lastName: '"Knight of the Sea"',
    position: 'Helmsman',
    DFeaten: 'None',
    Bounty: '1,100,000,000',
    image: require('./assets/jim.jpg'), 
  },
];

const MembersList = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedUser(item);
      setModalVisible(true);
    }}>
      <Text style={styles.position}>{item.position}</Text>
      <br></br>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <Text style={styles.pt}>Strawhat Pirates Members:</Text>
      <FlatList
        data={strawhatPirateInf}
        keyExtractor={(item) => item.position}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <ScrollView>
              <Text style={styles.fullName}>
                {selectedUser.lastName} {selectedUser.firstName}
              </Text>
              <Text>Position: {selectedUser.position}</Text>
              <Text>Devil Fruit: {selectedUser.DFeaten}</Text>
              <Text>Bounty: {selectedUser.Bounty}</Text>
              {selectedUser.image && <Image source={selectedUser.image} style={{ width: 200, height: 200 }} />}
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default MembersList;