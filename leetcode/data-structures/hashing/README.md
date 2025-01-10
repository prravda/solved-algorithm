# Hahsing

## Goal

- Implement a simple Hash-based data structure.
- Caring about collisions and protect them.

## Basic concept

- Hash helps for fast accessing by creating unique key used into hash.
- Normally their time complexity for accessing is `O(1)`.

## Hash collision

- But if keys of hash are duplicated, little bit different.
- This called `Hash collision`.

## How to resolve collision?

### Separate chaining

- Create a linked-list like data structure to each hash key.
- If a value is already exists in a specific key, just chain it.

### Open addressing

- All elements are stored into hash table. So, size of table should be larger than number of hash keys.
- Before keys are inserted/deleted, `probing` progress should be required.
- There are several probing ways like...
  - linear
  - quadratic
  - double hashing

#### linear probing

- if location of hashed key `hash(x)` is already occupied, move to next location like `hash(x) + 1`, `hash(x) + 2`, ..., `hash(x) + n`th location till location is not occupied.

#### quadratic probing

- if location of hashed key is already occupied, move to `hash(x) + (1*1)`, `hash(x) + (2*2)`, `hash(x) + (3*3)`, ... , `hash(x) + (n*n)`th location till location is not occupied.

#### double hashing

- implement 2 hash functions, `hash` and `hash2`
- if location of hashed key is already occupied, move to `hash(x) + 1*hash2(x)`, `hash(x) + 2*hash2(x)`, `hash(x) + 3*hash2(x)`, ... , `hash(x) + n*hash2(x)`th location till location is not occupied.
