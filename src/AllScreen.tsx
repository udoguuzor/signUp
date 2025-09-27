import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Pages/AiChat";
import Documents from "./Pages/Document";
import Quiz from "./Pages/QuizApp";
import Setting from "./Pages/Setting";
import History from "./Pages/History";
import Logout from "./Pages/Logout";
import Upload from "./Pages/Upload";
import PageLayout from "./Layout/PageLayout";
// import DashboardHome from "./dashboard/dashboard"; // Assuming you have a default page
import Dashboard from "./dashboard/dashboard";

const AllScreen: React.FC = () => {
    return (
        // The outer <div> is not necessary, but it doesn't cause harm.
        // You can remove it if you like.
        <Routes>
            <Route path="/" element={<PageLayout />}>
                
                {/* ADDED: An index route for the default view at "/" */}
                <Route index element={<Dashboard />} />

                {/* CORRECTED: Paths are now relative (no leading "/") */}
                <Route path="/chat" element={<Chat />} />
                <Route path="/document" element={<Documents />}/>
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/history" element={<History />}/>
                <Route path="/logout" element={<Logout />} />

            </Route>
        </Routes>
    );
};

export default AllScreen;