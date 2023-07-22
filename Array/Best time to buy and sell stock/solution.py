class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit=0
        length = len(prices)
        l,r =0,1
        while r< length:
            if (prices[l] < prices[r]):
                maxProfit = max(maxProfit, prices[r]-prices[l])
            else:
                l = r
            r+=1
        return (maxProfit)