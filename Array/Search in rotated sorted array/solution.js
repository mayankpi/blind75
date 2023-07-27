/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > nums[end]) {
            if (nums[mid] < target || target <= nums[end]) start = mid + 1;
            else end = mid;
        } else {
            if (nums[mid] < target && target <= nums[end]) start = mid + 1;
            else end = mid;
        }
    }
    return nums[start] === target ? start : -1;
};
