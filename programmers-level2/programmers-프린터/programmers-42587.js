const solution = (priorities, location) => {
    const copiedDocsQueue = priorities.map((pri, idx) => {
        return {
            index: idx, priority: pri,
        };
    });

    const results = [];

    while(copiedDocsQueue.length > 0) {
        const target = copiedDocsQueue.shift();
        const hasHighPriority = copiedDocsQueue.some(doc => doc.priority > target.priority);
        if (hasHighPriority) {
            copiedDocsQueue.push(target);
        } else {
            results.push(target);
        }
    }

    return results.find(doc => doc.index === location);
}


