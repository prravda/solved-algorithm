const solution = (bridge_length, weight, truck_weights) => {
  const trucksWithCount = truck_weights.map((eachTruckWeight) => {
    return { truckWeight: eachTruckWeight, count: 0 };
  });

  const numberOfTruck = trucksWithCount.length;

  const trucksOnBridge = [];
  const trucksCrossedBridge = [];

  let neededTime = 0;

  while (trucksCrossedBridge.length < numberOfTruck) {
    // 첫 번째 트럭이 올라탈 때 -> 트럭을 추가해주고 trucksWithCount 에서 해당 트럭을 제거한뒤, truck의 count 를 ++ 해줌
    if (trucksOnBridge.length === 0) {
      trucksOnBridge.push(trucksWithCount.shift());
      neededTime++;
      trucksOnBridge[0].count++;
      continue;
    }

    // 만약 다리에 올라간 트럭(들) 뿐만 아니라, 다음 트럭까지도 하중을 버틸 수 있다면 -> trucksOnBridge 에 truck 을 추가해줌
    if (
      trucksWithCount.length !== 0 &&
      trucksOnBridge
        .map((truckInfo) => truckInfo.truckWeight)
        .reduce((accm, curr) => accm + curr) +
        trucksWithCount[0].truckWeight <=
        weight
    ) {
      trucksOnBridge.push(trucksWithCount.shift());
    }

    // 시간이 경과하고, 다리 위에 있는 트럭들의 count 도 ++ 해줌
    neededTime++;
    trucksOnBridge.forEach((eachTruck) => eachTruck.count++);

    // 만약 트럭이 다리를 다 건넜다면 -> trucksOnBridge 에서 해당 트럭을 제거하고 trucksCrossedBridge 로 이동
    if (trucksOnBridge[0].count === bridge_length) {
      trucksCrossedBridge.push(trucksOnBridge.shift());
    }
  }
  return neededTime + 1;
};
