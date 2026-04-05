---
title: "Algoritmo de Huffman"
date: "2026-04-04"
description: "Explanation of the Huffman algorithm with example."
tags: ["algorithms", "compression"]
---
# Huffman Algorithm

The Huffman algorithm is an efficient method for lossless data compression. It assigns variable-length binary codes to characters, so that the most frequent characters receive shorter codes, optimizing the space used.

## Step by Step

### Frequency Count

Count the occurrence of each character in the original message.

**Example:**  
Message: `AAAAAABBBBBCCCCDDDEEF`

| Character | A | B | C | D | E | F |
|-----------|---|---|---|---|---|---|
| Count     | 6 | 5 | 4 | 3 | 2 | 1 |

### Building the Huffman Tree

1. Create a leaf node for each character, with weight equal to its frequency.
2. Merge the two nodes with the lowest frequency to form a new node, whose frequency is the sum of the two.
3. Repeat the process, always merging the nodes with the lowest frequency, until only one node remains (the root of the tree).

**Example of merging:**
- E (2) + F (1) = EF (3)
- D (3) + EF (3) = DEF (6)
- A (6) + DEF (6) = ADEF (12)
- B (5) + C (4) = BC (9)
- ADEF (12) + BC (9) = Root (21)

> **Tip:** In case of frequency ties, any combination is valid, but it may generate different codes.

### Visual Diagram of the Tree

Below is an ASCII diagram of the Huffman tree for the example above:

```
                [21]
               /    \
           [12]      [9]
          /    \    /   \
       [6]     [6] [5]  [4]
      /  \    (A) (B)   (C)
   [3]  [3]
  /  \   (D)
(E)  (F)
```

**Legend:**
- The numbers in brackets represent the sum of the frequencies of the child nodes.
- The letters in parentheses are the original characters.

### Generating the Codes

Traverse the tree from the root to each leaf:
- For each branch, assign 0 to the left and 1 to the right (or vice versa, as long as you are consistent).
- The code for each character is the path taken from the root to its leaf.

**Example of generated codes:**

| Character | Path | Code |
|-----------|------|------|
| A         | Left → Right         | 01     |
| B         | Right → Left         | 10     |
| C         | Right → Right        | 11     |
| D         | Left → Left → Right  | 001    |
| E         | Left → Left → Left → Left | 0000   |
| F         | Left → Left → Left → Right | 0001   |

*Note: The assignment of 0 and 1 may vary, but the structure of the path is always the same.*

### Compression

Replace each character in the original message with its corresponding binary code.

## Decompression

To decompress, simply traverse the Huffman tree bit by bit:
- Start at the root.
- For each bit read, go left (0) or right (1).
- When you reach a leaf, retrieve the corresponding character and return to the root for the next symbol.

## Notes

- The Huffman algorithm is great for lossless compression.
- It is widely used in formats such as ZIP, JPEG, MP3, among others.
- Diagrams can help visualize the construction of the tree and the assignment of codes.

**Reference:**  
[Wikipedia: Huffman coding](https://en.wikipedia.org/wiki/Huffman_coding)