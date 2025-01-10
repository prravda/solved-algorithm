class HashTableOpenAddressing:
    # Use linear probing
    def __init__(self, size):
        self.size = size
        self.hash_table = [None] * self.size

    # Use modulo operation
    def _hash(self, key: int) -> int:
        return key % self.size

    def insert(self, key: int, value: int):
        # create a hash index using self defined hash function
        hash_index = self._hash(key)

        for _ in range(self.size):
            # if location is empty, just insert it
            if (
                # case for empty
                self.hash_table[hash_index] is None
                # case for update
                or self.hash_table[hash_index][0] == key
            ):
                self.hash_table[hash_index] = (key, value)
                return
            # else, update the hash index using linear probing
            # adding to 1
            hash_index = (hash_index + 1) % self.size

        # if hash table size is full, do appropriate action
        raise Exception("Hash table size is full.")

    def get(self, key: int):
        hash_index = self._hash(key)

        for _ in range(self.size):
            if self.hash_table[hash_index] is None:
                # if there is no value to this index, return None
                return None
            if self.hash_table[hash_index[0]] == key:
                # if there is a value to this index, return value
                return self.hash_table[hash_index][1]
            # if table element is not None and hash key is not its key,
            # keep finding with linear probing
            hash_index = (hash_index + 1) % self.size

        # still there is no value in this hash table, return None
        return None

    def delete(self, key: int):
        hash_index = self._hash(key)

        for _ in range(self.size):
            # if there is no value to this index, return None
            if self.hash_table[hash_index] is None:
                return False
            # if there is a value to this index,
            if self.hash_table[hash_index][0] == key:
                # mark this element as None (deleted)
                self.hash_table[hash_index] = None
                return True
            hash_index = (hash_index + 1) % self.size

        return False
