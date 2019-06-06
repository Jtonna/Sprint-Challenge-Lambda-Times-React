1.  Prop Types are used to validate information before passing it around. If you needed to pass an array you could make an object and within it have

propNameHere: PropTypes.array.isRequired 

if we pass a string instead of an array it will throw an error letting us know and more easily debug things

2. The component live cycle is very simple, it just about how data gets passed around and changed in components.

before render, `componentWillMount` runs. After render `componentDidMount` gets executed immediately after initial rendering. `componentWillReceiveProps` runs when a component receives new props & `shouldComponentUpdate` runs before rendering and AFTER receiving new props or state. `componentWillUpdate` is considered before rendering, after receiving new props or state, `componentDidUpdate` runs after the components updates are pushed to the virtual DOM. Finally `componentWillUnmount` is executed right before removing the component from the virtual DOM.

 3. Higher order components in react are considered advanced react patterns. it is structured like this.

 function > component (that is an argument) > return: new component.

4. CSS/SASS Files, styled components and ReactStrap

css/sass is good for everyone and is very straight forward. styles components are for people who can break things up in their head very well and visualize things as they do them, piece by piece & ReactStrap or bootstrap 4 is for developers who need to quickly prototype an application with pre configured and styles things like buttons or general page styles. 
