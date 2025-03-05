"""
is_prime checks if a number is a prime number
take the number as an a parameter of the function
if the number is less than or equal to 1,returns false
iterate over from 2 to n, if n mod i is 0, return false
To optimize the code, we can iterate from 2 to the square root of n to give 0(sqrt(n))
return true

Complexity:
Time: O(sqrt(n))
Space: O(1)

Steps:
1. Check if the number is less than or equal to 1. If it is, return False.
2. Iterate from 2 to the square root of the number.
3. If the number is divisible by any of the iterations, return False.
4. If the loop completes without returning False, return True.

"""
import math


def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, math.floor(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True


# test the function
print(is_prime(33))  # False
print(is_prime(34))  # False
print(is_prime(1))  # False
print(is_prime(2))  # True
print(is_prime(9))  # False
print(is_prime(4))  # False


def _is_prime(n):
    """
    A helper function to check if a number is prime

    Args:
        n (int): The number to check

    Returns:
        bool: True if the number is prime, False otherwise

    Complexity:
        Time: O(n)
        Space: O(1)
    """
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


print(_is_prime(9))  # False
print(_is_prime(10))  # False
print(_is_prime(11))  # True
print(_is_prime(12))  # False
print(_is_prime(13))  # True
print(_is_prime(14))  # False
