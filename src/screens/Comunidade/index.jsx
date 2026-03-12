import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function CommunityScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Ionicons name="menu" size={35} color="#C46CFF" />
        
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#9b73c5" />
          <TextInput
            placeholder="OSG"
            placeholderTextColor="#BFA3D6"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.profileIcon}>
          <Ionicons name="hand-left" size={24} color="#AEE2FF" />
        </View>
      </View>

      <Image
        source={require("../../assets/images/comunidade.jpg")} 
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Comunidade</Text>

      <View style={styles.groupBox}>
        <Text style={styles.groupText}>Grupo</Text>
        <Text style={styles.groupName}>OSG</Text>
      </View>

      <View style={styles.searchGroup}>
        <TextInput
          placeholder="Procurar grupo..."
          placeholderTextColor="#B89DD8"
          style={styles.searchGroupInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="arrow-forward" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="#CFA7FF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="game-controller-outline" size={22} color="#CFA7FF" />
          <Text style={styles.navText}>Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="people" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="book-outline" size={22} color="#CFA7FF" />
          <Text style={styles.navText}>Materiais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#CFA7FF" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
