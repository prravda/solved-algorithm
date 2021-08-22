var MyHashMap = /** @class */ (function () {
    function MyHashMap(storage) {
        if (storage === void 0) { storage = {}; }
        this.storage = storage;
    }
    MyHashMap.prototype.put = function (key, value) {
        this.storage[key] = value;
    };
    MyHashMap.prototype.has = function (key) {
        return key in this.storage;
    };
    MyHashMap.prototype.get = function (key) {
        if (this.has(key)) {
            return this.storage[key];
        }
        else {
            return -1;
        }
    };
    MyHashMap.prototype.remove = function (key) {
        if (this.has(key)) {
            delete this.storage[key];
        }
    };
    return MyHashMap;
}());
var hashMap = new MyHashMap();
hashMap.remove(2);
hashMap.put(3, 11);
hashMap.put(4, 13);
hashMap.put(15, 6);
hashMap.put(6, 15);
hashMap.put(8, 8);
hashMap.put(11, 0);
hashMap.get(11);
hashMap.put(1, 10);
hashMap.put(12, 14);
