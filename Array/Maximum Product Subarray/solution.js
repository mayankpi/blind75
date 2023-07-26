/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxProd = nums[0];
    let currProd = 1;
    for (let i = 0; i < nums.length; i++) {
        currProd = currProd * nums[i];
        if (currProd > maxProd) {
            maxProd = currProd;
        }
        if (currProd === 0) {
            currProd = 1;
        }
    }
    currProd = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        currProd = currProd * nums[i];
        if (currProd > maxProd) {
            maxProd = currProd;
        }
        if (currProd === 0) {
            currProd = 1;
        }
    }
    return maxProd;
};
