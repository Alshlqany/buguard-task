import BurgerIcon from "../icons/BurgerIcon";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-18 p-5 lg:p-0">
      <h1 className="text-3xl font-[600]">Alshlqany</h1>
      <BurgerIcon />
      <div className="hidden md:flex">
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
