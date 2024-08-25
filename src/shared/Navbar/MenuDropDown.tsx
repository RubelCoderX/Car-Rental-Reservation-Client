import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avater from "./Avater";
import { Link } from "react-router-dom";

const MenuDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-8 rounded-full  transition ">
          <button
            className="cursor-pointer hover:bg-neutral-100"
            onClick={() => setModal(true)}
          >
            {" "}
          </button>
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu></AiOutlineMenu>
          <div className="hidden md:block">
            <Avater></Avater>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            <>
              <Link
                to="/dashboard"
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                DashBoard
              </Link>

              <div
                onClick={() => {}}
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
              >
                LogOut
              </div>
            </>

            <>
              <Link
                to="/login"
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Sign Up
              </Link>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropDown;
