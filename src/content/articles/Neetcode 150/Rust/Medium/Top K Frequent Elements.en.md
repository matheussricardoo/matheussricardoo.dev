---
title: "Problem: Top K Frequent Elements"
date: "2026-03-20"
description: "Description of the problem 'Top K Frequent Elements' from NeetCode 150"
tags: ["Rust", "NeetCode"]
path: ["NeetCode", "Rust", "Medium", "Arrays"]
challenge_url: "https://neetcode.io/problems/top-k-frequent-elements/question?list=neetcode150"
---

## Problem Description

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

**Example 1:**
```rust
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
```

**Example 2:**
```rust
Input: nums = [7,7], k = 1

Output: [7]
```

**Constraints:**

- `1 <= nums.length <= 10^4`
- `-1000 <= nums[i] <= 1000`
- `1 <= k <= number of distinct elements in nums`

## Solution

We need to return the number of repeated numbers based on the frequency specified by `k`. So we can use a HashMap that stores the numbers in the array as keys, with their values being the number of times they appear, then we compare the highest values based on `k`.

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

We start by creating the `HashMap` we'll be working with, then loop through the vectors we'll be using and add their keys and values. After the first loop, we create a heap to sort our values and iterate through it to establish this sort order. Moving on to the last loop, we create a vector with the results and iterate through it to display only the values that `k` wants.

- Time Complexity: O(n log n)
- Space Complexity: O(n)