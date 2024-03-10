// Tạo ra một instance axios
// BASE_URL

//@ts-ignore
import { BASE_URL } from "@/constants";
import axios from "axios";

// -- Call Api: public
export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,

    // Đợi phản hồi của một Api -> giới hạn 3p
    timeout: 180_000,
});

export const axiosWithAuth = axios.create({});
