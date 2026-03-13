import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Menu from '../screens/Menu';
import Perfil from '../screens/Perfil';

import PersonalizarPerfil from '../screens/Editar_Perfil';

import Game from '../screens/Game';
import QuimicaOrganica from '../screens/GrupoQuimicaOrganica';
import Economia from '../screens/GrupoEconomia';
import ChatList from '../screens/ListaMensagens';
import SolicitacaoMensagens from '../screens/SolicitacaoMensagens';
import FiltroRanking from '../screens/Ranking';

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
import RankingMaterias from '../screens/Ranking_materias';
import RankUsuarios from  '../screens/Ranking_pessoas';
import Grupos from '../screens/Seus_Grupos';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden />

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Perfil" component={Perfil} />

        <Stack.Screen name="Editar_Perfil" component={PersonalizarPerfil} />

        <Stack.Screen name="Game" component={Game} />

         <Stack.Screen name="Seus_Grupos" component={grupos} />

        <Stack.Screen name="QuimicaOrganica" component={QuimicaOrganica} />
        <Stack.Screen name="Economia" component={Economia} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="SolicitacaoMensagens" component={SolicitacaoMensagens} />
        <Stack.Screen name="FiltroRanking" component={FiltroRanking} />
      
       <Stack.Screen name="FiltroRanking" component={RankingMaterias} />

        <Stack.Screen name="RankingUsuarios" component={RankUsuarios} />

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
    </NavigationContainer>
  );
}
