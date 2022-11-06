# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys


class KeypadManipulator:
    def __init__(self):
        self.__out_of_case_str = 'OUT_OF_CASE'
        self.__keypad = [
            ['1', '.', ',', '?', '!'],
            ['2', 'A', 'B', 'C'],
            ['3', 'D', 'E', 'F'],
            ['4', 'G', 'H', 'I'],
            ['5', 'J', 'K', 'L'],
            ['6', 'M', 'N', 'O'],
            ['7', 'P', 'Q', 'R', 'S'],
            ['8', 'T', 'U', 'V'],
            ['9', 'W', 'X', 'Y', 'Z'],
        ]
        self.__prev: str = self.__out_of_case_str
        self.__parsed_input: list[str] = []
        self.__counter = 1

    def manipulate_each_input(self, count: int) -> str:
        keypad_index = int(self.__prev) - 1

        manipulated_count = (count - 1) % len(self.__keypad[keypad_index])

        return self.__keypad[keypad_index][manipulated_count]

    def parse_input(self, input_logs: list[int]) -> str:
        for i in input_logs:
            # init case
            if self.__prev is self.__out_of_case_str:
                self.__prev = str(i)
                continue

            # if prev and current are not same character
            if str(i) != self.__prev:
                # manipulate the input and store it
                parsed_input_till_current = self.manipulate_each_input(self.__counter)
                self.__parsed_input.append(parsed_input_till_current)

                # reset the counter and prev
                self.__counter = 1

            # if prev and current are same
            if str(i) == self.__prev:
                self.__counter += 1

            # common:
            # update the prev property
            self.__prev = str(i)

        # if there are remained characters in pool
        if self.__counter != 0:
            last_parsed_input = self.manipulate_each_input(self.__counter)
            self.__parsed_input.append(last_parsed_input)

        concatenated_string = ''.join(self.__parsed_input)
        return concatenated_string


def from_numstr_to_int(numstr: str) -> int:
    return int(numstr)


num_of_typing = int(input())
raw_typing_logs = input()

typing_logs: list[int] = list(map(from_numstr_to_int, raw_typing_logs))

manipulator = KeypadManipulator()

print(manipulator.parse_input(typing_logs))
