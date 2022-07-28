import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar.mjs";
import Textform from "./component/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />

      <div className="container">
        <Textform
          text="Word Counter "
          heading="Word Counter App"
        />
      </div>
      <div className="containers">
        {/* <Textform text="Enter your Text in the Box" heading="Enter the Heading"/> */}
      </div>
    </>
  );
}

export default App;
