// src/components/Header/index.jsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants/colors";

/* 
    Exemplo de uso do componente:
        <Header title="Quiz Diário" />
        <Header title="Grupo de Matemática" showBack={true} /> Mostra o botão de voltar
        <Header title="Menu" showBack={false} /> Esconde o botão de voltar
*/

export default function Header({ title, showBack = true }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={colors.primary} />
        </TouchableOpacity>
      ) : <View style={{ width: 22 }} />}

      <Text style={styles.title}>{title}</Text>

      <View style={{ width: 22 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
});