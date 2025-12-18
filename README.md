INTRODUCTION TO REACT
React is a JavaScript library used to build user interfaces (UI). Instead of manually changing the web page using the DOM, React lets developers describe what the UI should look like based on data, and React handles all updates automatically.
State and UI
In React, the UI is based on state.When data changes, React automatically updates the UI to match the new state.

Declarative Approach
React uses a declarative style:
You describe the final result you want


React figures out how to update the page efficiently


And this makes React easier to understand and manage, especially when the UI changes often.
Virtual DOM and Reconciliation
React does not update the real browser DOM directly every time.
 Instead:
React creates a virtual DOM (a copy of the UI in memory)


When data changes, React compares the old and new virtual DOM


It updates only the parts that changed in the real DOM


This process is called tree reconciliation, and it makes React fast and efficient.
React Elements
React elements are JavaScript objects that describe what the UI should look like


They are created using React.createElement() or JSX


React elements are not HTML; they are virtual descriptions


JSX
JSX looks like HTML but is actually JavaScript.
 It gets converted into React.createElement() calls before running in the browser.
JSX makes React code easier to read and write.

Components
React apps are built using components.
Components are reusable pieces of UI


A component can be a function or a class


Components receive input called props


Components return React elements


Note: Components help organize and reuse UI code.
Props
Props are inputs passed to components.
 They are read-only and help make components reusable.
Example: a Button component receiving a label as a prop.
export default function Button(props){
return(
<button>{props.value}</button>
)}
Hooks and useState
Hooks allow function components to use features like state.
useState:
Creates a state variable


Returns a value and a function to update it


When state changes, React re-renders the UI automatically


This removes the need to manually update the DOM.
Events in React
React handles events like clicks using JavaScript functions.
 Example: onClick takes a function, not a string.
Event names use camelCase (e.g., onClick, onChange).

REACT HOOKS
React Hooks are special functions that let function components store data, manage state, and respond to changes in a React application. There are a number of react hooks as explained below.

1. useState Hook
We useState hook to create state variables in a React function component and this State allows us to access and update certain values in our components over time.
When we create a state variable, we provide it with a default value and this can be on any data type.

Note: The default value is what the component always starts with when a component first loads for example.

Const [email, setEmail] = useState(“ ”);

This means, when my component runs first, the field of the email will be empty due to the datatype i have provided to my const.

Note: The word “set” in the hook comes from the setter function returned by the useState and this helps to update the state value. For example, the setEmail will help us update the status of the email when the user inputs a new value.

2.useEffect Hook
We use the useEffect Hook to perform side effects(get data from outside your code) into a function component. For example fetching data from an API.

Note: useEffect accepts a callback function (called the 'effect' function), which will by default run every time the component re-renders.

3.useRef Hook
We use the useRef hook  to create a reference to a given element / component when the component mounts.when we want to directly interact with an element, such as to clear its value or focus it.

4.useCallback Hook
The useCallback hook  Prevents Callbacks from Being Recreated.Callback functions are names of functions that are "called back" within a parent component.
The most common usage is to have a parent component with a state variable, but you want to update that state from a child component.

5.useMemo Hook
useMemo is similar to useCallback and helps improve performance. However instead of being for callbacks, it is for storing the results of expensive operations.
Memoization means, if a calculation has been done before with a given input, there's no need to do it again, because we already have the stored result of that operation.

Note:useMemo returns a value from the computation, which is then stored in a variable.

6.useContext Hook
The useContext Hook prevent creating of multiple props.The useContext hook removes the unusual-looking render props pattern that was required in consuming React Context before.useContext gives us a simple function to access the data we provided on the value prop of the Context Provider in any child component.

7.useReducer Hook
useReducer is a hook used to manage complex state logic in React. It is more of the useState but it is used 

1.when state has many values
2.updates depend on previous state
3.many different actions can change the state

JavaScript HTML DOM Document
Document object, is the top-level object representing the whole web page in JavaScript.when accessing anything in the HTML page we start with the key word Document using methods like;

1.document.getElementById()
2.document.getElementsByTagName()
3.document.getElementsByClassName()

Note: These methods help us to change content, styles, and structure and the html element that is being targeted.

JavaScript HTML DOM Elements
JavaScript HTML DOM Elements are HTML tags that JavaScript can access and control using the DOM.When we want to change or read parts of a web page (html tags),we use JavaScript to find, read and change any Element we want. Using methods like;


document.getElementById("myId")
This only gets an element that has that id ef
<p id=”card”></p> 


document.getElementsByTagName("div")
This selects all the elements that have the tag name targeted and in this case.All the div’s in the html document will be selected
3. document.getElementsByClassName("intro") 
This selects all the elements that have the class name that has been targeted.
Note: it can be a p, div, section etc all will be selected if they own the same class name.

 4. document.querySelectorAll("p.intro")
This only selects the FIRST element that matches the tag, class, or selector you give it.



What is NPM & package.json ?

NPM

NPM is a tool that helps developers to access exteral labraries or tools such as ract if need in Js. NPM helps developers to install, share, manage and update JS packages, labaries, tools and frame works.

NPM consist of three main components

1.The Website: This is where the developers search for packages, read documentaions and check versions.

2.The CLI: This is a tool developers use in the terminal. It helps to install, delete and upgrade packages using commands such as npm install, npm run dev, npm update and npm unistall.

3.The NPM Registry: This works as the database where all packages are being kept and when the developer runs any command such as npm install, the npm conents with the Registry and pick a specif package a developer wants.

PACKAGE.JSON
Package.json is a configuratio file that stores information about the developers project. This file is automatically created when a developer sets up his/her environment.

It holds information such as;

1.Project Information
2.Dependencies
3.Dev dependencies
4.Script


What is Vite?
Vite is a build tool that helps in making the developers work easy and fast.Vite consist of tow major parts;

1.The dev server
This helps the developer to see/preview the work on the local environment/ browser and this is done by running the command npm run dev.

2.The build command
This run by the developer when he/she is ready to deloy the project.This command bundles up the files before sending them off. And this is done by running the command npm run build.



































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


