import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
			<div>
				<Routes>
        <Route path={process.env.PUBLIC_URL} element={<Home />}>
        <Route index element={<Home />} />
        </Route>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
