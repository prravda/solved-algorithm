const solution = (skill, skill_trees) => {
    const splittedSkill = [...skill];
    let availableSkillTree = 0;
    for (const eachSkillTree of skill_trees) {
        const indexesOfEachSkill = splittedSkill.map(arg => eachSkillTree.indexOf(arg)); 
        
        let tempIndex = 0;
        for (const eachIndex of indexesOfEachSkill) {
            // 이상 없이 성공적으로 스킬트리를 다 순회한 경우
            if (tempIndex === indexesOfEachSkill.length - 1) {
                availableSkillTree ++;
                break;
            }
            // 먼저 배워야 하는 스킬을 배우지 않았는데 다음 스킬을 배우려는 경우
            if (eachIndex === -1) {
                // 그런데 이전 스킬들은 다 배웠고 해당 스킬만 그냥 안 배운 경우라면
                // 혹은, 그냥 그 스킬 이후의 스킬도 안 배웠다면
                // -> 일단은 넘어간다 
                if (indexesOfEachSkill[tempIndex + 1] === -1) {
                    tempIndex ++;
                    continue;
                }
                // 그렇지 않은 경우는 break 로 멈춰준다
                break;
            }
            // 먼저 배워야 하는 스킬을 배우고 다음 스킬을 배운 경우
            if (indexesOfEachSkill[tempIndex + 1] === -1 || eachIndex < indexesOfEachSkill[tempIndex + 1]) {
                tempIndex ++;
                continue;
            }
            // 스킬의 순서가 어긋난 경우
            tempIndex ++;
            break;
        }
    }
    return availableSkillTree;
};

// console.log(solution("CBD", ["AECB"]));
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));