let numberSum = async (...args) => {
    let totalSum = 0;

    const delay = ms => new Promise(res => setTimeout(res, ms))
    await delay(3000)
  

    args.forEach((x, i) => {
        if (isNaN(x))
            throw `Element '${x}' at index ${i} is not a number`;
        totalSum += +x;
    })
    return totalSum;
};

module.exports = {
    numberSum
};
