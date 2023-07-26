function findMostFrequentElement(arr) {
    const frequency = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        frequency[currentElement] = (frequency[currentElement] || 0) + 1;

        if (frequency[currentElement] > maxFrequency) {
            maxFrequency = frequency[currentElement];
            mostFrequentElement = currentElement;
        }
    }

    return mostFrequentElement;
}

