def anagrams(word, words):
    word_letters = count_letters(word)
    result = []

    for w in words:
        w_letters = count_letters(w)
        if word_letters == w_letters:
            result.append(w)

    return result


def count_letters(word):
    word_letters = {}

    for letter in word:
        if letter not in word_letters:
            word_letters[letter] = 1
        else:
            word_letters[letter] += 1

    return word_letters
