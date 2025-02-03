def digit_sum(n: int) -> int:
    """
    Calculate the sum of digits of a given number.
    """
    n = abs(n)
    n_list = [int(digit) for digit in str(n)]

    return sum(n_list)


print(digit_sum(12345))  # 15
print(digit_sum(1234567890))  # 45
print(digit_sum(0))  # 0
print(digit_sum(1))  # 1
print(digit_sum(-12345))  # 15
print(digit_sum(-1234567890))  # 45
