import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../../constants/colors";

const TABS = [
  { name: "Menu",         icon: "home-outline",              activeIcon: "home"              },
  { name: "Game",         icon: "game-controller-outline",   activeIcon: "game-controller"   },
  { name: "FiltroTreino", icon: "book-outline",              activeIcon: "book"              },
  { name: "Ranking",      icon: "trophy-outline",            activeIcon: "trophy"            },
  { name: "Perfil",       icon: "person-outline",            activeIcon: "person"            },
];

export default function BottomNav() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = route.name === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => navigation.navigate(tab.name)}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.icon}
              size={22}
              color={isActive ? COLORS.primary : COLORS.textMuted}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.name === "FiltroTreino" ? "Treinar" : tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    gap: 3,
  },
  label: {
    fontSize: 11,
    color: COLORS.textMuted,
  },
  labelActive: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
});