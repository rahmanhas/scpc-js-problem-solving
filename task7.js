function romanToInt(romanNumeral) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let integerValue = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
        const currentNumeral = romanNumeral[i];
        const nextNumeral = romanNumeral[i + 1];

        if (romanNumerals[currentNumeral] < romanNumerals[nextNumeral]) {
            integerValue -= romanNumerals[currentNumeral];
        } else {
            integerValue += romanNumerals[currentNumeral];
        }
    }

    return integerValue;
}
