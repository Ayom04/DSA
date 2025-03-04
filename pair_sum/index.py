def pair_sum(numbers, target_sum):
    """_summary_

    Args:
        numbers (_type_): an array of integers representing the number of numbers
        target_sum (_type_):  the target sum of the numbers

    Returns:
        _type_:  The indices of the two numbers that add up to the target sum.
        If there are multiple pairs that add up to the target sum, return the first one encountered.
        If there are no pairs that add up to the target sum, return None.

    Complexity: 
    Time: O(n^2)
    Space: O(1)
    """
    for i in range(0, len(numbers)):
        for j in range(i+1, len(numbers)):
            if numbers[i] + numbers[j] == target_sum:
                return (i, j)


print(pair_sum([1, 2, 3, 4, 5], 8))  # (2, 4)
print(pair_sum([1, 2, 3, 4, 5], 9))  # None
print(pair_sum([1, 2, 3, 4, 5], 10))  # None
print(pair_sum([1, 2, 3, 4, 5], 0))  # (0, 4)


def pair_sum(numbers, target_sum):
    """_summary_

    Args:
        numbers (_type_): _description_
        target_sum (_type_): _description_

    Returns:
        _type_: _description_

    Complexity:
    Time: O(n)
    Space: O(n)
    """
    previous_num = {}
    for index, num in enumerate(numbers):
        complement = target_sum - num
        if complement in previous_num:
            return (previous_num[complement], index)
        previous_num[num] = index
