class Item:

    # def __init__(self) -> None:
    #     pass

    def __init__(self, name, price, number):
        print("hello")
        self.name = name
        self.price = price
        self.number = number

    def cal_total_price(self):
        print(self.price * self.number)


item1 = Item("anand", 100, 45)

item1.cal_total_price()


item2 = Item('hello', 1234, 5)

item2.cal_total_price()
