import Root from "./Layout/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Step1 from "./sections/Step1";
import Step2 from "./sections/Step2";
import Step3 from "./sections/Step3";
import Step4 from "./sections/step4";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="step4" element={<Step4 />} />
      </Route>
    )
  );
  return (
    <div className="h-screen w-full  flex justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
}
