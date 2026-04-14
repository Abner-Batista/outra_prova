// ============================================
// Script de inicialização do banco "escola"
// Cria a collection "alunos" e insere 5 alunos
// ============================================

db = db.getSiblingDB("escola");

db.alunos.drop();

db.alunos.insertMany([
  {
    nome: "João Silva",
    idade: 20,
    curso: "ADS",
    notas: [7, 8, 9],
    endereco: {
      cidade: "Maricá",
      estado: "RJ"
    }
  },
  {
    nome: "Gabriel Ferreira",
    idade: 22,
    curso: "ADS",
    notas: [9, 10, 8],
    endereco: {
      cidade: "Itaboraí",
      estado: "RJ"
    }
  },
  {
    nome: "Larissa Costa",
    idade: 19,
    curso: "Contabilidade",
    notas: [6, 7, 5],
    endereco: {
      cidade: "São Gonçalo",
      estado: "RJ"
    }
  },
  {
    nome: "Rafael Mendes",
    idade: 23,
    curso: "ADS",
    notas: [10, 9, 10],
    endereco: {
      cidade: "Niterói",
      estado: "RJ"
    }
  },
  {
    nome: "Isabela Rodrigues",
    idade: 21,
    curso: "Logística",
    notas: [8, 7, 9],
    endereco: {
      cidade: "Rio de Janeiro",
      estado: "RJ"
    }
  }
]);

print("=== 5 alunos inseridos com sucesso no banco 'escola' ===");
