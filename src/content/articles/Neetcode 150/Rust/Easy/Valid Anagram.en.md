---
title: "Problem: Valid Anagram"
date: "2026-03-20"
description: "Description of the problem 'Valid Anagram' from NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Easy", "Arrays"]
challenge_url: "https://neetcode.io/problems/is-anagram/question?list=neetcode150"
---

## Problem Description

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

### Examples

**Example 1:**

```rust
Input: s = "racecar", t = "carrace"

Output: true
```

**Example 2:**

```rust
Input: s = "jar", t = "jam"

Output: false
```

### Constraints

- `s` and `t` consist of lowercase English letters.

## Solution

To solve this problem, we can start by checking whether the number of characters in `s` and `t` are equal; if so, the program continues; if not, it returns `false`. We use two vectors to capture each character and convert them into a list of strings. After that, we use the `sort` function to arrange the characters in alphabetical order and compare the two vectors; if they are equal, we return `true`.

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

- **Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(n)`
