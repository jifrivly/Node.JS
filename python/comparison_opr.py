a = int(input("Enter the First No : "))
b = int(input("Enter the Second No : "))

if a>b:
    print a, "is grater than ", b
else:
    print b, "is grater than ", a


# gratest out of 3

a = int(input("Enter the First No : "))
b = int(input("Enter the Second No : "))
c = int(input("Enter the third No : "))

if a > b and a > c:
    print a, "is gratest"
elif b > a and b > c:
    print b, "is gratest"
else:
    print c, "is gratest"

if a > b:
    if a > c:
        print a, "is gratest"
    else:
        print c, "is gratest"
else:
    if b > c:
        print b, "is gratest"
    else:
        print c, "is gratest"
