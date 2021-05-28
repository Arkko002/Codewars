import collections


def comp(array1, array2):
    if array1 is None or array2 is None:
        return False

    for i in range(len(array1)):
        array1[i] **= 2

    return collections.Counter(array1) == collections.Counter(array2)
