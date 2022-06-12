import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import Test from "./pages/Test";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};
