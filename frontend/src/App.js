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

function App() {
  return (
    <BrowserRouter>
			<div>
				<Routes>
        <Route path={process.env.PUBLIC_URL} element={<Home />}>
        <Route index element={<Home />} />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/sponsor`} element={<SponsorMain />}>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/competitions`} element={<Competitions />}>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/team`} element={<Team />}>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/merch`} element={<Merch />}>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/gallery`} element={<Gallery />}>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/contact`} element={<ContactUs />}>
        </Route>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
