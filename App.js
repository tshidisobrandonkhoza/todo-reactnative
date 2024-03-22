import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

//
import Header from './components/header';
import Todoitem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {


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

    // console.log({...todos})

    // console.log('************')

    // console.log(todos.length + 1)

    // console.log('************') 
    setTodos([...todos, { text: text, key: todos.length + 1 }])
    console.log(todos)
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  }

});
