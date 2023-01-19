# board showing co-ordinates used in calculation

board=[0, 1, 2, 3, 4, 5, 6, 7, 
       10, 11, 12, 13, 14, 15, 16, 17,
       20, 21, 22, 23, 24, 25, 26, 27, 
       30, 31, 32, 33, 34, 35, 36, 37, 
       40, 41, 42, 43, 44, 45, 46, 47, 
       50, 51, 52, 53, 54, 55, 56, 57, 
       60, 61, 62, 63, 64, 65, 66, 67, 
       70, 71, 72, 73, 74, 75, 76, 77]

start_position=eval(input("enter starting position "))

def possible_positions(position):
    num=[8,-8,12,-12,19,-19,21,-21]
    tem=[]  #array for holding all possible positions ie 8 of them
    for i in num:
        tem.append(position+i)
    return(list(i for i in tem if i in board))

print(possible_positions(0))

moves_required=0
output_dict={start_position:moves_required}



while (len(output_dict)<64):
    moves_required+=1
    searched_positions=list(output_dict.keys())
    for i in searched_positions:
        newly_reached_positions=possible_positions(i)
        for x in newly_reached_positions:
            if x not in list(output_dict.keys()):
                output_dict[x]=moves_required
                

# output_dict is your result, the rest is for sorting the dictionary

myKeys = list(output_dict.keys())
myKeys.sort()
sorted_dict = {i: output_dict[i] for i in myKeys}
c=['zero','one','two','three','four','five','six']
new_sorted_dict=[]

        

# print(sorted_dict)


# function for pretifying the dictionary into a neat list
def pretty(l):
    t=[]
    for i in range(0,63,8):
        t.append(l[i:i+8])
    for i in t:
        print(i)
    
    
pretty(list(sorted_dict.values()))



     
        



