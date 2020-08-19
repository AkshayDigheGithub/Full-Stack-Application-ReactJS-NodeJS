# PROJECT

Created complete login and signup sytem. using proxy server runninig front end backend on same port.
    
    Project directory :-
    Client : this folder is react folder
    Server: root level file are server files.
    
npm packages used:
  - jwt (JSONWEBTOKEN)
  - axios: 0.19.2,
  - bootstrap: 4.5.2,
  - formik: 2.1.5,
  - react: 16.13.1,
  - NodeJS
  - ExpressJS
  
Dev-packages
 - concurrently
 - nodemon
  
# Project Run Step

 1. Clone Project on your local machine.
 2. Change directory to project
 3. hit > $ npm Install command
 4. run > $ npm run dev (this will install client as well as server npm packages and will start development server)
 

# API LIST

  - Manager signup (POST)
    http://localhost:4000/api/v1/manager/signin
  - Manager login (POST)
    http://localhost:4000/api/v1/manager/login

    ### in employee all api every api Authoriation token added  
  - add employee  (POST, GET, PUT, DELETE)
    http://localhost:4000/api/v1/employee
  - get employee list
    http://localhost:4000/api/v1/employee
  - update employee 
    http://localhost:4000/api/v1/employee
  - delete employee 
    http://localhost:4000/api/v1/employee/:id
