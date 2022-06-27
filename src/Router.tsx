import { Routes, Route } from "react-router-dom";

import { Subscribe } from "./pages/Subscribe";
import { Login } from "./pages/Login";
import { Event } from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}