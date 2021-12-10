exports.day1_1 = (input) => {
    let increases = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i-1]) ++increases;
    }
    return increases;
}

exports.day1_2 = (input) => {
    let increases = 0;
    const sums = [];
    for (let i = 0; i < input.length - 2; i++) {
        sums.push(input[i] + input[i+1] + input[i+2]);
    }
    for (let i = 1; i < sums.length; i++) {
        if (sums[i] > sums[i-1]) ++increases;
    }
    return increases;
}