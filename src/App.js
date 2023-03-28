//importamos los hooks necesarios para el proyecto de react
import { BrowserRouter, Routes, Route } from "react-router-dom";
//solo falta aplicar diseño responsive con media queries y validar entradas
//importamos context
import Context from "./Context/Context";

// importamos componentes

//importamos los views
import HomePage from "./views/HomePage";
import SignIn from "./views/SignIn";
import Register from "./views/Register";
import Profile from "./views/Profile";
import JobsRequested from "./views/JobsRequested";
import PostJob from "./views/PostJob";
import Jobs from "./views/Jobs";
import WorkDetail from "./views/WorkDetail";
import NotFound from "./views/NotFound";

//importamos css de bootstrap y CSS.
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/Footer.css";
import "./assets/NavBarPublic.css";
import "./assets/Register.css";
import "./assets/SignIn.css";
import "./assets/NavBarPrivate.css";
import "./assets/Jobs.css";
import "./assets/PostJob.css";
import "./assets/JobsRequested.css";
import "./assets/Profile.css";
import "./assets/WorkDetail.css";
import "./assets/NotFound.css";


const { Provider } = Context;
function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Routes>
            {/* publica */}
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<SignIn />} />
            {/* privada */}
            <Route path="/Profile" element={<Profile />} />
            {/* <Route path="/Profile/:id" element={<Profile />} /> */}
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="WorkDetail/">
              <Route path=":id" element={<WorkDetail />} />
            </Route>
            {/* <Route path="/takeJob" element={<JobsRequested />} /> */}
            {/* <Route path="/JobsRequested/:id" element={<JobsRequested />} /> */}
            <Route path="/JobsRequested" element={<JobsRequested />} />
            <Route path="/PostJob" element={<PostJob />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
