### Task-List-2.0-React-Native

# Task Manager App

Este é um aplicativo de gerenciamento de tarefas desenvolvido com React Native. Ele permite que os usuários adicionem e visualizem tarefas utilizando um sistema de navegação por abas.

## Funcionalidades

- Navegação por abas com ícones via `react-native-vector-icons/Entypo`.
- Tela de listagem de tarefas (`TasksScreen`) usando `FlatList`.
- Tela de formulário para adicionar tarefas (`AddTaskScreen`) com validação utilizando `formik` e `yup`.
- Layout do formulário utilizando `NativeBase`.
- Armazenamento global de tarefas utilizando `zustand`.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [NativeBase](https://nativebase.io/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Estrutura de Pastas

```
.
├── App.js
├── screens
│   ├── TasksScreen.js
│   └── AddTaskScreen.js
├── store
│   └── taskStore.js
└── README.md
```

## Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/arthurfrossard/Task-List-2.0-React-Native.git
   cd task-manager-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o aplicativo:**
   ```bash
   expo start
   ```

## Contribuição

Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.