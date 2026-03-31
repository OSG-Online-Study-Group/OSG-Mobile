import { useState } from "react";
import { Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

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
        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao fazer login", error.message);
        }
    }

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <Container>
                    <Logo source={require("../../assets/images/icon_OSG.jpg")} />
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
            </ScrollView>
        </KeyboardAvoidingView>
    );
}