function sortTopScores(unsortedScores, HIGHEST_POSSIBLE_SCORE) {
    let storageArr = [],
        outputArr = [];

    unsortedScores.forEach(score => {
        if (!storageArr[score]) {
            storageArr[score] = 1;
        } else {
            storageArr[score]++;
        }
    });

    for (let i = 0; i < storageArr.length; i++) {
        if (storageArr[i] > 0) {
            while(storageArr[i]) {
                outputArr.push(i);
                storageArr[i]--;
            }
        }
    }

    return outputArr;
}

sortTopScores([37, 37, 89, 41, 41, 65, 65, 91, 53], 100);

module.exports = {
    sortTopScores
};