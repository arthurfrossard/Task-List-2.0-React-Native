import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTaskStore } from '../store/taskStore';

const TasksScreen = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <Text style={styles.emptyMessage}>Nenhuma tarefa cadastrada!</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  taskItem: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
});

export default TasksScreen;
