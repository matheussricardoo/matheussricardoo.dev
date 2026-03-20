---
title: "Problema: Anagrama Válido"
date: "2026-03-20"
description: "Descrição do problema 'Valid Anagram' do NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Easy", "Arrays"]
challenge_url: "https://neetcode.io/problems/is-anagram/question?list=neetcode150"
---

## Descrição do Problema

Dadas duas strings `s` e `t`, retorne `true` se as duas strings forem anagramas uma da outra, caso contrário retorne `false`.

Um **anagrama** é uma sequência de caracteres que contém exatamente os mesmos caracteres que outra sequência, mas a ordem dos caracteres pode ser diferente.

**Exemplo 1:**
```rust
Entrada: s = "racecar", t = "carrace"

Saída: true
```
**Exemplo 2:**
```rust
Entrada: s = "jar", t = "jam"

Saída: false
```
**Restrições:**

- `s` e `t` são compostas por letras minúsculas do alfabeto inglês.

## Solução

Para essa solução podemos começar verificando se as quantidades de caracteres de `s` e `t` são iguais, caso sim o programa continua, caso contrário já retornamos `false`. Usamos dois vetores para capturar cada caractere e transformá-los em listas de caracteres. Após isso, usamos `sort` para ordenar os caracteres em ordem alfabética e comparamos os dois vetores. Caso sejam iguais, retornamos `true`.

```rust
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }

        let mut s_chars: Vec<char> = s.chars().collect();
        let mut t_chars: Vec<char> = t.chars().collect();

        s_chars.sort_unstable();
        t_chars.sort_unstable();

        s_chars == t_chars
    }
}
```

- **Complexidade de Tempo:** `O(n log n)`
- **Complexidade de Espaço:** `O(n)`