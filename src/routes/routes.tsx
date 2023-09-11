import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />} />
      {/* <Route path="widget-calendar" element={<CalendarPage />}>
        <Route index element={<WeekCalculator />} />
        <Route path="test" element={<TestFunction />} />
      </Route> */}
    </Route>
  )
);
