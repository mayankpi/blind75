class Solution(object):
    def twoSum(self, nums, target):
        seen = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in seen:
                return [seen[diff], i]
            else:
                seen[nums[i]] = i

# Trick: Use a dictionary to store the seen numbers and their indices. Since they occur in pair thus we can use the dictionary to find the other number in O(1) time.
# Time Complexity: O(n)
# Space Complexity: O(n)