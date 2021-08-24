const orderOfPresentation = (n, k) => {
  const results = [];
  
  const pool = [];
  for (let i = 1; i <= n; i++) {
    pool.push(i); 
  }

  const backTrack = (args, tempArr) => {
    if (tempArr.length === pool.length) {
      results.push([...tempArr]);
    }

    args.forEach(arg => {
      if (!tempArr.includes(arg)) {
        tempArr.push(arg);
        backTrack(args, tempArr);
        tempArr.pop(arg);
      }
    });
  }

  backTrack(pool, []);

  if (typeof k === 'number') {
    return results[k];
  }
  
  if (Array.isArray(k)) {
    for (let i = 0; i < results.length; i++) {
      if (results[i].every((arg, index) => arg === k[index])) {
        return i;
      }
    }
  }
};
