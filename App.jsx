import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importações das telas
import Home from './src/assets/screens/Home';
import Cadastro from './src/assets/screens/Cadastro';
import Login from './src/assets/screens/Login';
import Menu from './src/assets/screens/Menu';
import Perfil from './src/assets/screens/Perfil';
import Game from './src/assets/screens/Game';
import QuimicaOrganica from './src/assets/screens/Grupo Quimica Organica';
import Economia from './src/assets/screens/Grupo Economia';
import ChatList from './src/assets/screens/Lista Mensagens';
import SolicitacaoMensagens from './src/assets/screens/Solicitacao Mensagens';
import FiltroRanking from './src/assets/screens/Ranking';
import RankRegional from './src/assets/screens/Ranking Regional';
import RankGlobal from './src/assets/screens/Ranking Global';
import RankAmigos from './src/assets/screens/Ranking Amigos';
import CommunityScreen from './src/assets/screens/Comunidade';
import ConviteDuelo from './src/assets/screens/Convite Duelo';
import ThemeSelection from './src/assets/screens/Tema Quiz';
import Treino_Extras from './src/assets/screens/Treino_Extras';
import Treino_Exatas from './src/assets/screens/Treino_Exatas';
import Treino_Humanas from './src/assets/screens/Treino_Humanas';
import DueloAmigo from './src/assets/screens/Duelo Amigo';
import FiltroEstudo from './src/assets/screens/Filtro de Estudo';
import FiltroExatas from './src/assets/screens/Filtro de materia exatas';
import FiltroHumanas from './src/assets/screens/Filtro de materia humanas';
import FiltroExtras from './src/assets/screens/Filtro de materia extras';
import FiltroMatematica from './src/assets/screens/Filtro de materia matemática';
import FiltroHistoria from './src/assets/screens/Filtro de materia historia';
import FiltroQuimica from './src/assets/screens/Filtro de materia quimica';
import FiltroFilosofia from './src/assets/screens/Filtro de materia filosofia';
import FiltroAstronomia from './src/assets/screens/Filtro de materia astronomia';
import FiltroSociologia from './src/assets/screens/Filtro de materia sociologia';
import FiltroInformatica from './src/assets/screens/Filtro de materia informatica';
import FiltroAntropologia from './src/assets/screens/Filtro de materia antropologia';

// Estilo container
const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

// Criar o stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContainerApp>
      <NavigationContainer>
        <StatusBar hidden />

        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
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
          <Stack.Screen name="ThemeSelection" component={ThemeSelection} />
          <Stack.Screen name="Treino_Extras" component={Treino_Extras} />
          <Stack.Screen name="Treino_Exatas" component={Treino_Exatas} />
          <Stack.Screen name="Treino_Humanas" component={Treino_Humanas} />
          <Stack.Screen name="DueloAmigo" component={DueloAmigo} />
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
    </ContainerApp>
  );
}
