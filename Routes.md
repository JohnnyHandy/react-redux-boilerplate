# Route System

## How the route system works

* Routes are organized into three categories
  * **Private routes**: only accessed by logged users, which make them precedent over other routes once user is logged in.
  *  **Not logged routes**: Only accessed by users not logged in, usually shows the login page. It precedes 
  * **Public Routes**: Accessed by both logged and not logged users

* Each category is composed by an array of objects, in which each object represents a route. Each object has three properties:
  * ```path```: The path which leads to the route (required)
  * ```template```: A layout template which provides a basic layout interface across most of (if not all) routes.
  * ```component```: A component designed specifically for that route. It is rendered "inside" the layout template. (required)
  * Example: 
    ```javascript
      const privateRoutes = [
        {
          path: '/home',
          template: CustomTemplate,
          component: HomeComponent
        },
        {
          path: '/profile',
          template: CustomTemplate,
          component: ProfileComponent
        }
      ]
      const notLoggedRoutes = [
        {
          path: '/login',
          template: NotLoggedTemplate,
          component: LoginComponent
        },
        {
          path: '/register',
          template: NotLoggedTemplate,
          component: RegisterComponent
        }
      ]
      const publicRoutes = [
        {
          path: '/index',
          template: PublicTemplate,
          component: IndexComponent
        }
      ]
    ```

* To create a route, it is necessary to provide a new object to the array of the desired category containing at least the ```path``` and the ```component``` properties.


