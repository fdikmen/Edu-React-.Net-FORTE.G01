# Edu-React-.Net-FORTE.G01

# Click [Here](https://www.youtube.com/watch?v=HGjeynbarXk&list=PLs7UH425TlBoRLbez-DvAzbuQKXSLv9gU) for Videos

## 190623 Day01
- React, Component, JSX, VirtualDOM-Dif.Alg.
- NodeJS - VSCode <br/>
Extensions; 
    - ES7+ React/Redux/React-Native for snippets
    - ESLint for linting
    - Prettier - Code formatter for code formatter
- Ecmascript
- npx create-react-app [helloworld]  =>npm i create-react-app && create-react-app [helloworld]
- Folder Structure
- package.json
- Deleting unnecessary files
- Create first Component - rfc || rcc 
- Import-Export-Default-as
- npm - npx - yarn
    - npm install [packageName] || npm i [packageName]
    - npm uninstall [packageName]
    - npm run [...scripts...]
    - npm run start = npm start = react-scripts start
- tsx js jsx
- class - func comp
- jsx vs html => className - htmlFor - onClick|onSubmit|... (lowerCamelCase) - style={{}}
- <React.Fragment> ... </React.Fragment> => <> ... </>
- props
- React Developer Tools
- PropTypes
- Default Props
- Constructor
- Styles
- arrow function |  (params)=>{return ...codes...} || (params)=> ...codes...
- DOM & Events
- Event binding
- State
- class vs function component
- HOOKS : useState
- const - let - var

## 200623 Day02
- Summary
- PORT KILL => https://medium.com/@fdikmen/react-nativede-port-%C3%A7ak%C4%B1%C5%9Fmas%C4%B1-sorunu-ve-%C3%A7%C3%B6z%C3%BCm%C3%BC-10d2306acaec
- Phone Book With Class Component
    - npx create-react-app phonebook-classcomp
    - cd phonebook-classcomp && npm start
    - CTRL + C --> STOP PROJECT
- "use strict"; => <React.StrictMode> ... </React.StrictMode>
- array.Map => key, indexOf, array.filter, array.push, spreadOperator ..., object destructuring
- Phone Book With Functional Component
- Life Cycle Methods (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
    - constructor
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount
    - shouldComponentUpdate return true/false
- Hooks: Life Cycle Methods with Functional Component
    - Hooks:useEffect
    - callbackFunction
- Class vs Function Comp
- Fetch => https://jsonplaceholder.typicode.com/  => result.json()
- HTTP METHODS: GET, POST, PUT, DELETE  => POSTMAN for API test
- Axios
    - npm install axios
- PROMISE().then(...).catch(...).finally(...);

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
- setTimeout(function, milliseconds); || setInterval(function, milliseconds);
6. Redux
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
- FolderStructure

 Axios Instance


LiveShare: https://prod.liveshare.vsengsaas.visualstudio.com/join?C33C0D546B62CF7AE0C406E48775733EA5E0