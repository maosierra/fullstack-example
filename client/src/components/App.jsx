
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Navbar from "./Navbar";
import TaskPage from "./TaskPage";
import Logout from "./Logout";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<TaskPage />} />
                <Route path="/task" element={<TaskPage />} />
            </Routes>
        </>
    );
}

export default App;