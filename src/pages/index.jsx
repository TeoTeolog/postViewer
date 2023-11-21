import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import PostDetails from "./post-details";

// const DashBoard = lazy(() => import("./dashboard"));
// const PostDetails = lazy(() => import("./post-details"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:taskId" element={<PostDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
