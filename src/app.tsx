// ** Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.config.tsx";
// ** End - Router
import { GlobalStyle } from "./components/global-style/global-style.tsx";

// ** Redux
import { store } from "./redux/store.config.ts";
import { Provider } from "react-redux";
// ** End - Redux

import { styled } from "styled-components";
import { useEffect } from "react";
import { getProfile } from "./services/index.ts";
// ** Định nghĩa type cho styled-component
type TH1Props = {
    color: string;
};

const H1 = styled.h3<TH1Props>`
    font-size: 50px;
    /* color: green; */

    /* Nhận props */

    color: ${(props) => {
        console.log(props);
        return props.color;
    }};
`;

/**
 * Không được tạo component bên trong component
 */

export function App() {
    // return (
    //     <>
    //         <h1
    //             style={{
    //                 fontSize: 50,
    //                 color: "green",
    //             }}
    //         >
    //             Hello World
    //         </h1>

    //         <H1 color="red">Cyber Soft</H1>
    //         <H1 color="blue">Cyber Soft</H1>
    //     </>
    // );
    // return <RouterProvider router={router} />;

    // ctrl+shift+p: restart ts server


    return (
        <GlobalStyle>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
            {/* ReactNode */}
        </GlobalStyle>
    );
}

// process.env.NODE_MODULE
console.log(import.meta.env.VITE_BASE_URL);
// console.log(proccess.env.VITE_SOME_KEY);
