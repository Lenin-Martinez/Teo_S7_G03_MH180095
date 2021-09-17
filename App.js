import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TouchableHighlight, Image } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Plymouth Barracuda', anio: '1969', img: require('./assets/Imagenes/Plymouth Barracuda.png'), code: '#2c3e50' },
    { name: 'Mustang Boss 429', anio: '1969', img:  require('./assets/Imagenes/Mustang Boss 429.png'), code: '#2c3e50' },
    { name: 'Pontiac GTO', anio: '1973', img:  require('./assets/Imagenes/Pontiac GTO.png'), code: '#2c3e50' },
    { name: 'Mustang Shelby GT 500', anio: '1967', img:  require('./assets/Imagenes/Mustang Shelby GT 500.png'), code: '#2c3e50' },
    { name: 'Chevelle SS', anio: '1969', img:  require('./assets/Imagenes/Chevelle SS.png'), code: '#2c3e50' },
    { name: 'Camaro Yenko', anio: '1969', img:  require('./assets/Imagenes/Camaro Yenko.png'), code: '#2c3e50' },

    { name: 'Toyota Hilux', anio: '2020', img:  require('./assets/Imagenes/Toyota Hilux.png'), code: '#27ae60' },
    { name: 'Ford Ranger', anio: '2021', img:  require('./assets/Imagenes/Ford Ranger.png'), code: '#27ae60' },
    { name: 'Nissan NP300 Navara', anio: '2019', img:  require('./assets/Imagenes/Nissan NP300 Navara.png'), code: '#27ae60' },
    { name: 'Mitsubishi L200', anio: '2020', img:  require('./assets/Imagenes/Mitsubishi L200.png'), code: '#27ae60' },
    { name: 'Volkswagen Amarok', anio: '2021', img:  require('./assets/Imagenes/Volkswagen Amarok.png'), code: '#27ae60' },
    { name: 'Isuzu D-Max', anio: '2020', img:  require('./assets/Imagenes/Isuzu D-Max.png'), code: '#27ae60' },

    { name: 'Porsche 718 Boxster', anio: '2019', img:  require('./assets/Imagenes/Porsche 718 Boxster.png'), code: '#f39c12' },
    { name: 'Mazda MX-5 Miata 2019', anio: '2019', img:  require('./assets/Imagenes/Mazda MX-5 Miata 2019.png'), code: '#f39c12' },
    { name: 'BMW M2', anio: '2019', img:  require('./assets/Imagenes/BMW M2.png'), code: '#f39c12' },
    { name: 'Mercedes-AMG GT', anio: '2020', img:  require('./assets/Imagenes/Mercedes-AMG GT.png'), code: '#f39c12' },
    { name: 'Chevrolet Corvette Z06', anio: '2020', img:  require('./assets/Imagenes/Chevrolet Corvette Z06.png'), code: '#f39c12' },
    { name: 'Honda Civic Type R', anio: '2019', img:  require('./assets/Imagenes/Honda Civic Type R.png'), code: '#f39c12' },
  ]);

function createButtonAlert (titulo,nombre,anio){
    Alert.alert(
      titulo,
      nombre + ", Año: " + anio,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    }

  return (
    <SectionGrid
      itemDimension={90}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Modelos clasicos',
          data: items.slice(0, 6),
        },
        {
          title: 'Camionetas',
          data: items.slice(6, 12),
        },
        {
          title: 'Deportivos',
          data: items.slice(12, 20),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD" onPress={() => createButtonAlert(section.title,item.name,item.anio)}>
            
        <View style={[styles.itemContainer, { backgroundColor: item.code }]} >
          <Image style={styles.imgStyle} 
                  source = {item.img}/>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.anio}</Text>
        </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
  imgStyle: {
    width: 75,
    height: 70,
    marginTop: 30,
  },
});