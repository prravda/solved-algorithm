class MinStack:

    def __init__(self):
        self._elements: list[int] = []
        self._mins: list[int] = []

    def push(self, val: int) -> None:
        if len(self._elements) == 0:
            self._mins.append(val)
        else:
            if val <= self._mins[-1]:
                self._mins.append(val)

        self._elements.append(val)

    def pop(self) -> None:
        popped_val = self._elements.pop()
        if popped_val == self._mins[-1]:
            self._mins.pop()

    def top(self) -> int:
        return self._elements[-1]

    def getMin(self) -> int:
        return self._mins[-1]
