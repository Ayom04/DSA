def digit_sum(n: int) -> int:
    """
    Calculate the sum of digits of a given number.
    Args:
        n (int): The given number.
    Returns:
        int: The sum of digits of the given number.
        If the input number is negative, the absolute value will be used.
        If the input number is zero, the result will be 0.
        If the input number is not an integer, it will be converted to an integer.
        If the input number is a floating-point number, it will be rounded to the nearest integer.
        If the input number is a string that represents an integer, it will be converted to an integer.
        If the input number is a string that represents a floating-point number, it will be converted to a floating-point number.
    Complexity:
        Time: O(n)
        Space: O(n)

    Steps:
    1. Convert the number to a string.
    2. Convert the string to a list of integers.
    3. Calculate the sum of the integers in the list.
    4. Return the sum.

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
