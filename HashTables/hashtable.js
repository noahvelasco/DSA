class HashTable {
  constructor(size = 42) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  insert(key, value) {
    let index = this.hash(key);

    //if this bucket doesnt exist then create it
    if (!this.buckets[index]) {
      this.buckets[index] = {};
    }

    //add
    this.buckets[index][key] = value;
  }

  search(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) return null;
    return this.buckets[index][key];
  }

  delete(key) {
    let index = this.hash(key);
    if (this.buckets[index] && this.buckets[index][key] !== undefined) {
      delete this.buckets[index][key];
    }
  }
}

// Example Usage
let ht = new HashTable();
ht.insert("name", "John Doe");
ht.insert("name", "John");

ht.insert("age", 30);
console.log(ht.search("name")); // John Doe
console.log(ht.search("age")); // 30
// ht.delete("name");
console.log(ht.search("name")); // undefined
console.log(ht);
