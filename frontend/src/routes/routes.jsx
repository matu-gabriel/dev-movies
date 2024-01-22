import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import DefaultLayouts from "../layouts/DefaultLayouts";
import Details from "../containers/Details";

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default Router;
