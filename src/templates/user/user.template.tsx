import { Suspense, useEffect } from "react";
import { Outlet, useActionData } from "react-router-dom";

import { Header } from "@/templates/components/header/header";

import { Footer } from "@/templates/components/footer";
import { Menu } from "src/templates/components/menu";
import { useAppDispatch } from "@/redux/hooks";
import { getProfile } from "@/services";
import { getProfileThunk, setUser } from "@/redux/auth/auth.slice";

//* Nên import header từ thư mục user qua admin được không ? Không vì header là con của thằng thư mục user cùng cấp với thư mục admin.

//* Nếu như hai component user và admin cùng muốn sử dụng chung header thì sao? thì tạo 1 folder component cùng cấp vs thư mục user và thư mục admin

export function UserTemplate() {
    const dispatch = useAppDispatch()

     // Sau khi vao trang web thi user se
    // goi api de kiem tra da login truoc do hay chua
    useEffect(()=>{
        dispatch(getProfileThunk())
        // .then((res)=>{
        //     //Lưu vào redux
        //     dispatch(setUser(res.data.content))
        // }).catch(console.log)
    },[])   
    return (
        <>
            <Header />
            <Menu />

            <main>
                <Suspense fallback="Loading...">
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </>
    );
}
