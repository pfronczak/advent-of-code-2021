exports.day3_1 = (input) => {
    const counters = new Array(input[0].length).fill(0);
    for (const row of input) {
        for (let i = 0; i < row.length; i++) {
            if (row.charAt(i) == '0') counters[i]--;
            else if (row.charAt(i) == '1') counters[i]++;
        }
    }
    for (let i = 0; i < counters.length; i++) {
        if (counters[i] > 0) counters[i] = '1';
        else counters[i] = '0';
    }
    let gammaRate = parseInt(counters.join(''), 2);
    let epsilonRate = Math.pow(2, counters.length) - 1 - gammaRate;
    console.log(gammaRate, epsilonRate);
    return gammaRate * epsilonRate;
};

exports.day3_2 = (input) => {
    let oxyGenRating = getRating(input, true);
    let co2Rating = getRating(input, false);
    console.log(oxyGenRating, co2Rating);
    return oxyGenRating * co2Rating;
};

function getRating(input, mostCommonValSetting) {
    let buffer = input;
    let bitPos = 0;
    while (buffer.length > 1) {
        buffer = filterByBit(buffer, bitPos, mostCommonValSetting);
        bitPos++;
    }
    return parseInt(buffer[0], 2);
}

function filterByBit(values, bitPos, mostCommon = true) {
    let counter = 0;
    for (const val of values) {
        if (val.charAt(bitPos) == '0') counter--;
        else if (val.charAt(bitPos) == '1') counter++;
    }
    let mostCommonVal = counter >= 0 ? '1' : '0';
    return values.filter(val =>
        (mostCommon && val.charAt(bitPos) == mostCommonVal)
        || (!mostCommon && val.charAt(bitPos) != mostCommonVal)
    )
}