a = {
    'jkl': "Hiii",
    23: "twenty three"
}
print a
print a['jkl']

print a.keys()
print a.values()

# print as list
print a.items()

for i in a:
    print a[i]

print a.has_key(45)
print a.has_key(23)

print a.get(23)
print a.get(2)

del a[23]
print a