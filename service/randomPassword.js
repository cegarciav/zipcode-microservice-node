const randomPassWord = () => {
    const psLength = Math.floor(Math.random() * 50) + 20;
    let ps = '';
    for (let i = 0; i < psLength; i += 1){
        let validChar = false;
        let newChar = '';
        while (!validChar){
            const newValue = Math.floor(Math.random() * 90) + 33;
            newChar = String.fromCharCode(newValue);
            if (!'/\\\'\"'.includes(newChar)) validChar = true;
        }
        ps += newChar;
    }
    return ps;
}

module.exports = {
    randomPassWord
};
