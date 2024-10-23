# 1)Download locally
## 2)Run python3 main.py inside the RMS folder
### 3)cd into rms folder and run 'npm install vite@latest'
#### 4)run 'npm run dev'

## Tier 1 is normal employee
## Tier 2 is a supervisor and
## Tier 3 is a manager



## anybody can make a request, employee can fetch status of their particular requests and filter based on different factors
## supervisors can reject a request or forward it to a manager
## a manager can approve or reject a request

## Each request has an id(primary key), requestor id, cost, quantity, link, timeframe, supervisor approval and manager approval attributes attributes
## Each user has a username, a password and an associated Tier

## backend built on Python Flask and frontend built with react, using SQLAlchemy to store tables and to manage database
