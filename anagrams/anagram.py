def anagram(s1, s2):
    """_summary_

    Args:
        s1 (_type_): _description_
        s2 (_type_): _description_

    Returns: bool: True if s1 is an anagram of s2, False otherwise.

    Steps:
    1. create an object/hashmap to store the the number of characters in the strings.
    2. loop through the first string and add the number of characters to the object.
    3. loop through the second string and subtract the number of characters from the object.|| just compare the 2 objects.
    4. loop through the object and check if all the values are 0. If so, return True, otherwise return False.
    Complexity:
    n= len(s1), m= len(s2)
    Time: O(n+m)
    Space: O(n+m)
    """

    return char_count(s1) == char_count(s2)


def char_count(word):
    """_summary_

    Args:
        s1 (_type_): _description_
        s2 (_type_): _description_

    Returns: dict: A dictionary containing the count of characters in the strings.

    Steps:
    1. create an object/hashmap to store the the number of characters in the strings.
    2. loop through the first string and add the number of characters to the object.
    3. return the object.
    Complexity:
    n= len(s1), m= len(s2)
    Time: O(n+m)
    Space: O(n+m)
    """

    count = {}
    for char in word:
        if char not in count:
            count[char] = 0
        count[char] += 1
    return count


print(anagram("listen", "silent"))  # True
print(anagram("hello", "world"))  # False
print(anagram("abc", "cba"))  # True
print(anagram("abc", "def"))  # False
