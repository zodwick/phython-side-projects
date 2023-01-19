// board showing co-ordinates used in calculation

const board=[0, 1, 2, 3, 4, 5, 6, 7, 
    10, 11, 12, 13, 14, 15, 16, 17,
    20, 21, 22, 23, 24, 25, 26, 27, 
    30, 31, 32, 33, 34, 35, 36, 37, 
    40, 41, 42, 43, 44, 45, 46, 47, 
    50, 51, 52, 53, 54, 55, 56, 57, 
    60, 61, 62, 63, 64, 65, 66, 67, 
    70, 71, 72, 73, 74, 75, 76, 77]



function possible_positions(position){
 const num=[8,-8,12,-12,19,-19,21,-21]
 tem=[]  
 for (let i=0;i<8;i+=1){
     tem.push(position+num[i])
 }
 // return(list(i for i in tem if i in board))
 return_list=[];
 for (let i=0;i<8;i+=1){
     if (board.includes(tem[i])) {
         return_list.push(tem[i])
     }
 }
 return return_list;
}
     

const start_position=2
let moves_required=0
let key_positions=[start_position]
let value_moves=[moves_required]


 while (key_positions.length<64){
    moves_required+=1
    searched_positions=key_positions
    for (let i=0;i<searched_positions.length;i+=1){
        newly_reached_positions=possible_positions(searched_positions[i])
        for(let x=0;x<newly_reached_positions.length;x+=1){
            if  (!key_positions.includes(newly_reached_positions[x])){
                key_positions.push(newly_reached_positions[x])
                value_moves.push(moves_required)
 }}}}
key_positions.sort()  
console.log(key_positions)
console.log(value_moves)
// # output_dict is your result, the rest is for sorting the dictionary

// myKeys = list(output_dict.keys())
// myKeys.sort()
// sorted_dict = {i: output_dict[i] for i in myKeys}
// # print(sorted_dict)


// # function for pretifying the dictionary into a neat list
// def pretty(l):
//     t=[]
//     for i in range(0,63,8):
//         t.append(l[i:i+8])
//     for i in t:
//         print(i)
 
 
// pretty(list(sorted_dict.values()))
     




// console.log("Welcome to Programiz!");