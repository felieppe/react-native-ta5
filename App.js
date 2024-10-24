import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const images = [
    {id: '1', source: require('./assets/zarasa.webp'), description: "El zaragsa del saboggggggghh"},
    {id: '2', source: require('./assets/joaco.jpg'), description: "El joaco de piedra blanca por si no lo conociass"},
    {id: "3", source: require('./assets/leasosa.jpg'), description: "Con toda la powerrr ya sabeeeeeeess"}
  ]

  const renderItem = ({ item }) => (
    <View style={styles.talentos__list__item}>
      <Image style={styles.item__image} source={item.source} />
      <Text style={styles.item__description}>{item.description}</Text>
    </View>
  )

  return (
    <View style={styles.talentos}>
      <Text style={styles.talentos__title}>Talentos Uruguayos</Text>

      <FlatList 
        style={styles.talentos__list}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        pagingEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  talentos: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },

  talentos__title: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  talentos__list: {
    width: '100%',
    height: '100%'
  },

  talentos__list__item: {
    marginBottom: 20
  },

  item__image: {
    width: 400,
    height: 600
  },

  item__description: {
    fontSize: 16
  }
});
