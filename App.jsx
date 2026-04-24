import styled from 'styled-components/native';
import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/context/AuthContext';

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <AuthProvider>
      <ContainerApp>
        <RootNavigator />
      </ContainerApp>
    </AuthProvider>
  );
}