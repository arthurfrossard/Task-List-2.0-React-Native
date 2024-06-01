import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { NativeBaseProvider } from 'native-base';
import TasksScreen from './screens/TasksScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Tarefas') {
                iconName = 'list';
              } else if (route.name === 'Adicionar Tarefa') {
                iconName = 'add-to-list';
              }
              return <Entypo name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Tarefas" component={TasksScreen} />
          <Tab.Screen name="Adicionar Tarefa" component={AddTaskScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
