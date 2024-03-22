import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button } from 'react-native'

const AddTodo = ({ submitHandler }) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {

        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
            />


            <Button onPress={() => submitHandler(text)} title='Add ToDo' color='coral' />
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBlockColor: '#f9f9f9'
    }
})