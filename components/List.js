import React from "react";
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from "react-native";

export default ({ puntos }) => {
    return (
        <>
            <View style={styles.list}>
             <FlatList
                data={puntos.map(x => x.name)}
                renderItem={({item}) => <Text style={styles.Item}>{item}</Text>}
                keyExtractor={item => item}

             />
            </View>
            <View>
                <Button title='Cerrar' onPress={closeModal} />
            </View>
        </>
    )
}

const styles = StyleSheet.create ({
    Button: {
        paddingBottom: 15,
    },
    list: {
        height: Dimensions.get('window').height - 250,
    },
    Item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15,
    }
})
