
def EuclideanGCD(x, y):
    """
    Calculate the Euclidean Greatest Common Divisor (GCD) of two numbers using recursion.
    this is a recursive function that calculates the GCD of two numbers using the Euclidean algorithm.
    """

    # find the absolute value of x and y
    x = abs(x)
    y = abs(y)

    # base case

    """
        check if the two values are zero
    """
    if x == 0 and y == 0:
        return None

    """
        check if the first values is not zero and the second value is zero
    """
    if x == 0 and not y == 0:
        return y

    """
        check if the second values is not zero and the first value is zero
    """

    if not x == 0 and y == 0:
        return x

    """
    Hers's the big deal now
    the algo is applied from the bigger to smaler number
    if a is greater 
    
    """
    if x > y:
        return EuclideanGCD(x - y, y)
    else:
        return EuclideanGCD(x, y - x)


# test the
print(EuclideanGCD(60, 48))  # 12
print(EuclideanGCD(98, 56))  # 14
print(EuclideanGCD(100, 100))  # 100
print(EuclideanGCD(18, 24))  # 6
print(EuclideanGCD(10, 20))  # 10
print(EuclideanGCD(0, 0))  # 20
