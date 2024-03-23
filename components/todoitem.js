import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';
const Todoitem = ({ item, pressHandler }) => {


    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)} >
            <View style={styles.item}>

            <Ionicons style={styles.list} name="trash-outline" size={15} color="green" />
            <Text> {item.text}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Todoitem

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    list:{
        marginRight: 10
    }
})