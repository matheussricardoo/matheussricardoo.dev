---
title: "Problem: Two Sum"
date: "2026-03-20"
description: "Description of the 'Two Sum' problem from NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Easy", "Arrays"]
challenge_url: "https://neetcode.io/problems/two-integer-sum/question?list=neetcode150"
---

## Problem: Two Sum

Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that every input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.

**Example 1:**
```rust
Input: nums = [3,4,5,6], target = 7

Output: [0,1]
```
**Explanation:** `nums[0] + nums[1] == 7`, so we return `[0, 1]`.

**Example 2:**
```rust
Input: nums = [4,5,6], target = 10

Output: [0,2]
```

**Example 3:**
```rust
Input: nums = [5,5], target = 10

Output: [0,1]
```

**Constraints:**

- **2 <= nums.length <= 1000**
- **-10,000,000 <= nums[i] <= 10,000,000**
- **-10,000,000 <= target <= 10,000,000**
- **Only one valid answer exists.**

## Solution

By analyzing the exercise, we can see from the line `nums[i] + nums[j] == target` that we may need to use two nested loops and check whether these two indices match the target; if so, we return the indices.

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

We start with the index `i` ranging from 0 to the maximum length of the list. After the first loop is completed, we immediately start the second loop with the index `j` ranging from `i + 1`—since `j` is always one step ahead of `i`—to ensure that the same indices do not correspond to the same number, and continuing up to the length of the list. After traversing both lists, we perform the check mentioned at the beginning of the problem: `nums[i] + nums[j] == target`. Within the check, we return the indices of the vector and conclude this exercise.

- **Time Complexity:** `O(n²)`
- **Space Complexity:** `O(1)`

## Solution 2

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

We create a `HashMap` to store the numbers we've seen so far and their indices. Next, we iterate through the `nums` array and, for each number, calculate the complement needed to reach the `target`. If the complement is already in the `HashMap`, we've found the solution and return the indices. Otherwise, we add the current number and its index to the `HashMap`.

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`