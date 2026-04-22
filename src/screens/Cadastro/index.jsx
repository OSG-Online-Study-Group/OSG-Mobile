import { useState } from "react";
import {
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import {
  Container,
  Logo,
  Title,
  Input,
  Button,
  ButtonText,
  Label
} from "./styles";

import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { salvarUsuario } from "../../services/firestore";

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
      style={{ flex: 1, backgroundColor: "#1f0236" }}
      behavior={Platform.OS === "android" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{ flex: 1, backgroundColor: "#1f0236" }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Container>
            <Logo source={require("../../assets/images/icon_OSG.jpg")} />

            <Title>Faça seu Cadastro</Title>

            <Label>Nome Completo</Label>
            <Input
              value={nome}
              onChangeText={setNome}
            />

            <Label>Email</Label>
            <Input
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Label>Senha</Label>
            <Input
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <Label>Confirmar Senha</Label>
            <Input
              secureTextEntry
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />

            <Button onPress={handleCadastro}>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}