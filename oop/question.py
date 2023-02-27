# here's some unrest in the minion ranks: minions with ID numbers like "1", "42", and other
# "good" numbers have been lording it over the poor minions who are stuck with more boring IDs. 
# To quell the unrest, Commander Lambda has tasked you with reassigning everyone new, random IDs 
# based on her Completely Foolproof Scheme.

# She's concatenated the prime numbers in a single long string: "2357111317192329...". 
# Now every minion must draw a number from a hat. That number is the starting index in that string of primes, 
# and the minion's new ID number will be the next five digits in the string. So if a minion draws "3", 
# their ID number will be "71113".

# Help the Commander assign these IDs by writing a function answer(n) which takes in the starting index n of Lambda's string of all primes, and returns the next five digits in the string. Commander Lambda has a lot of minions, so the value of n will always be between 0 and 10000


def isprime(n):
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5)+1, 2):
        if n % i == 0:
            return False
    return True


def primegenerator(n):
    #find nth prime
    c=0
    i=2
    c2=0
    l=[]
    while c < 5:
        if isprime(i):
            c2+=1
            if c2 >= n+1:
                l.append(i)
                c+=1
        i+=1
    return l
        
            
            
def id(n):
    l=primegenerator(n)
    s=''
    for i in l:
       for j in str(i):
           if len(s) < 5:
                s+=j
        
    print(s)
       
    
    


def timeit(func):
    import time
    start = time.time()
    func()
    end = time.time()
    print(func.__name__,end - start)
    
    
timeit(lambda :id(900000))