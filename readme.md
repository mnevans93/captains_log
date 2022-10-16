# CAPTAIN'S LOG #
## REST Routes ##

 Route | Action |     URL    | HTTP Verb |  View  |     Mongoose method     |
 :---: | :----: | :--------: | :-------: | :----: | :---------------------: |
   1   | Index  | /logs      | GET       | Index  | Log.find()              |
   2   | Show   | /logs/:id  | GET       | Show   | Log.findByID()          |
   3   | New    | /logs/new  | GET       | New    | N/A                     |
   4   | Create | /logs      | POST      | N/A    | Log.create()            |
   5   | Edit   | /logs/:id/edit | GET   | Edit   | Log.findbyID()          |
   6   | Update | /logs/:id  | PUT       | N/A    | Log.findByIDAndUpdate() |
   7   | Delete | /logs/:id  | DELETE    | N/A    | Log.findByIDAndDelete() |