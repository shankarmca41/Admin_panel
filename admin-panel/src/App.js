import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/"/>
                 <Route path="/" index element={<Home />} />
                 <Route path="/login" element={<Login />} />
             <Route path="/user"/>
                 <Route index element={<List />} /> 
                 <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
             <Route path="/products"/>
                 <Route index element={<List />} /> 
                 <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
