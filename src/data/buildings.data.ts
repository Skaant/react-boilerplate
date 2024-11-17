import { Building } from "../types/buildings/Building";

export const BUILDINGS: {
  [key in Building["type"]]: {
    name: string;
    description: string;
    evolutions?: string[];
    modules?: string[];
    residents?: number;
  };
} = {
  "kolos-seed": {
    name: "Vaisseau-graine",
    description:
      "Il a atteri, avec des Zums endormis à son bord. Maintenant, tout le monde est révéillé et le vaisseau-graine commence à germer.",
    evolutions: [
      "Relais Hol-Zong",
      "Manufacture",
      "Vault de toutes les traïbs",
      "Grand arbre",
    ],
    modules: ["Chambre de synthèse", "Bibliothèque"],
    residents: 5,
  },
  dom: {
    name: "Dom",
    description: "Lieu de vie basique pour les Zums.",
    evolutions: ["Vault", "Serre", "Dom collectif"],
    modules: ["Citerne", "Cellier"],
    residents: 3,
  },
};
