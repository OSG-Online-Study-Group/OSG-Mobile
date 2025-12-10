import { useState } from "react";
import { Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

import { 
    Container, 
    Logo, 
    Title, 
    Input, 
    Button, 
    ButtonText 
} from "./styles";

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin() {
        if (!email || !senha) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigation.navigate("Menu");
        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao fazer login", error.message);
        }
    }

    return (
        <Container>
            <Logo source={require("../../images/icon_OSG.jpg")} />
            <Title>Faça Login</Title>

            <Input 
                placeholder="Email"
                placeholderTextColor="#42A4C5"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />

            <Input 
                placeholder="Senha"
                placeholderTextColor="#42A4C5"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <Button onPress={handleLogin}>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    );
}
