import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <h1>Routing test</h1>
        <NavLink to="step1">Step 1</NavLink>
        <NavLink to="step2">Step 2</NavLink>
        <NavLink to="step3">Step 3</NavLink>
        <NavLink to="step4">Step 4</NavLink>
      </div>
    </>
  );
}

export default Navbar;
