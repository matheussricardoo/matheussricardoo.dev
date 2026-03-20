---
title: "Problema: Elementos mais frequentes dos K"
date: "2026-03-20"
description: "Descrição do problema 'Top K Frequent Elements' do NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Medium", "Arrays"]
challenge_url: "https://neetcode.io/problems/top-k-frequent-elements/question?list=neetcode150"
---

## Descrição do Problema

Dado um vetor de inteiros `nums` e um inteiro `k`, retorne os `k` elementos mais frequentes dentro do vetor.

Os casos de teste são gerados de forma que a resposta seja sempre única.

Você pode retornar a saída em qualquer ordem.

**Exemplo 1:**
```rust
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
```
**Exemplo 2:**
```rust
Input: nums = [7,7], k = 1

Output: [7]
```
**Restrições:**

- `1 <= nums.length <= 10^4`
- `-1000 <= nums[i] <= 1000`
- `1 <= k <= number of distinct elements in nums`

## Solução

Precisamos retornar sempre a quantidade de números repetidos com base na frequência que `k` pede. Então podemos trabalhar com um HashMap que armazena os números relatados no array como key e seus valores será as ocorrências que eles aparecem, depois fazemos a comparação de maiores valores que aparece com base no `k`.

```rust
impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut counts: HashMap<i32, i32> = HashMap::new();
        for num in nums {
            let count = counts.entry(num).or_insert(0);
            *count += 1;
        }

        let mut heap = BinaryHeap::new();
        for (num, count) in counts {
            heap.push((count, num))
        }

        let mut result = Vec::new();
        for _ in 0..k {
            if let Some((_count, num)) = heap.pop() {
                result.push(num);
            }
        }

        result
    }
}
```

Começamos criando o `HashMap` que vamos trabalhar, iniciamos um for num com os vetores que iremos trabalhar e adicionamos suas chaves e suas ocorrências. Saindo do primeiro loop criamos uma  heap para colocarmos nossos valores em um rank e o percorremos para fazer este rank. Partindo para o ultimo loop criamos um vetor com os resultados e percorremos para mostrar somente os valores que o `k` quer.

- Time Complexity: O(n log n)
- Space Complexity: O(n)
