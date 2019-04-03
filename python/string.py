# index
a = "HELLO"
print a[0], a[-5]
print a[5], a[-1]
print a[:]
print a[::-1]
print a[1:]
print a[2::-1]
print a[:-1]
print a[-1:]


# palindrome checking
a = raw_input("Enter the string : ").upper()

def check_palindrom(b):
    if b == b[::-1]:
        print "String is palindrome "
    else:
        print "String is not palindrome "

check_palindrom(a)


# concatination

prefix = "JKLMNOPQ"
suffix = "ack"
for i in prefix:
    print i + suffix

greeting = "HELLO WORLD"
print greeting
new_greeting = "J" + greeting[1:]
print new_greeting
print greeting


a= "VIMAL JYOTHI COLLEGE"
print a
newA = a[0:13]+ "ENGINEERING" + a[12::]
print newA

function to

str = "this is string example.... wow!!!"
print str.count("i", 4,25)
print "wow occure in ", str.count("wow") 

# count number of vowels, constants, Question marks, words
str = raw_input("Enter the string :").upper()
no_vowels = 0
no_constants = 0
no_questionmark = str.count("?")
no_words = str.count(" ")+1

for i in "AEIOU":
    no_vowels += str.count(i)
for i in "BCDFGHJKLMNPQRSTVWXYZ":
    no_constants += str.count(i)

print "No. of vowels : ", no_vowels
print "No. of constants : ", no_constants
print "No. of Question marks : ", no_questionmark
print "No. of words : ", no_words

