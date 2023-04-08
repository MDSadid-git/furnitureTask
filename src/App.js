import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Routers/Routers";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={Router}></RouterProvider>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
