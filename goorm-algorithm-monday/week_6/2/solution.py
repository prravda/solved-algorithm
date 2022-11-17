# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean


length_of_crypt_text = int(input())
crypt_text = input()

decrypted_text = ''

ord_of_char_a = ord('a')
ord_of_char_z = ord('z')

char_code_between_a_and_z = ord_of_char_z - ord_of_char_a

for i in range(length_of_crypt_text - 1):
    if (i + 1) % 2 == 1:
        current_char = crypt_text[i]
        current_char_ascii = ord(current_char)

        pad = int(crypt_text[i + 1]) ** 2
        pad_in_progress = current_char_ascii + (pad % char_code_between_a_and_z)

        ascii_after_pad = pad_in_progress

        if pad_in_progress > ord_of_char_z:
            ascii_after_pad = pad_in_progress % ord_of_char_z + ord_of_char_a - 1
        if pad_in_progress < ord_of_char_a:
            ascii_after_pad = pad_in_progress + ord_of_char_a

        decrypted_text = decrypted_text + chr(ascii_after_pad)

print(decrypted_text)

