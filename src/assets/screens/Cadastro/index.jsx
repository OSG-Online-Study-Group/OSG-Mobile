import { useState } from "react";
import { Alert } from "react-native";
import { Container, Logo, Title, Input, Button, ButtonText } from "./styles";

import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const handleCadastro = async () => {

        if (!nome || !email || !senha || !confirmarSenha) {
            return Alert.alert("Erro", "Preencha todos os campos.");
        }

        if (senha !== confirmarSenha) {
            return Alert.alert("Erro", "As senhas não coincidem.");
        }

        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
        } catch (error) {
            Alert.alert("Erro no cadastro", error.message);
        }
    };

    return(
        <Container>
            <Logo source={require('../../images/icon_OSG.jpg')}/>

            <Title>Faça seu Cadastro</Title>

            <Input
                placeholder="Nome Completo"
                placeholderTextColor="#42A4C5"
                value={nome}
                onChangeText={setNome}
            />

            <Input 
                placeholder="Email"
                placeholderTextColor="#42A4C5"
                value={email}
                onChangeText={setEmail}
            />

            <Input 
                placeholder="Senha"
                placeholderTextColor="#42A4C5"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <Input 
                placeholder="Confirmar Senha"
                placeholderTextColor="#42A4C5"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
            />

            <Button onPress={handleCadastro}>
                <ButtonText>Enviar</ButtonText>
            </Button>
        </Container>
    );
}
