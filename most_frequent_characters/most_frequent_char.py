def most_frequent_char(s):
    """_summary_

    Args:
        s (_type_): _description_
        The string to find the most frequent character.
        Returns:
        _type_: _description_
        The most frequent character in the string.
        If there are multiple characters with the same highest frequency, return the first one encountered.

        Example:
        most_frequent_char("here") -> "e"
        most_frequent_char("hello") -> "l"
        most_frequent_char("world") -> "l"
    Complexity:
    n= len(s)
    Time: O(n)
    Space: O(n)

    Steps:
    1. Create an object/hashmap to store the count of characters.
    2. Iterate through the string and count the frequency of each character.
    3. Iterate through the object and find the character with the highest count.
    4. Return the character with the highest count.


    """
    pass  # todo
    count = {}

    for char in s:
        if not char in count:
            count[char] = 0
        count[char] += 1

    best = None
    for char in s:
        if (best is None or count[char] > count[best]):
            best = char

    return best


print(most_frequent_char("here"))  # "e"
print(most_frequent_char("hello"))  # "l"
print(most_frequent_char("world"))  # "l"
print(most_frequent_char("a"))  # "a"
print(most_frequent_char("aa"))  # "a"
print(most_frequent_char("aaa"))  # "a"
