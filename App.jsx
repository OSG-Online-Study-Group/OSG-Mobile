import styled from 'styled-components/native';
import RootNavigator from './src/navigation/RootNavigator';

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <ContainerApp>
      <RootNavigator />
    </ContainerApp>
  );
}
