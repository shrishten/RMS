

class Request:
    def __init__(self, id='',date=int, requestor=int, link='', quantity=int, purpose='', tf='', cost=int, status=int):
        self.date=date
        self.id=id
        self.requestor=requestor
        self.link=link
        self.quantity=quantity
        self.purpose=purpose
        self.tf=tf
        self.cost=cost
        self.status=status


requests=[]

r = Request(1, '1/1/2020','shrish', 'http://www.google.com',
                10, 'test','31/1/2021',100, 0)


print(r.id)

