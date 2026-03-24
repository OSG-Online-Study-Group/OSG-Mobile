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
import PersonalizarPerfil from '../screens/Editar_Perfil';
import Game from '../screens/Game';
import GrupoChat from '../screens/GrupoChat';
import ChatList from '../screens/ListaMensagens';
import SolicitacaoMensagens from '../screens/SolicitacaoMensagens';
import Ranking from '../screens/Ranking';
import Grupos from '../screens/Seus_Grupos';
import CommunityScreen from '../screens/Comunidade';
import ConviteDuelo from '../screens/ConviteDuelo';
import DueloAmigo from '../screens/DueloAmigo';
import ThemeSelection from '../screens/TemaQuiz';
import QuizDiario from '../screens/QuizDiario';
import TreinoScreen from '../screens/TreinoScreen';
import FiltroEstudo from '../screens/FiltroEstudo';

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

// Usuário logado com grupos — app completo
function PrivateStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="SelecionarMaterias" component={SelecionarMaterias} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Editar_Perfil" component={PersonalizarPerfil} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Seus_Grupos" component={Grupos} />
      <Stack.Screen name="GrupoChat" component={GrupoChat} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="SolicitacaoMensagens" component={SolicitacaoMensagens} />
      <Stack.Screen name="Ranking" component={Ranking} />
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      <Stack.Screen name="ConviteDuelo" component={ConviteDuelo} />
      <Stack.Screen name="DueloAmigo" component={DueloAmigo} />
      <Stack.Screen name="ThemeSelection" component={ThemeSelection} />
      <Stack.Screen name="QuizDiario" component={QuizDiario} />
      <Stack.Screen name="Treino" component={TreinoScreen} />
      <Stack.Screen name="FiltroEstudo" component={FiltroEstudo} />
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
