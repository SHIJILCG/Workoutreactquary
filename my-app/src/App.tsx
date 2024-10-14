import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HOmePage } from "./Componetns/HOmePage";
import { RQSuperHerosPage } from "./Componetns/RQSuperHerosPage";
import { SuperHeroPage } from "./Componetns/SuperHeroPage";
import { ShowSuperHeros } from "./Componetns/ShowSuperHeros";
import { RQsuperPageHero } from "./Componetns/RQsuperHeroPage";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-showsuperheroes">Show Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/rq-super-heroes/:heroId" element={<RQsuperPageHero />} />
        <Route path="/" element={<HOmePage />} />
        <Route path="/super-heroes" element={<SuperHeroPage />} />
        <Route path="/rq-super-heroes" element={<RQSuperHerosPage />} />
        <Route path="/rq-showsuperheroes" element={<ShowSuperHeros />} />
      </Routes>
    </div>
  );
};

export default App;
