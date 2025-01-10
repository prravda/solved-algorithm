class Solution:
    def preprocess(self, s: str) -> str:
        # remove all non-alphanumeric characters
        alpha_numerics = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
        ]

        s_processed = ""

        for c in s:
            c = c.lower()
            if c in alpha_numerics:
                s_processed += c

        return s_processed

    def isPalindrome(self, s: str) -> bool:
        """
        definition of palindrom:
        - reads the same forward and backward

        constraints
        - removing all non-alphanumeric character
        - covert all uppercase character to lowercase

        strategy
        - iterate this string using two pointers
          - one pointer iterate from the first
          - one pointer iterate from the last
        - compare two elements of two pointers
          - if all of them are non-alphanumeric character?
          - if all of them are same character after converting to lowecase?
        """

        preprocessed_s = self.preprocess(s)

        # if preprocessed_s is an empty string,
        # return True because empty string is considered
        # as palindrome
        if preprocessed_s == "":
            return True

        last_index_of_s = len(preprocessed_s) - 1

        for i in range(len(preprocessed_s)):
            char_from_head = preprocessed_s[i]
            char_from_tail = preprocessed_s[last_index_of_s - i]

            # if char from head and char from tail is not same,
            # return False because it is not a palindrome
            if char_from_head != char_from_tail:
                return False

        return True


# test_case = "A man, a plan, a canal: Panama"
# test_case = "race a car"
test_case = ""
result = Solution().isPalindrome(test_case)

print(result)
