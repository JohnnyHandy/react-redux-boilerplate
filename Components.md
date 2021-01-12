# Component Patterns

## Layout components

* Layout components usually makes static DOM element, which means that it hould not update frequently.

  ```javascript
    <LayoutComponent
        header={<HeaderComponent />}
        footer={<FooterComponent />}
    />
  ```

  ```jsx
    function LayoutComponent(props) {
       return(
        <div>
            <div>
                {props.header}
            </div>
            <div>
                {props.footer}
            </div>
        </div>
       ) 
    }

  ```

## Container components

* A container component is responsible for obtaining and fetching data in order to forward it to its sub-component, and also used to connect to general aspects of application, like a state.

```jsx
    const Container = (props) => {
        useEffect(() => {
            // using useEffect hook to fetch data once the component mounts
            fetchData()
        }, [])

        return <Component data={props.data} />
    }
```

## Higher-order component 

* A higher-order component is a component that takes a component and return another component. It is usually used to avoid the repetition of code logic used by containers while preparing data to pass to its subcomponents.

```jsx
    const Contact = ({ name }) => {
        return(
            <div> Name: {name} </div>
        )
    }
```

```jsx
    const HighOrderComponent = WrappedComponent => {
        const Component = props => {
            const [name, setName] = useState('')
            useEffect(() => {
                // Execute whatever logic
                setName('Roger')
            }, [])
            //Forward props and resulting data from logic to Wrapped Component
            return <WrappedComponent {...props}  name={name} />
        }
        return Component
    }
```
```jsx
    //Wrap component into our Higher Order Component
    const ConnectedContactComponent = HigherOrderComponent(Contact)

```

## Render Props Component

* It is possible to use render callback to render components

```jsx
    const Contact = ({ name }) => children('Roger')
// To use this component, it should be given a function as it's children
    <Contact>
        {name => <div> {name} </div>}
    </Contact>
    // The output would be
    <div> Roger </div>
```
