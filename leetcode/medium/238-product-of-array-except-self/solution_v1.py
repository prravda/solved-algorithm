from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # calculate all product(^2) except current element in O(n)
        # first, make a hashmap loop all nums and calculate

        # naive approach is calculate all product and div by current element
        # but it can not handle the case of 0

        # so, if element value is 0, store its index
        # then if current index is zero-value element's index

        product_result = 1
        zero_element_index = []

        for i in range(len(nums)):
            # if nums[i] is zero, store its result
            # and just continue to next loop without producting
            if nums[i] == 0:
                zero_element_index.append(i)
                continue
            # calculate product_result
            product_result *= nums[i]

        # case 0: if there are more than two zero-element,
        # just return zero-filled list
        if len(zero_element_index) >= 2:
            return [0] * len(nums)

        # case 1: if there are one 0 element
        # return zero filled except zero_element_index
        # and fill zero_element_index'th element to product_result
        if len(zero_element_index) == 1:
            result = [0] * len(nums)
            result[zero_element_index[0]] = product_result

            return result

        # caes 2: if there is no 0 element,
        # store the result by product_result / nums[i]
        result = []

        for i in range(len(nums)):
            result.append(int(product_result / nums[i]))

        return result


# testing
# test_case = [1, 2, 3, 4]
test_case = [-1, 1, 0, -3, 3]
print(Solution().productExceptSelf(test_case))
