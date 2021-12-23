import "./App.css";
import { Routes, Route, Link, Navigate  } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import MySite from "./pages/MySite/MySite";
import Cameras from "./pages/Cameras/Cameras";
import CamerasCreate from "./pages/CamerasCreate/CamerasCreate";
import Users from "./pages/Users/Users";
import UsersCreate from "./pages/UsersCreate/UsersCreate";
import Servers from "./pages/Servers/Servers";
import ServersCreate from "./pages/ServersCreate/ServersCreate";
import Index from "./pages/Index/Index";

// icons------------------
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import StorageIcon from "@mui/icons-material/Storage";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


function App() {
  const {logged} = useSelector(state => state.clientReducer);
  const {user:{rol}} = useSelector(state => state.userReducer);

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
              logged ?  
                <Layout>
                  <MySite headerName="Mi Sitio" icon={<HomeIcon color="primary" fontSize="large" />} />
                </Layout>  
              : <Navigate to="/" replace={true} />
            }
          />
          <Route
            path="/camaras"
            exact
            element={
              logged ?  
              <Layout>
                <Cameras headerName="Camaras" icon={<CameraAltIcon color="primary" fontSize="large" />} />
              </Layout>  
              : <Navigate to="/" replace={true} />
            }
          />
          <Route
            path="/camaras/crear"
            exact
            element={ 
              logged ? 
            <Layout>
              <CamerasCreate headerName="Crear camara" icon={<AddAPhotoIcon color="primary" fontSize="large" />} />
            </Layout>  
              : <Navigate to="/" replace={true} />

            }
          />
          <Route
            path="/usuarios"
            exact
            element={ 
              logged ? 
                <Layout>
                  <Users headerName="Usuarios" icon={<GroupIcon color="primary" fontSize="large" />} />
                </Layout>  
              : <Navigate to="/" replace={true} />

            }
          />

          <Route
            path="/usuarios/crear"
            exact
            element={ 
              logged ? 
                <Layout>
                  <UsersCreate headerName="Usuarios" icon={<GroupIcon color="primary" fontSize="large" />} />
                </Layout>  
              : <Navigate to="/" replace={true} />
            }
          />
        {/* ************************** RUTAS DE SUPER ADMIN ************************* */}
        <Route
            path="/super-usuario"
            exact
            element={
              logged && rol === "superUsuario"?  
                <Layout>
                  <h1>MODULO SUPER USUARIO</h1>
                </Layout>  
              : <Navigate to="/" replace={true} />
            }
          />
        <Route
            path="/servidores"
            exact
            element={
              logged && rol === "superUsuario"?  
                <Layout>
                  <Servers headerName="Servidores" icon={<StorageIcon color="primary" fontSize="large" />} />
                </Layout>  
              : <Navigate to="/" replace={true} />
            }
          />
        <Route
            path="/servidores/crear"
            exact
            element={
              logged && rol === "superUsuario"?  
              <Layout>
                  <ServersCreate headerName="Crear servidores" icon={<StorageIcon color="primary" fontSize="large" />} />
                </Layout>  
              : <Navigate to="/" replace={true} />
            }
          />
          
        </Routes>
      </div>
  );
}

export default App;
