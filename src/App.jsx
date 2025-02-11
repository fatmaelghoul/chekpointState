import { Component } from "react";
import Profile from "./components/profile/Profile";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div id="App">
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show && <Profile />}
      </div>
    );
  }
}
// import { useState } from "react";
// import Test from "./components/test/Test";
// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Show</button>
//       {show && <Test />}
//     </div>
//   );
// }

// export default App;
