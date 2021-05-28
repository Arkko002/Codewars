def decodeMorse(morse_code, MORSE_CODE=None):
    # ToDo: Accept dots, dashes and spaces, return human-readable message
    morse_words = morse_code.split("   ")
    result = ""
    for word in morse_words:
        morse_letters = [MORSE_CODE[morse] for morse in filter(None, word.split(" "))]
        result += "".join(morse_letters) + " "

    return result.strip()
