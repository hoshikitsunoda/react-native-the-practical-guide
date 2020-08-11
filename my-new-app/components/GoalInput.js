import React, { useState } from 'react'
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native'

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  const cancelGoalAddHandler = () => {
    onCancel()
    setEnteredGoal('')
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="CANCEL" color="red" onPress={cancelGoalAddHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
})

export default GoalInput
