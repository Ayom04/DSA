def intersection(a, b):
    """"
    Returns the intersection of two lists a and b.
    The intersection is a list of elements that are present in both lists.
    If there are no common elements, it returns an empty list.
    Example:
    intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]) returns [2, 6] 

    Args:
    a (list): First list of elements.
    b (list): Second list of elements.

    Returns:
    list: A list containing the common elements from both lists.

    If there are no common elements, returns an empty list.

    """
    res = []
    for item in a:
        if item in b:
            res.append(item)
    return res


print(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]))


def _intersection(a, b):
    set_a = set(a)
    return [item for item in b if item in set_a]
