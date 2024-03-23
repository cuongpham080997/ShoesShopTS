import { ACCESS_TOKEN } from "@/constants";
import { getProfileThunk, setUser } from "@/redux/auth/auth.slice";
import { useAppDispatch } from "@/redux/hooks";
import { getProfile, signin } from "@/services";
import { saveLocalStorage } from "@/utils";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { handleSubmit, touched, errors, getFieldProps } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: (values) => {
            signin(values)
                .then((r) => {
                    // ** Sau khi đăng nhập thành công thì lưu vào localStorage
                    saveLocalStorage(ACCESS_TOKEN, r.data.content.accessToken);

                    // ** di chuyển về trang home
                    navigate("/");
                    // accessToken ???
                    // Duy trì trạng thái đặng nhập.
                    // Được lưu tại localStorage.
                    // accessToken: nhận dạng bản thân user đã đăng nhập
                    // Sau khi đăng nhập vào thì các bạn được cấp cho một cái thẻ (accessToken) để đi ra vào thuận tiện mà không cần phải nhập lại email + pw

                    // refreshToken

                    // 2.
                    dispatch(getProfileThunk())
                        // .then((res) => {
                        //     // Lưu vào redux
                        //     console.log(res);
                        //     dispatch(setUser(res.data.content))
                        // })
                        // .catch(console.log);
                })
                .catch((e) => {
                    alert(e.response.data.message);
                });

            // alert(JSON.stringify(values, null, 2));
        },

        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Nhập ít nhất là 8 ký tự")
                .required("Required"),

            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
        }),
    });

    return (
        <div className="my-4 flex justify-center">
            <form onSubmit={handleSubmit}>
                <input
                    className="border border-solid border-black"
                    placeholder="Email"
                    type="email"
                    // **
                    {...getFieldProps("email")}
                />
                {touched.email && errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                )}
                <br />
                <input
                    className="my-4 border border-solid border-black"
                    placeholder="Password"
                    type="password"
                    // **
                    {...getFieldProps("password")}
                />
                {touched.password && errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                )}
                <br />
                <button
                    type="submit"
                    className="rounded px-4 shadow-md shadow-slate-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
