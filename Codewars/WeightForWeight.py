import re


def order_weight(strng):
    if not strng:
        return ""

    temp_str = strng.strip()
    number_list = re.split(r"\s+", temp_str)

    weight_dict = {}
    for number in number_list:
        number_weight = sum(map(int, number))
        weight_dict[number] = number_weight

    number_list.sort(key=lambda x: (weight_dict[x], x))
    return " ".join(number_list)
