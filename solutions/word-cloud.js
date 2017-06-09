function extractWordCloudData(text) {
    let textArr = stripPunctAndLowerCaseText(text).split(' '),
        wordMap = new Map();

    textArr.forEach(word => {
        let currentWordMapValue = wordMap.get(word);

        if (currentWordMapValue) {
            wordMap.set(word, currentWordMapValue + 1);
        } else {
            wordMap.set(word, 1);
        }
    });

    return wordMap;
}

function stripPunctAndLowerCaseText(text) {
    return text
            .split(',').join('')
            .split('.').join('')
            .split('!').join('')
            .split('?').join('')
            .split("'").join('')
            .split(':').join('')
            .split(';').join('')
            .split('-').join('')
            .toLowerCase();
}

module.exports = {
    extractWordCloudData
};