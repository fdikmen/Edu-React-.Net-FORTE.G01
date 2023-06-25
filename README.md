# Edu-React-.Net-FORTE.G01

## Click [Here](https://www.youtube.com/watch?v=HGjeynbarXk&list=PLs7UH425TlBoRLbez-DvAzbuQKXSLv9gU) for Videos

## 190623 Day01
1. React, Component, JS, Virtual DOM-Dif.Alg.
2. Development Tools: NodeJS - VSCode <br/>
VSCode Extensions; 
    - ES7+ React/Redux/React-Native for snippets
    - ESLint for linting
    - Prettier - Code formatter for code formatter
3. Ecmascript
4. First Project:
```
npx create-react-app [helloworld]
```
[Old Version]=> npm i create-react-app && create-react-app [helloworld]
5. Folder Structure
- Deleting unnecessary files
6. package.json
7. Create first Component - rfc || rcc 
8. Import-Export-Default-as keywords
9. npm - npx - yarn
    - npm install [packageName] || npm i [packageName]
    - npm uninstall [packageName]
    - npm run [...scripts...]
    - npm run start = npm start = react-scripts start
10. File Types: tsx js jsx
11. Class vs Function component
12. jsx vs html => className - htmlFor - onClick|onSubmit|... (lowerCamelCase) - style={{}}
13. <React.Fragment> ... </React.Fragment> => <> ... </>
14. props
- PropTypes
- Default Props
15. React Developer Tools
16. Constructor
17. Style in React
18. ECMASCRIPT::: arrow function |  (params)=>{return ...codes...} || (params)=> ...codes...
19. DOM & Events
- Event binding
20. State
21. class vs function component
22. HOOKS : useState
23. ECMASCRIPT::: const - let - var

## 200623 Day02
1. Summary
- PORT KILL => https://medium.com/@fdikmen/react-nativede-port-%C3%A7ak%C4%B1%C5%9Fmas%C4%B1-sorunu-ve-%C3%A7%C3%B6z%C3%BCm%C3%BC-10d2306acaec
2. Phone Book With Class Component
    - npx create-react-app phonebook-classcomp
    - cd phonebook-classcomp && npm start
    - CTRL + C --> STOP PROJECT
3. "use strict"; => <React.StrictMode> ... </React.StrictMode>
4. ECMASCRIPT::: array.Map => key, indexOf, array.filter, array.push, spreadOperator ..., object destructuring
5. Phone Book With Functional Component
6. Life Cycle Methods (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
    - constructor
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount
    - shouldComponentUpdate return true/false
7. Hooks: Life Cycle Methods with Functional Component
    - Hooks:useEffect
    - callbackFunction
8. Class vs Function Comp
9. Fetch => https://jsonplaceholder.typicode.com/  => result.json()
- HTTP METHODS: GET, POST, PUT, DELETE  => POSTMAN for API test
10. Axios
    - npm install axios
11. ECMASCRIPT::: PROMISE().then(...).catch(...).finally(...);

## 210623 Day03
1. Summary
2. Axios
3. Loading
- clear(macos-linux) - cls(windows)
4. Routing
- npm i react-router-dom
- import & using BrowserRouter (index.js)
- Link (to->path)
- Link style | Navlink
- Routes-Route (path , element->components||JSX code)
    - No match -> * , index
- Multiple Route
- /:params Sending Params && useParams() || windows.location.pathname => TEXT.split("/").pop()
- Central Route File
- Nested Route => subpath /->X
- Any Text => /__staticText__/*
5. Advanced Components
- Higher Order Components (HOC)
- Resuable Higher Order Components
- Pure Component (like shouldComponentUpdate)
6. ECMASCRIPT::: setTimeout(function, milliseconds); || setInterval(function, milliseconds);
7. Redux
- npm i redux

## 220623 Day04
1. Summary
2. Redux
- Reducer(state,action) || ReducerSlice
- Store(reducer)
- subscribe
- ...getState()
- action object => {type,payload}
- dispatch(action)
3. [RTK - Redux Toolkit - Modern Redux](https://medium.com/@fdikmen/redux-toolkit-ile-modern-redux-kullanımı-5b59f8055da6)
- Redux DevTools
- npm i [...packagename01...] [...packagename02...] [...packagename03...]
- Thunk
4. [RTK Template](https://redux.js.org/tutorials/essentials/part-2-app-structure)
```
npx create-react-app [my-app] --template redux
```
5. Counter App with Redux Toolkit
- HigherOrderFunction => export const newMethod = (...) => (dispatch, getState) => {...};
6. [Folder Structure Sample for React Redux](https://medium.com/@fdikmen/a-redux-toolkit-project-structure-guide-58093baa88a5)
7. Context API => createContext - useContext - ...xxx...Provider value=yyyy
- User Authentication, Theme Switching, Language/Currency Switching, User Profile,...
- Redux + ContextAPI
8. useRef => Other Hooks:useState, useEffect, useRef, useContext
9. [mockApi.io](https://mockapi.io)
10. Isomorphic - SSR <= CSR
11. NextJS Preview

## 230623 Day05
1. Summary
2. npx create-react-app finalproject --template redux
3. Build
4. Movie App
- Folder Structure
- Axios Instance
- Redux
5. .NET N-layer Project
6. SOLID
