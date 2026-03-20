---
title: "Problema: Há Duplicatas?"
date: "2026-03-19"
description: "Descrição do problema 'Contains Duplicate' do NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Easy", "Arrays"]
challenge_url: "https://neetcode.io/problems/duplicate-integer/question?list=neetcode150"
---

## Descrição do Problema

Dado um array de inteiros `nums`, retorne `true` se algum valor aparecer mais de uma vez no array, caso contrário, retorne `false`.

**Exemplo 1:**
```rust
Entrada: nums = [1, 2, 3, 3]

Saída: true
```
**Exemplo 2:**
```rust
Entrada: nums = [1, 2, 3, 4]

Saída: false
```

## Solução 

Como podemos ver no exercício acima temos que verificar se uma lista contém números duplicados, com este pensamento podemos seguir por dois caminhos:
- Construir um modelo que percorre cada index da lista procurando um repetido se for > 0 retorna true
- Utilizar uma função que já verifica isso

## Método 1

```rust
impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        for i in 0..nums.len() {
            for j in (i + 1)..nums.len() {
                if nums[i] == nums[j] {
                    return true;
                }
            }
        }
        false
    }
}
```

Iniciamos com um for de index `i` começando de 0 até o tamanho da lista, dentro deste for iniciamos outro loop `j` indo de `i + 1` até o tamanho da lista, fazemos `i + 1` para que o número `j` não seja o mesmo percorrido de `i`, verificamos com condição se o valor de `i` é igual ao valor de `j`, se for retornamos true, caso contrário retornamos false.

- **Complexidade de Tempo:** `O(n²)`
- **Complexidade de Espaço:** `O(1)`

## Método 2

```rust
impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut visited = HashSet::with_capacity(nums.len());
        for num in nums {
            if !visited.insert(num) {
                return true;
            }
        }
        false
    }   
}
```

Começamos criando uma váriavel `visited` que será um HashSet, com a capacidade da lista, dentro do for percorremos a lista e inserimos cada número no HashSet, caso o número já exista no HashSet, a função `insert` retornará false e retornamos true, caso contrário retornamos false. O `HashSet` é uma estrutura de dados que permite armazenar valores únicos, ou seja, não permite valores duplicados, por isso ele é ideal para esse problema.

- **Complexidade de Tempo:** `O(n)`
- **Complexidade de Espaço:** `O(n)`