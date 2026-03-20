---
title: "Problema: Soma de Dois Números"
date: "2026-03-20"
description: "Descrição do problema 'Two Sum' do NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Easy", "Arrays"]
challenge_url: "https://neetcode.io/problems/two-integer-sum/question?list=neetcode150"
---

## Descrição do Problema

Dado um array de inteiros `nums` e um inteiro `target`, retorne os índices `i` e `j` tais que `nums[i] + nums[j] == target` e `i != j`.

Você pode assumir que cada entrada possui exatamente um par de índices `i` e `j` que satisfazem a condição.

Retorne a resposta com o menor índice primeiro.

**Exemplo 1:**
```rust
Entrada: 
nums = [3,4,5,6], target = 7

Saída: [0,1]
```
**Explicação**: `nums[0] + nums[1] == 7`, então retornamos `[0, 1]`.

**Exemplo 2:**
```rust
Entrada: nums = [4,5,6], target = 10

Saída: [0,2]
```
**Exemplo 3:**
```rust
Entrada: nums = [5,5], target = 10

Saída: [0,1]
```
**Restrições:**

- **2 <= nums.length <= 1000**
- **-10,000,000 <= nums[i] <= 10,000,000**
- **-10,000,000 <= target <= 10,000,000**
- **Só existe uma resposta válida.**

## Solução 

Interpretando o exercício já sacamos por conta da linha `nums[i] + nums[j] == target` que podemos ter que usar dois loops aninhados e comparar se a soma desses dois índices corresponde ao target, caso sim retornamos os índices. 

```rust
impl Solution {
	pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
		for i in 0..nums.len() {
			for j in (i + 1)..nums.len() {
				if nums[i] + nums[j] == target {
					return vec![i as i32, j as i32];
				}
			}
		}
		vec![]
	}
}
```
Começamos com o índice `i` indo de 0 até o máximo da lista após a declaração do primeiro loop. Iniciamos o segundo loop logo em seguida com o índice `j` indo de `i + 1` por conta de sempre estar um índice à frente do `i` para que os mesmos índices não passem pelo mesmo número, e indo até o tamanho da lista. Após percorrer as duas listas fazemos a verificação que nos é falada no início do problema `nums[i] + nums[j] == target`. Dentro da verificação retornamos os índices do vetor e concluímos este exercício.

- **Complexidade de Tempo:** `O(n²)`
- **Complexidade de Espaço:** `O(1)`

## Solução 2

```rust
impl Solution {
	pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
		let mut map = HashMap::new();
		for (i, &num) in nums.iter().enumerate() {
			let complement = target - num;
			if let Some(&j) = map.get(&complement) {
				return vec![j as i32, i as i32];
			}
			map.insert(num, i);
		}
		vec![]
	}
}
```
Criamos um `HashMap` para armazenar os números que já vimos e seus índices. Em seguida, percorremos o array `nums` e para cada número, calculamos o complemento necessário para atingir o `target`. Se o complemento já estiver no `HashMap`, encontramos a solução e retornamos os índices. Caso contrário, adicionamos o número atual e seu índice ao `HashMap`.

- **Complexidade de Tempo:** `O(n)`
- **Complexidade de Espaço:** `O(n)`


