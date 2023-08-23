import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Projects";
import Moviepage from "./pages/Blog";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

export default function App() {
  // const titles = {
  //   '/': "Binary's Site",
  //   '/projects': "Binary's Projects",
  // }
  // const location = useLocation()
  // useEffect(
  //   () => (document.title = titles[location.pathname] ?? 'Hello World'),
  //   [location],
  // )

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Movies />} />
          <Route path="/blog" element={<Moviepage />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
