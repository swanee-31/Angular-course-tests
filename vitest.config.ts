import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    globals: true, // Permet d'utiliser describe, it, expect sans les importer à chaque fois
    environment: 'jsdom', // Utilise jsdom pour simuler un navigateur dans les tests
    include: ['src/**/*.spec.ts'], // Inclut tous les fichiers de test se terminant par .spec.ts dans le dossier src
    setupFiles: ['src/test-setup.ts'], // Fichier exécuté avant tous les tests
    reporters: ['default'] // Utilise le reporter par défaut pour afficher les résultats des tests dans la console
  },
});
