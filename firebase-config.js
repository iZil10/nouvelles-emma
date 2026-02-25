// ============================================================
//   CONFIGURATION FIREBASE
//   Suis les instructions plus bas pour remplir ces valeurs
// ============================================================

const firebaseConfig = {
  apiKey: "REMPLACE_MOI",
  authDomain: "REMPLACE_MOI.firebaseapp.com",
  databaseURL: "https://REMPLACE_MOI-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "REMPLACE_MOI",
  storageBucket: "REMPLACE_MOI.appspot.com",
  messagingSenderId: "000000000000",
  appId: "REMPLACE_MOI"
};

// ============================================================
//  COMMENT OBTENIR CES VALEURS (5 minutes) :
//
//  1) Va sur https://console.firebase.google.com
//  2) Clique "Ajouter un projet" (ou "Add project")
//     - Nom : "nouvelles-emma" (ou ce que tu veux)
//     - Desactive Google Analytics (pas besoin)
//     - Clique "Creer le projet"
//
//  3) Dans le menu a gauche, clique "Build" > "Realtime Database"
//     - Clique "Creer une base de donnees"
//     - Choisis l'emplacement "europe-west1 (Belgium)"
//     - Choisis "Demarrer en mode test"
//     - Clique "Activer"
//
//  4) Retour a l'accueil du projet (icone maison)
//     - Clique sur l'icone Web "</>" pour ajouter une appli web
//     - Nom : "site-emma"
//     - PAS besoin de cocher Firebase Hosting
//     - Clique "Enregistrer l'appli"
//     - Tu verras un bloc firebaseConfig avec tes vraies valeurs
//     - Copie-les ici a la place des "REMPLACE_MOI"
//
//  5) Sauvegarde ce fichier, commit et push. C'est tout !
// ============================================================
