# Ask Cathy App

Solo MEHN Lab: stackOverflow project

Built an app using full CRUD

1. Create index.js
2. Test if you're able to connect to Express and send hello world to the browser
3. Install necessary dependencies
4. Create file system
5. create routes and test hello world first
6. build out the controllers and test that the routes still work
7. Work on views - install body parser
8. create a simple view for each hbs file. Use a header tag and check that it renders
9. Once views are scaffolded, we need to create data. Connect to mongoose in db folder and Define question model
10. install mongodb
11. Add test data - aka data seeding and run it in mongo
12. display test data on homepage
13. Create a new question - setup views and controllers
14. show the new question
15. Edit/Update a question
16. Install methodOverride
17. Add Delete feature
18. Update show views to include Edit, Home, Delete button

#File System

-Post Question
-title
-description

Directories
Routes - index.js, question.js
Controllers - question.js
Views - index.hbs and layout.hbs, question directory with new, show, and edit, hbs
Models - index.js
db - connection.js and seed.js

- Submit answers
  -solution

Note the relationship between the two. There can be many questions. A question can have many solutions. A solution cannot have a question.

Bronze plan: Create, Read, Update, and Delete a question.

Gold plan is to add answer model
