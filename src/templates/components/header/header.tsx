import { Link, NavLink } from "react-router-dom";
import S from "./header.module.css";

// ** Issue
// import { LogoIcon } from "../../../assets/icons/logo.icon";
// import { SearchIcon } from "../../../assets/icons/search.icon";
// ** Solution
//@ts-ignore
import { LogoIcon, SearchIcon } from "src/assets/icons";

import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/auth/auth.slice";
import { removeLocalStorage } from "@/utils";
import { ACCESS_TOKEN } from "@/constants";

export function Header() {
    //Lấy từ redux xuống để kiểm tra người dùng đã đăng nhập hay chưa
    const user = useAppSelector((state) => state.authReducer.user);
    const dispatch = useAppDispatch();
    const handlelogout = () => {
        dispatch(setUser(null));
        //Xoá localStorage
        removeLocalStorage(ACCESS_TOKEN)
        //Thực tế làm việc sẽ làm call api để đăng xuất
    };
    return (
        <header className={S.header}>
            <Link to={"/"}>
                <LogoIcon />
            </Link>

            <div className={S["header-nav"]}>
                <Link className={S["nav-link"]} to={"/search"}>
                    <SearchIcon />

                    <span>Search</span>
                </Link>

                <Link className={S["nav-link"]} to={"/"}>
                    <CiShoppingCart />
                    <span>(1)</span>
                </Link>

                {/* Nếu đăng nhập */}
                {user ? (
                    <>
                        <Link className={S["nav-link"]} to={"/profile"}>
                            Profile
                        </Link>
                        <button className={"text-white"} onClick={handlelogout}>
                            logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link className={S["nav-link"]} to={"/login"}>
                            Login
                        </Link>
                        <Link className={S["nav-link"]} to={"/register"}>
                            Register
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
