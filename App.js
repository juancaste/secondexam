import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Map from './components/Map';
import Panel from './components/Panel';
import Modal from './components/Modal';
import Input from './components/Input';
import List from './components/List';
//import { Map, Panel, Modal } from './components'

export default function App() {
 const [ puntos, setPuntos ] = useState([])
 const [ puntoTem, setPuntoTem ] = useState({})
 const [ nombre, setNombre ] = useState('')
 const [ visibilityFilter, setVisibilityFilter ] = useState('new_puntos')
 const [ visibility, setVisibility ] = useState(false)
 const [ pointsFilter, setPointsFilter ] = useState(true)

 const togglePointsFilter = () => setPointsFilter(!pointsFilter)
 const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_puntos')
    setPuntoTem(nativeEvent.coordinate)
    setVisibility(true)
 }

 const handleChangeText = text => {
  setNombre(text)
 }

 const handleSubmit = () => {
  const newPunto = { coordinate: puntoTem, name: nombre };
  setPuntos(puntos.concat(newPunto))
  setVisibility(false)
  setNombre('')
 }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }
 
  console.log(puntos);

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <Panel onPressLeft={handleLista} textleft='Lista' togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        { visibilityFilter === 'new_puntos'
          ?
          <View style={styles.form}>
            <Input tittle='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} />
            <Button title="Aceptar" onPress={handleSubmit}/>
          </View>
          : <List puntos={puntos} closeModal={() => setVisibility(false)} />
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
