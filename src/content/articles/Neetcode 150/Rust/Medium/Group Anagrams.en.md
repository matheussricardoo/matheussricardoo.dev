---
title: "Problem: Group Anagrams"
date: "2026-03-20"
description: "Description of the problem 'Group Anagrams' from NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Medium", "Arrays"]
challenge_url: "https://neetcode.io/problems/anagram-groups/question?list=neetcode150"
---

## Problem Description

Given an array of strings `strs`, group all anagrams together into sublists. You may return the output in any order.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

**Example 1:**
```rust
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
```
**Example 2:**
```rust
Input: strs = ["x"]

Output: [["x"]]
```
**Example 3:**
```rust
Input: strs = [""]

Output: [[""]]
```
**Constraints:**

- `1 <= strs.length <= 1000`
- `0 <= strs[i].length <= 100`
- `strs[i]` is made up of lowercase English letters.

## Solution

By reading the exercise and looking at Example 1, we can see that `cat` is the same as `act`, but `act` is sorted. With this in mind, we can then use a `for` loop to iterate through each character, convert it into a word, and then check if it matches the sorted word; if there’s a match, it means the words are an anagram.

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

We start by declaring a HashMap that will store the groups of anagrams. Then we do a for loop that iterates through each string in the array `strs` and transforms it into a list of characters. Then we sort the characters in alphabetical order and transform them back into a string. This string will be the key of our HashMap. Then we use the entry to add the string to the HashMap. If the key already exists, it adds the string to the vector of strings. Otherwise, it creates a new vector of strings and adds the string. Finally, we return the values of the HashMap.

- **Time Complexity:** `O(n * k log k)`
- **Space Complexity:** `O(n * k)`
