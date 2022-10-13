import React from "react";
import { StyleSheet, Dimensions, Button, View } from "react-native";

export default ({ onPressLeft, textleft, togglePointsFilter }) => {
    return (
        <View style={styles.panel}>
            <Button onPress={onPressLeft} title={textleft} />
            <Button title='Mostrar/Ocultar' onPress={togglePointsFilter} />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
