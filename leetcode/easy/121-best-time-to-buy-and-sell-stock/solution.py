from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        highest_profit = 0
        lowest_price = prices[0]

        # start the 1st element
        for current_price in prices:
            if current_price < lowest_price:
                lowest_price = current_price

            current_profit = current_price - lowest_price

            if current_profit > highest_profit:
                highest_profit = current_profit

        return highest_profit
