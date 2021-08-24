const solution = (clothes) => {
  // sorting
  const clothSortedByCategory = {};
  for (const eachClothe of clothes) {
    const [item, category] = eachClothe;

    if (clothSortedByCategory[category] === undefined) {
      clothSortedByCategory[category] = [item];
      continue;
    }
    if (Array.isArray(clothSortedByCategory[category])) {
      clothSortedByCategory[category].push(item);
      continue;
    }
  }

  // powerset
  const totalSet = [];
  const getPowerSet = (elements, currentSet, index) => {
    if (Array.isArray(currentSet) && currentSet.length !== 0) {
      totalSet.push(currentSet);
    }
    for (let i = index; i < elements.length; i++) {
      getPowerSet(elements, [...currentSet, elements[i]], i + 1);
    }
  };
  getPowerSet(Object.keys(clothSortedByCategory), [], 0);

  // calculate total case
  let totalCases = 0;
  totalSet.forEach((eachSet) => {
    let setCase = 1;
    eachSet.forEach((category) => {
      setCase = setCase * clothSortedByCategory[category].length;
    });
    totalCases = totalCases + setCase;
  });

  return totalCases;
};
