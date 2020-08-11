import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        value: enteredGoal,
      },
    ])
  }

  return (
    <View style={styles.screen}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        enteredGoal={enteredGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})
