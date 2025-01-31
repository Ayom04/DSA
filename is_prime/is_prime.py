"""
is_prime checks if a number is a prime number
take the number as an a parameter of the function
if the number is less than or equal to 1,returns false
iterate over from 2 to n, if n mod i is 0, return false
To optimize the code, we can iterate from 2 to the square root of n to give 0(sqrt(n))
return true
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
