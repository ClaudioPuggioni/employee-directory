// import logo from "./logo.svg";
import "./App.css";
import users from "./users.js";
import Card from "./components/Card.jsx";

// can switch language at the bottom to ReactJS or change filename extension to .jsx
function App() {
  // convention application names start Capitalized
  // let sayMorning = () => console.log("Good Morningu!");

  return (
    <div>
      <h1>Web Users of Acme Inc</h1>
      <div id="usersContainer">
        {users.map((ele) => (
          <Card userCard={ele} />
        ))}
      </div>
    </div>
  );
}

export default App;
