import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPage from "./componenet/EditPage";
import HomePage from "./componenet/HomePage";
import NotFound from "./componenet/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-todo" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;