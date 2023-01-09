# board=[[0,1,2,3,4,5,6,7],
# [0,1,2,3,4,5,6,7],
# [0,1,2,3,4,5,6,7],
# [0,1,2,3,4,5,6,7],
# [0,1,2,3,4,5,6,7],
# [0,1,2,3,4,5,6,7],
# [0,1,2,3,4,5,6,7],
# [0,1,2,3,4,5,6,7]]

# print(len(board))


squares=[0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17,
        20, 21, 22, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 
        40, 41, 42, 43, 44, 45, 46, 47, 50, 51, 52, 53, 54, 55, 56, 57, 
        60, 61, 62, 63, 64, 65, 66, 67, 70, 71, 72, 73, 74, 75, 76, 77]



x=0

def newSquares(passing):
    num=[8,-8,12,-12,19,-19,21,-21]
    tem=[]
    for x in passing:
        for i in num:
            tem.append(i+x)
    return(list(i for i in tem if i <78 and i>=0))

count=0
moves={x:count}


while (len(moves)<):
    l=newSquares(moves.keys())
    count+=1
    for i in l:
        if moves.get(i) == None:
            moves[i]=count

dict1 = dict(sorted(moves.items()))

print(dict1)

movesRequired=list(dict1.values())

print(len(movesRequired))







