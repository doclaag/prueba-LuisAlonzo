import { BrowserRouter, Route, Routes } from "react-router-dom";

import ListEmployees from "./pages/ListEmployees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployees />}/>
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
