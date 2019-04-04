num1 = float(input("Enter a number : "))
num2 = float(input("Enter a number : "))


def add(x, y):
    return x+y


def sub(x, y):
    return x-y


def mul(x, y):
    return x*y


def div(x, y):
    if y == 0:
        return "0 division not accepted"
    else:
        return x/y


print("Choose an option : \n1 : Addition\n2 : Subtraction\n3 : Multiplication\n4 : Divition")
opr = raw_input(" Select your operation : ")

if opr == "1":
    print "Sum of ", num1, " & ", num2, " = ", add(num1, num2)
elif opr == "2":
    print "Differents of ", num1, " & ", num2, " = ", sub(num1, num2)
elif opr == "3":
    print num1, " * ", num2, " = ", mul(num1, num2)
elif opr == "4":
    print num1, " / ", num2, " = ", div(num1, num2)
else:
    print "Please select a valid choise..."
