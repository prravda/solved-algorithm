class HashTableChaining:
    def __init__(self, size=10):
        self.size = size
        self.buckets = [[] for _ in range(self.size)]

    # simple hash function
    def _hash(self, key):
        # just use modulo operation to result of built-in hash function of python
        return hash(key) % self.size

    # putting an element, handling collision using chaining.
    def put(self, key, value):
        # insert or update the value for a given key
        hash_key = self._hash(key)
        # find a key for bucket
        bucket = self.buckets[hash_key]
        # then, insert into bucket using its key
        for i, (k, _) in enumerate(bucket):
            # if the hash of key is same,
            # and key in bucket is also same,
            # update it.
            if k == key:
                bucket[i] = (key, value)
                return
        # if there is no collision during put key-value set
        # just append it
        bucket.append((key, value))

    def get(self, key):
        # make a hash using hash fucntion by key
        hash_key = self._hash(key)

        # then find a bucket
        bucket = self.buckets[hash_key]

        # finally, find a element in bucket
        for k, v in bucket:
            if k == key:
                return v
        return None

    def remove(self, key):
        # create a hash using hash function
        hash_key = self._hash(key)

        # find a bucket from buckets
        bucket = self.buckets[hash_key]

        # then find a element in bucket
        for i, (k, v) in enumerate(bucket):
            if k == key:
                del bucket[i]
                return True
        return False


# Or, just implement simply dict of python