import { createBrowserRouter, Outlet } from "react-router-dom";

// ** code splitting

import React, { lazy, Suspense } from "react";
// React.lazy
// React.useState

// import Home from "../pages/home/home";
// import Detail from "../pages/detail/detail";
const Home = lazy(() => import("../pages/home/home"));
const Detail = lazy(() => import("../pages/detail/detail"));

import Carts from "../pages/carts/carts";
import Profile from "../pages/profile/profile";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import {Search} from "../pages/search/search";
import { UserTemplate } from "../templates/user/user.template";
import { AdminTemplate } from "../templates/admin/admin.template";

/**
 * Outlet: Giống với props.children
 * Outlet: Giúp thèn component cha render được component con
 *
 */

function Parent() {
    return (
        <>
            <Outlet />
        </>
    );
}

function Child1() {
    return <>Child1</>;
}

function Child2() {
    return <>Child2</>;
}

function Child3() {
    return <>Child3</>;
}

/**
 * react-router-dom: Khai báo path phải là đường dẫn relative
 *
 * - Đường dẫn absolute:
 *                      /test/a
 *                      /a
 *                      /b
 *                      /test/a/c
 * - Đường dẫn relative: không có dấu "/" phía trước đường dẫn.
 *                      test
 *                      a
 *                      b
 */
// ** Tương tự switch case.
export const router = createBrowserRouter([
    {
        path: "test", // "/test"
        element: <Parent />,
        children: [
            {
                path: "a", // ** "/test/a"
                /**
                 * <Parent>
                 *      <Child1 />
                 * </Parent>
                 *
                 */
                element: <Child1 />,
                children: [
                    {
                        path: "c", // ** "/test/a/c"

                        /**
                         * <Parent>
                         *      <Child1>
                         *             <Child3>
                         *      </Child1>
                         * </Parent>
                         */
                        element: <Child3 />,
                    },
                ],
            },
            {
                /**
                 * <Parent>
                 *      <Child2 />
                 * </Parent>
                 *
                 */
                path: "b", // ** "/test/b"
                element: <Child2 />,
            },
        ],
    },

    {
        element: <UserTemplate />,
        children: [
            {
                path: "",
                // Lúc sử dụng chưa tải xong, nên sẽ bị lỗi
                // khắc phục: Suspense
                element: <Home />,
            },
            {
                path: "detail",
                // sử dụng trước khi được download về
                element: <Detail />,
            },
            {
                path: "carts",
                element: <Carts />,
                /**
                 * <UserTemplate>
                 *  <Suspense>
                 *      <Carts />
                 *  </Suspense>
                 * </UserTemplate>
                 */
            },
            {
                path: "profile",
                element: <Profile />,
            },

            {
                path: "search",
                element: <Search />,
            },
        ],
    },

    {
        element: <AdminTemplate />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },

    {
        path: "*", // default
        element: <>Page not found.</>,
    },
]);
