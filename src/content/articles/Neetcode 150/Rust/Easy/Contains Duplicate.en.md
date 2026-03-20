---
title: "Problem: Contains Duplicate"
date: "2026-03-19"
description: "Description of the problem 'Contains Duplicate' from NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Easy", "Arrays"]
challenge_url: "https://neetcode.io/problems/duplicate-integer/question?list=neetcode150"
---

## Problem Description

Given an array of integers `nums`, return `true` if any value appears more than once in the array, otherwise, return `false`.

**Example 1:**
```rust
Input: nums = [1, 2, 3, 3]

Output: true
```
**Example 2:**
```rust
Input: nums = [1, 2, 3, 4]

Output: false
```

## Solution 

As we can see in the exercise above, we need to check whether a list contains duplicate numbers. With this in mind, we can take two approaches:
- Build a model that iterates through each element of the list, checking for duplicates, if the count is greater than 0, it returns true
- Use a function that already performs this check

## Method 1

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

We start with a for loop where `i` is indexed from 0 up to the length of the list. Inside this for loop, we start another loop where `j` runs from `i + 1` up to the length of the list. We set `j` to `i + 1` so that `j` does not follow the same path as `i`. We check whether the value of `i` is equal to the value of `j`, if it is, we return `true`, otherwise, we return false.

- **Time Complexity:** `O(n²)`
- **Space Complexity:** `O(1)`

## Method 2

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

We start by creating a `visited` variable, which will be a HashSet with the same capacity as the list. Inside the `for` loop, we iterate through the list and add each number to the HashSet. If the number already exists in the HashSet, the `insert` function returns `false`, otherwise, it returns `true`. The `HashSet` is a data structure that allows you to store unique values, that is, it does not allow duplicate values which is why it is ideal for this problem.

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`