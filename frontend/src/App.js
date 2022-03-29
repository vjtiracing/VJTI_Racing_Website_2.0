import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import SponsorMain from "./pages/SponsorMain/SponsorMain";
import Competitions from "./pages/Competitions/Competitions"
import Team from "./pages/Team/Team"
import Merch from "./pages/Merch/Merch"
import Gallery from './pages/Gallery/Gallery';
import ContactUs from './pages/ContactUs/ContactUs';
import PageNotFound from './pages/PageNotFound/PageNotFound'

function App() {
  return (
    <BrowserRouter basename="/VJTI_Racing_Website_2.0">
			<div>
				<Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        </Route>
        <Route path="/sponsor" element={<SponsorMain />}>
        </Route>
        <Route path="/competitions" element={<Competitions />}>
        </Route>
        <Route path="/team" element={<Team />}>
        </Route>
        <Route path="/merch" element={<Merch />}>
        </Route>
        <Route path="/gallery" element={<Gallery />}>
        </Route>
        <Route path="/contact" element={<ContactUs />}>
        </Route>
        <Route path="*" element={<PageNotFound/>} />
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
