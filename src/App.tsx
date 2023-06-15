import Loadable from "react-loadable";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";
import React, { Suspense } from "react";

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ "./pages/Cart"),
  loading: () => <h2 style={{ textAlign: "center" }}>Loading...</h2>,
});
const FullPizza = React.lazy(
  () => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza")
);
const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound"),
  loading: () => <h2 style={{ textAlign: "center" }}>Loading...</h2>,
});
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
