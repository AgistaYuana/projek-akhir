import logo from "./logo.svg";
import "./App.css";
// import React from "react";
// import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
// const App = (props) => <SignUpContainer />;

// class SignUpContainer extends React.Component {
//   render() {
//     return (
//       <div id="signUpContainer">
//         <SignUpHeader title="SomethingCo" />
//         <SignUpForm />
//       </div>
//     );
//   }
// }

// const SignUpHeader = (props) => (
//   <div id="signUpHeader">
//     <div id="signUpHeaderTitle">{props.title}</div>
//   </div>
// );

// const FormInput = (props) => (
//   <div className="signUpRow">
//     <input type={props.type} placeholder={props.placeholder} />
//   </div>
// );

// const FormCheckBox = (props) => (
//   <div className="signUpRow">
//     <input id={props.id} type="checkbox" />
//     <label htmlFor={props.id}>{props.label}</label>
//   </div>
// );

// const FormButton = (props) => (
//   <div className="signUpRow">
//     <button type="button">{props.title}</button>
//   </div>
// );

// const SignUpForm = (props) => (
//   <div id="signUpFormContainer">
//     <form id="signUpForm">
//       <FormInput type="text" placeholder="email" />
//       <FormInput type="password" placeholder="password" />
//       <FormInput type="password" placeholder="confirm" />
//       <FormCheckBox id="terms" label="I agree to the terms and conditions" />
//       <FormButton title="Sign Up" />
//     </form>
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("container"));

export default App;
