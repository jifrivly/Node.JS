# format
# fileobject = open(file_name, [access_model])
# f = open("test.dat","W")

# access_model 
# r = read
# rb = read in binary
# r+ = Read then write
# rb+ = Read then Write in binary
# w = Write 
# w+ = Write then Read
# wb = Write in binary
# wb+ = write then read in binary
# a = like wrie
# a+
# ab
# ab+


# f.write('')

# fileobject.close()
# f.close()

# print f.read()



# writing and reading 
a = open('test.data', 'w')
a.write('How are you? hsfkjbcxdfhk\n')
a.close()
a = open('test.data', 'r')
print a.read()
a.close()


# Pickling 

import pickle

num = int(input("Enter the limit : "))
f1 = open('test.data', 'a')
for i in range(num):
    data = int(input("Enter the number : "))
    pickle.dump(data,f1)

f1.close()
f1 = open('test.data', 'r')
for i in range(1000):
    print pickle.load(f1)
f1.close()
