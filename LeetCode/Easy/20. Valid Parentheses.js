/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const array = s.split('');
    let array2 = [];
    for (let num of array) {
        if (num === '(' || num === '{' || num === '[') {
            array2.push(num);
        } else {
            let popa = array2.pop();
            switch (num) {
                case ')':
                    if (popa !== '(') { return false; }
                    break;
                case '}':
                    if (popa !== '{') { return false; }
                    break;
                case ']':
                    if (popa !== '[') { return false; }
                    break;
                default:
                    return false;
            }
        }
    }
    return array2.length === 0;
};
console.log(isValid('{[]}'));