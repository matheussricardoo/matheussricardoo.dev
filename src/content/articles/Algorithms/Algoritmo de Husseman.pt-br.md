---
title: "Algoritmo de Huffman"
date: "2026-04-04"
description: "Explicação do algoritmo de Huffman com exemplo."
tags: ["algorithms", "compression"]
---
# Algoritmo de Huffman

O algoritmo de Huffman é um método eficiente para compressão de dados sem perdas. Ele atribui códigos binários de tamanho variável aos caracteres, de modo que os mais frequentes recebem códigos menores, otimizando o espaço utilizado.

## Passo a Passo

### Contagem de Frequência

Conte a ocorrência de cada caractere na mensagem original.

**Exemplo:**  
Mensagem: `AAAAAABBBBBCCCCDDDEEF`

| Caractere | A | B | C | D | E | F |
|-----------|---|---|---|---|---|---|
| Contagem  | 6 | 5 | 4 | 3 | 2 | 1 |

---

### Construção da Árvore de Huffman

1. Crie um nó folha para cada caractere, com peso igual à sua frequência.
2. Una os dois nós de menor frequência para formar um novo nó, cuja frequência é a soma das duas.
3. Repita o processo, sempre unindo os nós de menor frequência, até restar apenas um nó (a raiz da árvore).

**Exemplo de junção:**
- E (2) + F (1) = EF (3)
- D (3) + EF (3) = DEF (6)
- A (6) + DEF (6) = ADEF (12)
- B (5) + C (4) = BC (9)
- ADEF (12) + BC (9) = Raiz (21)

> **Dica:** Em caso de empate de frequências, qualquer combinação é válida, mas pode gerar códigos diferentes.

---

### Diagrama Visual da Árvore

Abaixo, um diagrama em ASCII da árvore de Huffman para o exemplo acima:

```
                [21]
               /    \
           [12]      [9]
          /    \    /   \
       [6]     [6] [5]  [4]
      /  \    (A) (B)   (C)
   [3]  [3]
  /  \   (D)
(E)  (F)
```

**Legenda:**
- Os números entre colchetes representam a soma das frequências dos nós filhos.
- As letras entre parênteses são os caracteres originais.

---

### Geração dos Códigos

Percorra a árvore da raiz até cada folha:
- Para cada bifurcação, atribua 0 para a esquerda e 1 para a direita (ou vice-versa, desde que seja consistente).
- O código de cada caractere é o caminho percorrido da raiz até sua folha.

**Exemplo de códigos gerados:**

| Caractere | Caminho | Código |
|-----------|---------|--------|
| A         | Esquerda → Direita         | 01     |
| B         | Direita → Esquerda         | 10     |
| C         | Direita → Direita          | 11     |
| D         | Esquerda → Esquerda → Direita | 001    |
| E         | Esquerda → Esquerda → Esquerda → Esquerda | 0000   |
| F         | Esquerda → Esquerda → Esquerda → Direita  | 0001   |

*Obs: A atribuição de 0 e 1 pode variar, mas a estrutura do caminho é sempre a mesma.*

---

### Compressão

Substitua cada caractere da mensagem original pelo seu código binário correspondente.

---

## Descompressão

Para descomprimir, basta percorrer a árvore de Huffman bit a bit:
- Comece na raiz.
- Para cada bit lido, siga para a esquerda (0) ou direita (1).
- Ao chegar em uma folha, recupere o caractere correspondente e volte à raiz para o próximo símbolo.

---

## Observações

- O algoritmo de Huffman é ótimo para compressão sem perdas.
- É amplamente utilizado em formatos como ZIP, JPEG, MP3, entre outros.
- Diagramas podem ajudar a visualizar a construção da árvore e a atribuição dos códigos.

---

**Referência:**  
[Wikipedia: Codificação de Huffman](https://pt.wikipedia.org/wiki/Codifica%C3%A7%C3%A3o_de_Huffman)