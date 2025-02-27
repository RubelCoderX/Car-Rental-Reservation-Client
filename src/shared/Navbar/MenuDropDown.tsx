import { useCallback, useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Avatar from "./Avater";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { logOut, useCurrentToken } from "../../redux/features/Auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { JwtPayload } from "jsonwebtoken";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

const MenuDropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useAppSelector(useCurrentToken);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  let user;
  if (token) {
    user = verifyToken(token) as CustomJwtPayload;
  }

  const handleLoginClick = () => {
    setIsModalOpen(true); // Open modal on "Login" click
  };
  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };
  const openLoginModal = () => {
    setIsRegisterModalOpen(false); // Close Register modal
    setIsModalOpen(true); // Open Login modal
  };
  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleMenu}
          className="p-4 md:py-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute rounded-b-md shadow-md w-[40vw] md:w-[150px] bg-white overflow-hidden md:-right-20 -right-6 top-16 md:top-14 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            {user ? (
              <>
                <Link
                  to={
                    user.role === "admin"
                      ? "/dashboard/admin-profile-view"
                      : "/dashboard/profile-view"
                  }
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
                <div
                  onClick={handleLogOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={handleLoginClick}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </div>
                <div
                  onClick={handleRegisterClick}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </div>
              </>
            )}
            <Link
              to="/about-us"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              About Us
            </Link>
            <Link
              to="contact-us"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <RegisterModal
        isModalOpen={isRegisterModalOpen}
        setIsModalOpen={setIsRegisterModalOpen}
        openLoginModal={openLoginModal}
      />
    </div>
  );
};

export default MenuDropDown;
