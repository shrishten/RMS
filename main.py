from flask import request, jsonify
from config import app, db
from model import Request, Employee

##all requests
@app.route("/requests", methods=["GET"])
def get_requests():
    requests = Request.query.all()
    json_requests = list(map(lambda x:x.to_json(), requests))
    return jsonify({"requests": json_requests})

##all requests made by an employee
@app.route("/emp_requests/<string:id>", methods=["GET"])
def get_emp_requests(id):
    requests = Request.query.all()
    ans=[]
    for request in requests:
        if request.requestor==id:
            ans.append(request)
    json_requests = list(map(lambda x:x.to_json(), ans))
    return jsonify({"requests": json_requests})

##all approved requests of an employee
@app.route("/app_requests/<string:id>", methods=["GET"])
def get_app_requests(id):
    requests = Request.query.all()
    ans=[]
    for request in requests:
        if request.requestor==id and request.s_status==1 and request.m_status==1:
            ans.append(request)
    json_requests = list(map(lambda x:x.to_json(), ans))
    return jsonify({"requests": json_requests})

#all rejected requests of an employee
@app.route("/rej_requests/<string:id>", methods=["GET"])
def get_rej_requests(id):
    requests = Request.query.all()
    ans=[]
    for request in requests:
        if request.requestor==id and (request.s_status==-1 or request.m_status==-1):
            ans.append(request)
    json_requests = list(map(lambda x:x.to_json(), ans))
    return jsonify({"requests": json_requests})

#all requests approved only by the supervisor for a particular employee
@app.route("/sup_requests/<string:id>", methods=["GET"])
def get_sup_requests(id):
    requests = Request.query.all()
    ans=[]
    for request in requests:
        if request.requestor==id and (request.s_status==1 and request.m_status==0):
            ans.append(request)
    json_requests = list(map(lambda x:x.to_json(), ans))
    return jsonify({"requests": json_requests})
##all requests for supervisor
@app.route("/supa_requests/", methods=["GET"])
def get_supa_requests():
    requests = Request.query.all()
    ans=[]
    for request in requests:
        if request.s_status==0 and request.m_status==0:
            ans.append(request)
    json_requests = list(map(lambda x:x.to_json(), ans))
    return jsonify({"requests": json_requests})

##all requests for manager
@app.route("/mana_requests/", methods=["GET"])
def get_mana_requests():
    requests = Request.query.all()
    ans=[]
    for request in requests:
        if request.s_status==1 and request.m_status==0:
            ans.append(request)
    json_requests = list(map(lambda x:x.to_json(), ans))
    return jsonify({"requests": json_requests})

##all requests approved by both manager and supervisor
@app.route("/man_requests/<string:id>", methods=["GET"])
def get_man_requests(id):
    requests = Request.query.all()
    ans=[]
    for request in requests:
        if request.requestor==id and (request.s_status==1 and request.m_status==1):
            ans.append(request)
    json_requests = list(map(lambda x:x.to_json(), ans))
    return jsonify({"requests": json_requests})

##all employees
@app.route("/employees", methods=["GET"])
def get_employees():
    employees = Employee.query.all()
    json_employees = list(map(lambda x:x.to_json(), employees))
    return jsonify({"employees": json_employees})

#verify employee
@app.route("/ver_employees/<string:id>/<string:passw>", methods=["GET"])
def ver_employees(id, passw):
    employee = Employee.query.get(id)
    if employee.password == passw:
        return jsonify({"tier":employee.tier}), 201
    else: return jsonify({"tier":-1}), 404


##create employee
@app.route("/create_employee", methods=["POST"])
def create_employee():
    id=request.json.get("id")
    password=request.json.get("pass")
    tier=request.json.get("tier")
    if not id or not password or not tier:
        return (
            jsonify({"message":"Missing fields"})
        )
    new_employee=Employee(id=id, password=password, tier=tier)
    try:
        db.session.add(new_employee)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    return jsonify({"message": "User added!"})

#create request
@app.route("/create_request", methods=["POST"])
def create_request():
    date=request.json.get("date")
    requestor=request.json.get("requestor")
    link=request.json.get("link")
    quantity=request.json.get("quantity")
    purpose=request.json.get("purpose")
    time_frame=request.json.get("timeframe")
    cost=request.json.get("cost")
    s_status=0
    m_status=0

    if not date or not requestor or not link or not quantity or not purpose or not time_frame or not cost:
        return (
            jsonify({"message":"Missing fields"})
        )
    
    new_request=Request(date=date, requestor=requestor, link=link, quantity=quantity, purpose=purpose, time_frame=time_frame, cost=cost, s_status=s_status, m_status=m_status)
    try:
        db.session.add(new_request)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    return jsonify({"message": "Request Pushed"})

#supervisor approval
@app.route("/s_approve/<int:req_id>", methods=["GET"])
def s_approve(req_id):
    req=Request.query.get(req_id)

    if not req:
        return jsonify({"message":"req not found"}), 404
    
    req.s_status=1
    db.session.commit()

    return jsonify({"message":"updated"}), 200

@app.route("/s_reject/<int:req_id>", methods=["GET"])
def s_reject(req_id):
    req=Request.query.get(req_id)

    if not req:
        return jsonify({"message":"req not found"}), 404
    
    req.s_status=-1
    db.session.commit()

    return jsonify({"message":"updated"}), 200
##manager approval
@app.route("/m_approve/<int:req_id>", methods=["GET"])
def m_approve(req_id):
    req=Request.query.get(req_id)

    if not req:
        return jsonify({"message":"req not found"}), 404
    
    req.m_status=1
    db.session.commit()
    return jsonify({"message":"updated"}), 200

##manager reject
@app.route("/m_reject/<int:req_id>", methods=["GET"])
def m_reject(req_id):
    req=Request.query.get(req_id)

    if not req:
        return jsonify({"message":"req not found"}), 404
    
    req.m_status=-1
    db.session.commit()
    return jsonify({"message":"updated"}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)

