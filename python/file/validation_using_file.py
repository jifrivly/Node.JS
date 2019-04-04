f1 = open('login.txt','w')
f1.write("Ictak\n1234")

username = raw_input("Enter your username : ")
password = raw_input("Enter the password : ")

f1.close()

f1 = open('login.txt','r')
if username == f1.readline().rstrip("\n") and password == f1.readline().rstrip("\n"):
    print "Login Successfull"
else:
    print "username and Password not match"

f1.close() 