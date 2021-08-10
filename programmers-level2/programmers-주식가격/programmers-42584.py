import functools
def sumWithMemo(num):
    # variable to store accumulated value
    accm = []
    # auxilary function
    def aux(input):
        if num >= input:
            accm.append(input)
            aux(input + 1)
    # fire        
    aux(1)
    return functools.reduce(lambda a,b : a + b, accm)
    
print(sumWithMemo(12345))