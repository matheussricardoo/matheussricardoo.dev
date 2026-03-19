---
title: "Notas de Rust"
date: "2026-03-17"
description: "Placeholder para futuros NeetCode em Rust."
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust"]
---

Notas em breve...

Aqui está um exemplo do `std::collections::HashMap`:
```rust
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("NeetCode", 150);
    
    if let Some(count) = map.get("NeetCode") {
        println!("Resolvidos: {}", count);
    }
}
```
