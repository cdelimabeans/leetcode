/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

/**
 * Status: Accepted
 * Runtime: 68ms
 * Runtime rank: 94.57%
 */

var licenseKeyFormatting = function(S, K) {
    var str = S.split('-').join('');
    var min = str.length % K;
    var license = [];
    var i = 0
    if (min > 0){
        license.push(str.slice(0,min));
        i = min;
    }

    while (i < str.length) {
        license.push(str.slice(i,i+K));
        i += K;
    }

    return license.join('-').toUpperCase();
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); //5F3Z-2E9W
console.log(licenseKeyFormatting("2-5g-3-J", 2)); //2-5G-3J