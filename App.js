import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

//
import Header from './components/header';
import Todoitem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {


  //const 
  const [todos, setTodos] = useState([
    { text: 'Buy milk', key: '1' },
    { text: 'Buy coffe', key: '2' },
    { text: 'Buy books', key: '3' },
    { text: 'Buy rain', key: '4' },
    { text: 'Buy pot', key: '5' },
    { text: 'Buy cake', key: '6' },
  ]);

  const pressHandler = (key) => {
    setTodos(todos.filter(todo => todo.key != key))
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos([...todos, { text: text, key: todos.length + 1 }])

      Keyboard.dismiss();
    } else {
      Alert.alert('Opps!', 'A To Do must be atleast 3 characters long',
        [{ text: 'Understood', onPress: () => console.log('alert closed') },
        { text: 'Cancel', onPress: () => console.log('alert cancel') }
        ]
      )
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {

      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
          {/* form */}
          <AddTodo submitHandler={submitHandler}></AddTodo>

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todoitem item={item} pressHandler={pressHandler} ></Todoitem>
              )}
            >

            </FlatList>
          </View>
        </View>


      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40, 
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20
  }

});
