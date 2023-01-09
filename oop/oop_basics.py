# from ast import Assert


# class Item:

#     # def __init__(self) -> None:
#     #     pass
#     pay_rate=0.8 
#     # 
#     def __init__(self, name:str, price:float, number:int):
        
#         # all class methods need to recieve a self argument as it is passed
#         # by default in the call statement
        
        
#         assert price>=0,f"price not greater than zero  {price}"
#         assert number>=0
        
#         # assert statements are used to assert conditions upon receiving data
        
#         print("hello")
#         self.name = name
#         self.price = price
#         self.number = number



#     def cal_total_price(self):
#         print(self.price * self.number)


# item1 = Item("anand", -100, 45)

# item1.cal_total_price()


# item2 = Item('hello', 1234, 5)

# item2.cal_total_price()



n = 10
nb=len(bin(n))-2
for i in range(0,n+1):
    li=nb-(len(bin(i))-2)
    d=bin(i)
    print('a'*(li),d[2:],sep='')