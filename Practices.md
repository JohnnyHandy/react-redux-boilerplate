# CODING PRACTICES AND CONCEPTS WHILE DEVELOPING WITH REACT

## Concepts

### Elements
* Building blocks of React applications, consists of anything between angle brackets.
```HTML
    <p> This is an Element! </p>
    <Landing />
```

### Component
* Piece of code that is commonly created due to necessity of use it in different parts of the application. Below there is an example of a functional component:
```javascript
    function Landing() {
        return <div> Landing page here! </div>
    } 
```
### Expressions
* Consists of Javascript expressions that can be placed inside an element through the use of curly braces
```javascript
    function Landing() {
        let devName = 'HorseDev'
        return (
            <div>
                Landing Page built by {devName}
            </div>)
    }
    
```

### Props
* Arguments originated from outside parameters that allow customizations of a Component
```jsx
    function Landing(props) {
        return (
            <div>
                Landing Page build by {props.name}
            </div>
        )
    }
```

## Good Practices

### Setting defaultProps

* Props should have default definitions to avoid undesired errors due to undefinitions or nullity of pros values
```jsx
    functions Contact(props) {
        return (
            <div>
            <span> Name: {props.name} </span>
            <span> Age: {props.age} </span>
            </div>
        )
    }
    Contat.defaultProps = {
        name: 'Name',
        number: 'Age'
    }
```

### Destructuring props
* Destructuration of props is used to have access to properties or elements by its definition
  * Destructuring properties of an object
  ```javascript
    let contact = { name: 'James' }
    let { name } = contact
    // console.log(name) => James
  ```
  * Destructuring elements of an array
  ```javascript
    let contacts = ['James', 'Roger']
    let [contactOne, contactTwo] = contacts;
    //console.log(contactOne, contactTwo) => James, Roger
  ```
* Usage when destructuring from received props
```javascript
        // Without destructuring
        functions Contact(props) {
        return (
            <div>
            <span> Name: {props.name} </span>
            <span> Age: {props.age} </span>
            </div>
        )
    }
        // With destructuring
            functions Contact({ name, age }) {
        return (
            <div>
            <span> Name: {name} </span>
            <span> Age: {age} </span>
            </div>
        )
    }

```
### Rest parameter syntax
* While destructuring, it is also possible to obtain an variable with all the properties that had not been destructured. The three dots (```...```) collect the reamining properties and assign them to the object ```rest```.

```javascript
    functions Contact({ name, age, ...rest }) {
        return (
            <div>
            <span> Name: {name} </span>
            <span> Age: {age} </span>
            </div>
        )
    }

```
### Spreading/Forwarding props and attributes

* It is possible to forward props and attributes received at the component, giving flexibility to its rendering elements
```jsx
    function Book({ name, ...rest }) {
        return (
            <Contact
                {...rest}
            >
                {name}
            </Contact>
        )
    }
```

###  Merging destructured props with other values

* The order in which attributes and destructuring props are inserted into the element matters to define if one will override another. Check these examples:
  * The attributes that come before the forwarded props will be substituted by attributes within the forwarded props that have the same name as them. At the next example, even the div receives an className attribute, it will be substituted by the className attribute that was passed to it  through the forwarded props. In other words, ```contactClass``` will substitute ```myDiv```
    ```html
        <Contact className='contactClass' />
    ```
    ```jsx
    function Contact(props) {
        // myDiv will be substituted by contactClass
        return (
            <div
            className='mydiv'
            {...props}
            >
                Hello
            </div>
            )
    } 
    ```
  * To have fixed attributes regardless of forwarded props with same name, all the desired fixed attributes should come after the forwarded props, like at the example below, where even after receiving a new ```className='contactClass'``` attribbute from props with a different value, it is overrided by the ```className='myDiv'``` prop that comes after it
      ```html
        <Contact className='contactClass' />
    ```
    ```jsx
    function Contact(props) {
        // myDiv will won't be substituted by contactClass
        return (
            <div
            {...props}
            className='mydiv'
            >
                Hello
            </div>
            )
    } 
    ```

### Conditional rendering with ternary operators and short-circuit evaluation

* In order to avoid using if/else statement for rendering, techniques like the use of ternary operators and short-circuit evaluation are good options:
  ```javascript
    if(condition) {
        return <Component />
    }
    //Can be substituted by:
   {
      condition && <Component />
   }
  ```
  ```javascript
    if(condition) {
      return <Component />
    } else {
      return <Contact />
    }

    // Can be substituted by:
    {
        condition ? <Component /> : <Contact />
    }
  ```
