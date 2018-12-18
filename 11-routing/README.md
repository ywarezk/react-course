## react-router

SPA application routing should be performed using the browser history object. 
Transition between pages should be fast without the need to re render the entire page. 
In this lesson we will learn how to perform routing with react and react-router library. 

### Lesson Plan

- Routing in SPA
- route conventions
- SEO concerns
- BrowserRouter
- Route
- Switch
- Link
- history
- params
- lazy loading

### Final EX.

- create a new react app using create-react-app
- install bootstrap and import the bootstrap css inside the **index.css**
- You should create the app using bootstrap classes
- The project files will be arranged according to features
- you will have 2 features: home, todo
- the home feature will contain homepage, aboutpage, error page
- the home feature will contains the routes: / , /about
- the error page will catch when no routes match.
- the todo feature will contain the following pages: todo list, todo details
- the todo list page is located at the url: /todo
- the todo list contains the following components: Search, TodoList, TodoForm
- the Search will contain a form with a text input that will cause the url to add a query param
- The todo list will send a get request on every change of the query param and will populate a list of todo items.
- The server accepts query for search: https://nztodo.herokuapp.com/api/task/?format=json&search=search-string
- the TodoForm will contain a form to create a new todo task and validation of the forms. 
- Use Formik library to create the form
- use Yup for validation of the form
- the form will send a post request containing title, description, group, when to the url: https://nztodo.herokuapp.com/api/task/ to create the new task and that task should appear on the list as well.
- the list is made from links in each item when clicking on the link will move you to the route: /todo/:pk
- the list will also contain a button to delete a task which will send a DELETE request to the url: https://nztodo.herokuapp.com/api/task/:id/
- make sure the change reflected on the list when an item is deleted.
- on the Todo details page we will have a component displaying the full details of the page as well as a form to update the todo item.
- when refreshing the app you should see the same result (in the todo list page you should see the same filtered result)
- the todo pages should be lazy loaded

