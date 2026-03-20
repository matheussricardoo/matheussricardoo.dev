---
title: "Problema: Agrupamento de Anagramas"
date: "2026-03-20"
description: "Descrição do problema 'Group Anagrams' do NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Medium", "Arrays"]
challenge_url: "https://neetcode.io/problems/anagram-groups/question?list=neetcode150"
---

## Descrição do Problema

Dado um array de strings `strs`, agrupe todos os anagramas em sublistas. Você pode retornar a saída em qualquer ordem.

Um **anagrama** é uma sequência de caracteres que contém exatamente os mesmos caracteres que outra sequência, mas a ordem dos caracteres pode ser diferente.

**Exemplo 1:**

```rust
Entrada: strs = ["act","pots","tops","cat","stop","hat"]

Saída: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
```

**Exemplo 2:**

```rust
Entrada: strs = ["x"]

Saída: [["x"]]
```

**Exemplo 3:**

```rust
Entrada: strs = [""]

Saída: [[""]]
```

**Restrições:**

- `1 <= strs.length <= 1000`
- `0 <= strs[i].length <= 100`
- `strs[i]` é composto por letras minúsculas do alfabeto inglês.

## Solução

Lendo o exercício e observando o exemplo 1 podemos ver que `cat` é a mesma coisa que `act` porem `act` está ordenado, tendo essa visão, podemos então fazer um for que percorre cada character transforma ele em uma palavra e depois verifica com a palavra ordenada se der match quer dizer que as palavras são um anagrama

```rust
impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut groups: HashMap<String, Vec<String>> = HashMap::new();
        for s in strs {
            let mut chars: Vec<char> = s.chars().collect();
            chars.sort_unstable();
            let key: String = chars.into_iter().collect();
            groups.entry(key).or_insert(Vec::new()).push(s);
        }
        groups.into_values().collect()
    }
}
```

Comecamos declarando um HashMap que vai guardar os grupos de anagramas, depois fazemos um for que percorre cada string do array `strs` e transforma ele em uma lista de caracteres, depois ordenamos os caracteres em ordem alfabética e transformamos de volta em uma string, essa string vai ser a chave do nosso HashMap, depois usamos o entry para adicionar a string no HashMap, caso a chave ja exista ele adiciona a string no vetor de strings, caso contrario ele cria um novo vetor de strings e adiciona a string, por fim retornamos os valores do HashMap.

- Complexidade de Tempo: O(n * k log k)
- Complexidade de Espaço: O(n * k)
