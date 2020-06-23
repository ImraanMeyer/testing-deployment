# CapstoneL3_Full Stack CRUD MERN Stack Application

# Summary:
This is a Full Stack Mern Application that has been created using the following technologies:

 - MongoDB
 - React.JS
 - Express
 - Node.JS

This is a movies database application. Being an avid movie collector, I need to be able to keep track of movies I have purchased. With no system in place, I do find that movies are either borrow or lost and I cannot account for it.

The app uses Node and Express to server as the Server that will connect and route the Movies API.
MongoDB has a database called movies to where any movie added or updated will be stored in the database.
React.JS is the front end where the Insert Movie and Edit Movie Forms are used to add and update movies.
The Show Movie List Command is used to show the Movies that are in the Database at present.
There are options to update and edit a movie in line so that you can apply these updates from the front-end. 


# Express Configuration and Setup:(localhost:3001)

1. Create a folder in my instance is named e.g. Task15 and it resides in the My Documents folder of my laptop.

2. From the command line,navigate to the folder location using the cd/Task15 key or cd/documents/Task15. 
   In the location type in yarn init, this will initialize the yarn environment.

   In the instructions on screen add in the following information:
    - Name: Name of the Project e.g. CapstoneLevel3
    - Version: 1.0.0
    - Main: Specify Server.js as the main file to the application
    - Author: Input your Name and Surname
    - License: Type in MIT as our license model 

   Once you have entered all this information, your package.json file will be created in your directory.


3. Once yarn init has run, from the command line proceed to use yarn add to add the add-ins listed below:

   - Axios: Will be used to help capture and return data to and from the API
   - Body-Parser: Will be used to help return the JSON Data into an HTML format
   - Cors : Will be used to assist in returning data from the API
   - Express: Installing this will give us our Server 
   - Helmet: Used to secure our application
   - Morgan: Used to secure our application in DEV
   - Mongoose: MongoDB Component we will use to connect to our database named movies in the Cinema collection
   - Serve-Favicon: Used to serve the Favicon icon that is located in the Public folder and fuctions as middleware 
     in our app to perfrom the action

4. All these items will be added to your package.json file as dependencies.

5. We need to implement the use of Nodemon when starting up our server. 
   From the command line type in yarn globally add nodemon
   This will add nodemon as dependency to your server environment and will be listed in the package.json file.
   global will also be added as a dependency.

6. In your package.json file add in the following script line below your license line.

   "scripts": {
    "start": "nodemon app.js"
  },


7. This is added in to ensure that when you start up the server from the command line, nodemon will be used to mo

8. Save all these changes to the package.json file in your Task15 directory.

9. Navigate to the Task15 directory in your Windows Explorer environment.

10. Once in the Task15 folder, open Sublime Text.

11. Create a new file and save it as Server.js'.

12. Once saved as Server.js you need to know create the connection to your api and specify your add-ins that need
    to be used in the Express environment.

13. Server.js will also include our routes via the movies_router component to route to in the application, 
    Mongoose will have the connection defined to mongoDB.

14. Note along with this in your project folder structure you will require the following Additional Folders:

   - Controllers: This will contain the Movies.Controller.js file. 
     This allows us to create,edit and delete movies.

   - Models: This will contain the Schema named Movies_Model.js. The Schema defines what information will be  
     captured in the document of each item entered into the Database.

   - Movies_Database: This will contain the connection string to MongoDB in the index.js file in this location.

   - Routes - This will contain the routes for each action that needs to be carried out in our CRUD application.

   - Movies_Client - This contains our React Front End Application and all components that make up the Front End.
     This folder will be created when you create your React App. 


   Note: Ensure that in your Server.JS file that your port is defined as port 3001 or any other number 
   other than 3000. 3000 in this instance is used in my React App.


15. To start the Server environment navigate to the Server Directory in the Project.
    From the commandline interface type in yarn start.  
    Nodemon will monitor the load and connection to the server.

16. In an online instance of your database this will also connect to MongoDB.
    If your database is local ensure that you install MongoDB and configure the required settings to ensure it runs from any command line path.  To start the database locally in the CLI in Window 1 run Mongod, in the CLI Window 2 run Mongo minimise these 2 windows.

17. Note: Once you have successfully connected to the server and the database. 
    Test the API connection by performing a POST, GET and DELETE Action in Postman.
    In this way you testing if you can connect to the API and to the Database.
    Your basic CRUD Actions are also tested here as well. 


# React.js Configuration and Setup:(localhost:3000)

1. Go to your command prompt environment.
2. Navigate to cd\documents\Task21\Server.
3. Type in yarn create react-app movies-client
4. This will create the react app named client in your Express location
5. Once the react app is created, navigate to cd movies-client
6. Using yarn add, add in the following add-ins:

   - Axios: Will be used to help capture and return data to and from the API
   - Bootstrap: Will be used for HTML and CSS enhancements
   - Styled-Components: Will be used to style our components like the buttons and wrappers in our components
   - React-Table: Will be used to show us Data presently stored in the Database and will allow us to create, edit 
     and delete movies from the Front End.  
   - React-Router_DOM: Will see to the DOM Bindings for React Router

7. In your windows explorer environment navigate to the Task21/movies_client
   Open package.json in Sublime text.

8. Below the "private": true, line addin the following proxy line
   "proxy": "http://localhost:3001",
    
    With this line we are defining the proxy that the front end will connect to in order to fetch data when a search has been conducted.

9. Save and close the package.json file.

10. Inside in the src folder of your ReactApp create the following Folders:

 -Api: Will contain an Index.js file.
       In this file your routes to the API and what Axios will need to handle

 -App: Will contain your App.js file which you will move from src. to App.
       Rename this file to Index.js.
       In thisfile you defining your Routes  and Paths within the Front-End App and which pages to import.
       This is needed so you can show movies, Add a New Movie or Edit and Update Movies in the front end.

 -Components: Will contain 4 files which you will create.

    -Index.js: Is used to import your links,NavBar and Logo.

    -Links.js: Is used to define your links to the Movie Pages that allow you to create and view movies in your   
     app.

    -Logo.js: Will contain the custom logo that will populate to the Header of the Home Page.
     Ensure that logo.png is in the correct directory to import it into the app. 

    -NavBar.js: Contains the configuration of your Navigation Bar. 

    Note: In Components I have also included a table.css file.
    This is used to format the React Table to allow the table to be displayed correctly.

 -Pages: Will contain 4 files which you will create.

   -Index.js: Is used to point to the routes for each of your MoviesPages

    -MoviesList.js: Is used to define your Show Movies List Component of the app and will contain the React Table
     Ensure that your Props and field mappings are correct. This can be the tricky part of your front-end.

    -MoviesInsert.js:Is used to define the Movies Insert Form and helps you add a movies to the Database>
     Here ensure that your Props and fields are mapped correctly.

    -MoviesUpdate.js: Is used to define the Movies Update Form and helps you update a movie in the Database>
     Here ensure that your Props and fields are mapped correctly.


 Note:  The above files are crucial to the Front End and the interaction of the App with your Database.
        Do note the React Table is finnicky, ensure that your accessors and headers are all completed and not blank. This will generate an error.


 11. Once all folders and components have been created. From the Command Line navigate to
    cd\documents\Task21\Server\Movies_Client\.

 12. From this directory type in Yarn Start 

 13. Once the App is loaded  you will then see an image similar to the below:






 14. The remaining screenshots show you the following:


 #Add a Movie



 #Update a Movie 


 # Delete a Movie




