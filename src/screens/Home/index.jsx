import { LoginContainer, Title, Logo, Button, ButtonText, Text } from "./styles";

export default function Home({ navigation }) {
    return (
        <LoginContainer>
            <Title>Seja Bem-Vindo</Title>
            <Logo source={require('../../assets/images/icon_OSG.jpg')} />

            {/* Botão Login */}
            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonText>Fazer Login</ButtonText>
            </Button>

            <Text>OU</Text>

            {/* Botão Cadastro */}
            <Button onPress={() => navigation.navigate("Cadastro")}>
                <ButtonText>Cadastre-se</ButtonText>
            </Button>
        </LoginContainer>
    );
}
