import { useState } from "react";
import { Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
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
    if (senha.length < 6) {
      return Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
    }

    try {
      const credencial = await createUserWithEmailAndPassword(auth, email, senha);
      await salvarUsuario(credencial.user.uid, nome, email);
    } catch (error) {
      Alert.alert("Erro no cadastro", error.message);
    }
  };

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
            autoCapitalize="none"
            keyboardType="email-address"
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
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}