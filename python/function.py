# # sum fuction
# def sum(a, b):
#     return a+b
# x = int(input("Enter a number : "))
# y = int(input("Enter a number : "))
# print "Sum of ",x," & ",y," = ",sum(x,y)


# factorial

def factorial(n):
    fact =0
    if n==1:
        
    else:
        fact += n*factorial(n-1)
        
x = int(input("Enter a number : "))
factorial(x)