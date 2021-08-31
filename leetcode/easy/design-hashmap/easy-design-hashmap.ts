// 요구사항: hash table 을 라이브러리 쓰지 않고 만들기 
// 해당 hash map 을 생성할 때, 비어있는 Map object 를 반환해야 한다고 함. 
interface HashMapInterface {
  put(key: number, value: number): void; // 해당 key 에 해당 value 를 대입. 이미 value 가 있다면, value 를 update
  get(key: number): number; // 만약 해당 key 의 value 가 없다면, -1 을 return 
  remove(key: number): void; // key 에 해당하는 걸 지움
}

class MyHashMap implements HashMapInterface {
  constructor(
    private storage: any = {},
  ) {}

  public put(key: number, value: number): void {
    this.storage[key] = value;
  }

  public has(key: number): boolean {
    return key in this.storage;
  }

  public get(key: number): number {
    if (this.has(key)) {
      return this.storage[key];
    } else {
      return -1;
    }
  }

  public remove(key: number): void {
     if (this.has(key)) {
       delete this.storage[key];
     }
  }
}

const hashMap = new MyHashMap();
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