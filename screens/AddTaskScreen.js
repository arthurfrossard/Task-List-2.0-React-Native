import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, VStack } from 'native-base';
import { useTaskStore } from '../store/taskStore';
import { useNavigation } from '@react-navigation/native';

const AddTaskScreen = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const navigation = useNavigation();

  const TaskSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'O título precisa ter pelo menos 2 caracteres!')
      .max(24, 'O título só pode ser até 24 caracteres!')
      .required('O título não pode ficar vazio!'),
    description: Yup.string()
      .min(8, 'A descrição precisa ter pelo menos 8 caracteres!')
      .max(60, 'A descrição só pode ser até 60 caracteres!')
      .required('A descrição não pode ficar vazia!'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          addTask(values);
          resetForm();
          navigation.navigate('Tarefas');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <VStack space={4}>
            <Input
              placeholder="Titulo"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              isInvalid={touched.title && !!errors.title}
              _invalid={{ borderColor: 'red.500' }}
            />
            {touched.title && errors.title && (
              <Text style={styles.errorText}>{errors.title}</Text>
            )}
            <Input
              placeholder="Descrição"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              isInvalid={touched.description && !!errors.description}
              _invalid={{ borderColor: 'red.500' }}
            />
            {touched.description && errors.description && (
              <Text style={styles.errorText}>{errors.description}</Text>
            )}
            <Button onPress={handleSubmit} title="Adicionar tarefa" />
          </VStack>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});

export default AddTaskScreen;
