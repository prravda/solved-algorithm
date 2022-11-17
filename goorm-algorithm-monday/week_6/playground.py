before_one_digit = 999
current_ten_digit = 999

num_str_each_case = ''

for num in [31, 16, 42, 19]:
    # first loop
    if before_one_digit == 999:
        before_one_digit = num % 10
        num_str_each_case = num_str_each_case + str(num)
        continue

    # after second loop
    current_ten_digit = num // 10

    if before_one_digit == current_ten_digit:
        num_str_each_case = num_str_each_case + str(num % 10)
    else:
        num_str_each_case = num_str_each_case + str(num)

    before_one_digit = num % 10

print(num_str_each_case)