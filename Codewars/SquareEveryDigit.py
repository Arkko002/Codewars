def square_digits(num):
    res_str = ""
    for digit in str(num):
        res_str += str(int(digit) ** 2)

    return int(res_str)