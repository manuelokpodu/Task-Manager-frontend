import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
  // const [count, setCount] = useState(0);

  //Base URL FOR API requests from our backend

  const baseURL = "https://task-manager-backend-yk8z.onrender.com";

  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/tasks" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// Netlify, Vercel, Render etc are popular free cloud platforms for hosting  web applications.

//Netlify  is best for static sites and applications with a focus on simplicity and serverless fucntions

//Vercel is optimized for frontend development, especially those using React and Next.js, strong serverless and edge capabilities

//Render is a versatile platform suitable for full-stack applicatons, offering more flexibility in terms of supported frameworks, databases and backend services

// https://task-manager-backend-yk8z.onrender.com
