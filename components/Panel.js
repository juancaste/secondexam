import React from "react";
import { StyleSheet, Dimensions, Button, View } from "react-native";

export default ({ onPressLeft, textLetf, togglePointsFilter }) => {
    return (
        <View style={styles.panel}>
            <Button onPress={onPressLeft} title={textLetf}> 
            </Button>
            <Button title="Mostrar/Ocultar" onPress={togglePointsFilter}>
            </Button>
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
    }
});
