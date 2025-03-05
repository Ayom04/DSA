def factorial(n):
    """
    factorial calculates the factorial of a number
    take the number as a parameter of the function
    if the number is less than or equal to 1, return 1
    initialize the result to 1
    iterate from 2 to n+1
    multiply the result by the current number
    return the result
    time comeplexity: 0(n)
    space complexity: 0(1)
    """
    total = 1
    if n <= 1:
        return 1

    for i in range(2, n+1):
        total *= i
    return total


print(factorial(5))
print(factorial(6))
print(factorial(7))


def factorialRecursive(n):
    """_summary_

    Args:
        n (_type_): _description_

    Returns:
        _type_: _description_
        The factorial of n. If n is less than or equal to 1, it returns 1. 
        Otherwise, it returns the product of n and the factorial of (n-1).
    Complexity:
    Time: O(n)
    Space: O(n)

    Steps:
    1. Base case: if n is less than or equal to 1, return 1.
    2. Otherwise, return n times the factorial of (n-1).
    3. The function calls itself recursively until it reaches the base case.
    4. The function returns the product of n and the factorial of (n-1).
    5. The recursive calls are stored in the call stack until the base case is reached.
    6. The function returns the final result from the call stack.
    """

    if n <= 1:
        return 1

    return n * factorialRecursive(n-1)


print(factorial(5))
