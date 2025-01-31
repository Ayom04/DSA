def max_value(nums):
    """_summary_
    Finds the maximum value in a list of numbers.

    Args:
        nums (_type_):  A list of numbers.



    Returns:
        _type_: _description_
        The maximum value in the list. If the list is empty, it returns float('-inf').

    """
    minimum_value = float("-inf")
    for num in nums:
        if num > minimum_value:
            minimum_value = num
    return minimum_value


print(max_value([3, 5, 1, 7, 2]))  # 7
print(max_value([10, 20, 30]))  # 30
print(max_value([]))  # float('-inf')
