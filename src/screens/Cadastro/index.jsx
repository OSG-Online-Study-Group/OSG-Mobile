import { useState } from "react";
import { Alert } from "react-native";
import { Container, Logo, Title, Input, Button, ButtonText } from "./styles";

import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { salvarUsuario } from "../../services/firestore";

export default function Cadastro({ navigation }) {
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
      const credencial = await createUserWithEmailAndPassword(
        auth,
        email,
        senha,
      );
      // Salva no Firestore imediatamente após criar no Auth
      await salvarUsuario(credencial.user.uid, nome, email);
      Alert.alert("Sucesso", "Conta criada!");
      navigation.navigate("Menu"); // redireciona após cadastro
    } catch (error) {
      Alert.alert("Erro no cadastro", error.message);
    }
  };

  return (
    <Container>
      <Logo source={require("../../assets/images/icon_OSG.jpg")} />

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
