let numberMultiply = async (...args) => {
    let totalProduct = 1;

    const delay = ms => new Promise(res => setTimeout(res, ms))
    await delay(2000)
  

    args.forEach((x, i) => {
        if (isNaN(x))
            throw `Element '${x}' at index ${i} is not a number`;
        totalProduct *= +x;
    })
    return totalProduct;
};

module.exports = {
    numberMultiply
};
