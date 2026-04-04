import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import SelecionarMaterias from '../screens/SelecionarMaterias';

import Menu from '../screens/Menu';
import Perfil from '../screens/Perfil';
import EditarPerfil from '../screens/EditarPerfil';
import Game from '../screens/Game';
import GrupoChat from '../screens/GrupoChat';
import ChatList from '../screens/ListaMensagens';
import SolicitacaoMensagens from '../screens/SolicitacaoMensagens';
import Ranking from '../screens/Ranking';
import Grupos from '../screens/Grupos';
import ConviteDuelo from '../screens/ConviteDuelo';
import DueloAmigo from '../screens/DueloAmigo';
import DueloAleatorio from '../screens/DueloAleatorio';
import QuizDiario from '../screens/QuizDiario';
import FiltroTreino from '../screens/FiltroTreino';
import Treino from '../screens/Treino';

const Stack = createNativeStackNavigator();

function PublicStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

// Usuário logado MAS sem grupos — força seleção de matérias
function SelectionStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelecionarMaterias" component={SelecionarMaterias} />
    </Stack.Navigator>
  );
}

function PrivateStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="SelecionarMaterias" component={SelecionarMaterias} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Grupos" component={Grupos} />
      <Stack.Screen name="GrupoChat" component={GrupoChat} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="SolicitacaoMensagens" component={SolicitacaoMensagens} />
      <Stack.Screen name="Ranking" component={Ranking} />
      <Stack.Screen name="ConviteDuelo" component={ConviteDuelo} />
      <Stack.Screen name="DueloAmigo" component={DueloAmigo} />
      <Stack.Screen name="DueloAleatorio" component={DueloAleatorio} />
      <Stack.Screen name="QuizDiario" component={QuizDiario} />
      <Stack.Screen name="Treino" component={Treino} />
      <Stack.Screen name="FiltroTreino" component={FiltroTreino} />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  const { firebaseUser, usuario, carregando } = useAuth();

  if (carregando || (firebaseUser && usuario === null)) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C173C' }}>
        <ActivityIndicator size="large" color="#B84EF2" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar hidden />
      {!firebaseUser
        ? <PublicStack />
        : !usuario?.groupIds?.length
          ? <SelectionStack />
          : <PrivateStack />
      }
    </NavigationContainer>
  );
}