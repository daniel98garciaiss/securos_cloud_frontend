import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MySite from "./pages/MySite/MySite";
import Cameras from "./pages/Cameras/Cameras";
import Users from "./pages/Users/Users";
import UsersCreate from "./pages/UsersCreate/UsersCreate";
import Index from "./pages/Index/Index";

// icons------------------
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import GroupIcon from "@mui/icons-material/Group";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HomeIcon from "@mui/icons-material/Home";
import StorageIcon from "@mui/icons-material/Storage";
import CamerasCreate from "./pages/CamerasCreate/CamerasCreate";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
                <Index/>
            }
          />
          <Route
            path="/panel"
            exact
            element={
              <Layout>
                <MySite headerName="Mi Sitio" icon={<HomeIcon color="primary" fontSize="large" />} />
              </Layout>  
            }
          />
          <Route
            path="/camaras"
            exact
            element={
              <Layout>
                <Cameras headerName="Camaras" icon={<CameraAltIcon color="primary" fontSize="large" />} />
              </Layout>  
            }
          />
          <Route
            path="/camaras/crear"
            exact
            element={ 
            <Layout>
              <CamerasCreate headerName="Crear camara" icon={<AddAPhotoIcon color="primary" fontSize="large" />} />
            </Layout>  
            }
          />
          <Route
            path="/usuarios"
            exact
            element={ 
            <Layout>
              <Users headerName="Usuarios" icon={<GroupIcon color="primary" fontSize="large" />} />
            </Layout>  
            }
          />

          <Route
            path="/usuarios/crear"
            exact
            element={ 
            <Layout>
              <UsersCreate headerName="Usuarios" icon={<GroupIcon color="primary" fontSize="large" />} />
            </Layout>  
            }
          />
        </Routes>
      </div>
  );
}

export default App;
