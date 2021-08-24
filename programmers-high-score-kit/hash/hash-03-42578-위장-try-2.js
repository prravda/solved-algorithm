const solution = (clothes) => {
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

  let totalCases = 1;
  for (const category in clothSortedByCategory) {
    totalCases = totalCases * (clothSortedByCategory[category].length + 1);
  }

  return totalCases - 1;
};
