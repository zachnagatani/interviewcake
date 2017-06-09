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

module.exports = {
    sortTopScores
};