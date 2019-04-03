x = 60
# y = 70


def test():
    x = 40
    global y
    y = 20
    print "Inside function value of\n x : ", x, "\n y : ", y

test()
print "Outside function value of\n x : ", x, "\n y : ", y

# making local variable as global
