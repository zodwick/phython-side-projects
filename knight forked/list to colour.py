squares=[0, 3, 2, 3, 2, 3, 4, 5,
3, 4, 1, 2, 3, 4, 3, 4,
2, 1, 4, 3, 2, 3, 4, 5,
3, 2, 3, 2, 3, 4, 3, 4,
2, 3, 2, 3, 4, 3, 4, 5,
3, 4, 3, 4, 3, 4, 5, 4,
4, 3, 4, 3, 4, 5, 4, 5,
5, 4, 5, 4, 5, 4, 5, 6]


c=['zero','one','two','three','four','five','six']
colour_list=[]

for i in squares:
    colour_list.append('sqaure '+c[i])
print(colour_list)


#pyhton code to predict ventricular abbreviation from an ecg data set