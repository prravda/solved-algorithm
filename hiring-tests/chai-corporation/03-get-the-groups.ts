// class for match the student
class LinkedList {
  constructor(private readonly _value: number, private _next?: LinkedList) {}

  public get value() {
    return this._value;
  }

  public set next(value: number) {
    this._next = new LinkedList(value);
  }
}

// function searchTheListByTargetValue(list: LinkedList, targetValue: number) {
//   if (list.value === target)
// }

// variabel for contain the list
const listPool: LinkedList[] = [];

// main function
function getTheGroups(
  n: number,
  queryType: string[],
  students1: number[],
  students2: number[]
): number[] {
  // let sizeOfTotalGroup
  for (let i = 0; i < n; i++) {
    // if the query type is friend
    if (queryType[i] === 'Friend') {
      if (listPool.length === 0) {
        listPool.push(
          // if there is no friend's list,
          // craete a LinkedList with a friend and the friend's friend
          // and countinue to the next loop
          new LinkedList(students1[i], new LinkedList(students2[2]))
        );
        continue;
      }
      return [n];
    }
  }
}
