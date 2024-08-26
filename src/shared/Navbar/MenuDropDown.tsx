import { useCallback, useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const MenuDropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleMenu}
          className="p-4 md:py-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <RxAvatar />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute rounded-b-md shadow-md w-[40vw] md:w-[150px] bg-white overflow-hidden -right-20 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Dashboard
            </Link>
            <div
              onClick={() => {}}
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
            >
              Logout
            </div>
            <Link
              to="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropDown;
