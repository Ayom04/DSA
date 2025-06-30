def pairs(elements):
    """_summary_

    Args:
        elements (_type_): _description_ an array of elements

    Returns:
        _type_: a list of pairs of elements
        The function takes an array of elements and returns a list of pairs of unique elements.
        Each pair is a list containing two elements from the input array.   
    Complexity:
    Time: O(n^2)
    Space: O(n^2)
    """
    res = []
    for i in range(0, len(elements)):
        for j in range(i+1, len(elements)):
            res.append([elements[i], elements[j]])
    return res


print(pairs(["a", "b", "c"]))
print(pairs([1, 2, 3, 4]))
print(pairs([1, 2, 3, 4, 5]))
print(pairs([]))
print(pairs(["a", "b", "c", "d", "e"]))
