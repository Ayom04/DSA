
def pair_product(numbers, target_product):
    """_summary_
    Finds the indices of two numbers in a list that multiply to a given product. 
    If no such pair exists, it returns None. 
    If there are multiple pairs that multiply to the target product, 
    it returns the first pair encountered. 
    The list may contain duplicate numbers.  
    The numbers in the list may be negative.  The target product may be negative.  
    The indices in the list are 0-based.  
    The list may be empty.  
    The target product may be zero


    Args:
        numbers (_type_): A list of numbers
        target_product (_type_): A number which represents the product

    Returns:
        _type_: The indices of the two numbers that multiply to the target product.

    Complexity:
    Time: O(n^2)
    Space: O(1)
    """
    for i in range(0, len(numbers)):
        for j in range(i+1, len(numbers)):
            if numbers[i] * numbers[j] == target_product:
                return (i, j)
    return None


# Test cases
print(pair_product([3, 2, 5, 4, 1], 6))  # -> (0, 1)
print(pair_product([3, 2, 5, 4, 1], 10))  # -> (1, 2))
print(pair_product([4, 7, 9, 2, 5, 1], 5))  # -> (4, 5))


def pair_product_dict(numbers, target_product):
    """_summary_
    Finds the indices of two numbers in a list that multiply to a given product.
    If no such pair exists, it returns None.
    If there are multiple pairs that multiply to the target product,
    it returns the first pair encountered.
    The list may contain duplicate numbers.
    The numbers in the list may be negative.  The target product may be negative.
    The indices in the list are 0-based.

    Args:
        numbers (_type_): A list of numbers
        target_product (_type_): A number which represents the product.

    Returns:
        _type_: The indices of the two numbers that multiply to the target product.
    Complexity:
    Time: O(n)
    Space: O(n)
    """
    previous_numbers = {}
    for i, number in enumerate(numbers):
        complement = target_product / number
        if complement in previous_numbers:
            return (previous_numbers[complement], i)
        previous_numbers[number] = i
    return None


# Test cases
print(pair_product_dict([3, 2, 5, 4, 1], 6))  # -> (0, 1)
print(pair_product_dict([3, 2, 5, 4, 1], 10))  # -> (1, 2)
print(pair_product_dict([4, 7, 9, 2, 5, 1], 5))  # -> (4, 5)
