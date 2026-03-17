import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth';

// Telas públicas (sem login)
import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import SelecionarMaterias from "../screens/SelecionarMaterias";

// Telas protegidas (requer login)
import Menu from '../screens/Menu';
import Perfil from '../screens/Perfil';
import Game from '../screens/Game';
import QuimicaOrganica from '../screens/GrupoQuimicaOrganica';
import Economia from '../screens/GrupoEconomia';
import ChatList from '../screens/ListaMensagens';
import SolicitacaoMensagens from '../screens/SolicitacaoMensagens';
import FiltroRanking from '../screens/Ranking';
import RankRegional from '../screens/RankingRegional';
import RankGlobal from '../screens/RankingGlobal';
import RankAmigos from '../screens/RankingAmigos';
import CommunityScreen from '../screens/Comunidade';
import ConviteDuelo from '../screens/ConviteDuelo';
import DueloAmigo from '../screens/DueloAmigo';
import ThemeSelection from '../screens/TemaQuiz';
import QuizDiario from '../screens/QuizDiario';
import Treino_Extras from '../screens/TreinoExtras';
import Treino_Exatas from '../screens/TreinoExatas';
import Treino_Humanas from '../screens/TreinoHumanas';
import FiltroEstudo from '../screens/FiltroEstudo';
import FiltroExatas from '../screens/FiltroExatas';
import FiltroHumanas from '../screens/FiltroHumanas';
import FiltroExtras from '../screens/FiltroExtras';
import FiltroMatematica from '../screens/FiltroMatematica';
import FiltroHistoria from '../screens/FiltroHistoria';
import FiltroQuimica from '../screens/FiltroQuimica';
import FiltroFilosofia from '../screens/FiltroFilosofia';
import FiltroAstronomia from '../screens/FiltroAstronomia';
import FiltroSociologia from '../screens/FiltroSociologia';
import FiltroInformatica from '../screens/FiltroInformatica';
import FiltroAntropologia from '../screens/FiltroAntropologia';

const Stack = createNativeStackNavigator();

// Stack pública — Login, Cadastro, Home
function PublicStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="SelecionarMaterias" component={SelecionarMaterias} />
    </Stack.Navigator>
  );
}

// Stack privada — tudo que precisa de login
function PrivateStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="QuimicaOrganica" component={QuimicaOrganica} />
      <Stack.Screen name="Economia" component={Economia} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="SolicitacaoMensagens" component={SolicitacaoMensagens} />
      <Stack.Screen name="FiltroRanking" component={FiltroRanking} />
      <Stack.Screen name="RankRegional" component={RankRegional} />
      <Stack.Screen name="RankGlobal" component={RankGlobal} />
      <Stack.Screen name="RankAmigos" component={RankAmigos} />
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      <Stack.Screen name="ConviteDuelo" component={ConviteDuelo} />
      <Stack.Screen name="DueloAmigo" component={DueloAmigo} />
      <Stack.Screen name="ThemeSelection" component={ThemeSelection} />
      <Stack.Screen name="QuizDiario" component={QuizDiario} />
      <Stack.Screen name="Treino_Extras" component={Treino_Extras} />
      <Stack.Screen name="Treino_Exatas" component={Treino_Exatas} />
      <Stack.Screen name="Treino_Humanas" component={Treino_Humanas} />
      <Stack.Screen name="FiltroEstudo" component={FiltroEstudo} />
      <Stack.Screen name="FiltroExatas" component={FiltroExatas} />
      <Stack.Screen name="FiltroHumanas" component={FiltroHumanas} />
      <Stack.Screen name="FiltroExtras" component={FiltroExtras} />
      <Stack.Screen name="FiltroMatematica" component={FiltroMatematica} />
      <Stack.Screen name="FiltroHistoria" component={FiltroHistoria} />
      <Stack.Screen name="FiltroQuimica" component={FiltroQuimica} />
      <Stack.Screen name="FiltroFilosofia" component={FiltroFilosofia} />
      <Stack.Screen name="FiltroAstronomia" component={FiltroAstronomia} />
      <Stack.Screen name="FiltroSociologia" component={FiltroSociologia} />
      <Stack.Screen name="FiltroInformatica" component={FiltroInformatica} />
      <Stack.Screen name="FiltroAntropologia" component={FiltroAntropologia} />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  const { firebaseUser, carregando } = useAuth();

  // Enquanto verifica se o usuário está logado, mostra loading
  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C173C' }}>
        <ActivityIndicator size="large" color="#B84EF2" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar hidden />
      {/* Mostra stack privada se logado, pública se não */}
      {firebaseUser ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}