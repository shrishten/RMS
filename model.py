from config import db

class Request(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(10), unique=False, nullable=False)
    requestor = db.Column(db.String(100), unique=False, nullable=False)
    link = db.Column(db.String(100), unique=False, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    purpose = db.Column(db.String(500), unique=False, nullable=False)
    time_frame = db.Column(db.String(25), unique=False, nullable=False)
    cost = db.Column(db.Integer, unique=False, nullable=False)
    s_status = db.Column(db.Integer, unique=False, nullable=False)
    m_status = db.Column(db.Integer, unique=False, nullable=False)
    def to_json(self):
        return {
            "id": self.id,
            "date":self.date,
            "requestor":self.requestor,
            "link":self.link,
            "quantity":self.quantity,
            "purpose":self.purpose,
            "time_frame":self.time_frame,
            "cost":self.cost,
            "s_status":self.s_status,
            "m_status":self.m_status
        }

class Employee(db.Model):
    id = db.Column(db.String(100), primary_key=True)
    password = db.Column(db.String(100), unique=False, nullable=False)
    tier = db.Column(db.Integer, unique=False, nullable=False)
    def to_json(self):
        return{
            "id":self.id,
            "tier":self.tier
        }



