import { Routes, Route, BrowserRouter } from "react-router-dom";
import ConfirmEmail from "./ConfirmEmail";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SetupWorkspace from "./SetupWorkspace";
import SetupChannel from "./SetupChannel";
import Workspaces from "./Workspaces";
import WorkspaceMain from "./WorkspaceMain";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ConfirmEmail" element={<ConfirmEmail />} />
        <Route path="/Workspaces" element={<Workspaces />} />
        <Route path="/SetupWorkspace" element={<SetupWorkspace />} />
        <Route path="/SetupChannel" element={<SetupChannel />} />
        <Route path="/WorkspaceMain" element={<WorkspaceMain />} />
        <Route path="/WorkspaceMain/:workspaceId" element={<WorkspaceMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
