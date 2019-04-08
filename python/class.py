class person:
    # def __init__(self,name,age,cgpa):
    #     self.name = name
    #     self.age = age
    #     self.cgpa = cgpa

    def set(self):
        self.name = raw_input("Enter name : ")
        self.age = raw_input("Enter mark : ")
        self.cgpa = raw_input("Enter cgpa : ")

student1 = person()
student1.set()
student2 = person()
student2.set()

print student1.name,student1.age,student1.cgpa
print student2.name,student2.age,student2.cgpa