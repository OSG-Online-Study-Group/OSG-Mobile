// IDs devem bater EXATAMENTE com os documentos criados no Firestore

export const GRUPOS = [
  {
    id: "group_quimica_organica",
    name: "Grupo de Química Orgânica",
    subject: "quimica_organica",
    emoji: "🧪",
  },
  {
    id: "group_economia",
    name: "Grupo de Economia",
    subject: "economia",
    emoji: "💰",
  },
  {
    id: "group_algebra",
    name: "Grupo de Álgebra",
    subject: "algebra",
    emoji: "📐",
  },
  {
    id: "group_quimica_forense",
    name: "Grupo de Química Forense",
    subject: "quimica_forense",
    emoji: "🔬",
  },
];

// Map rápido de subject → groupId (usado no IAservice para pegar tema do grupo)
export const SUBJECT_TO_GROUP_ID = Object.fromEntries(
  GRUPOS.map((g) => [g.subject, g.id])
);

// Map rápido de groupId → dados do grupo
export const GROUP_BY_ID = Object.fromEntries(
  GRUPOS.map((g) => [g.id, g])
);