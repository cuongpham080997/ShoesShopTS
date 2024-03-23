//@ts-ignore
import { H2 } from "@/components/h2";
//@ts-ignore
import { ListCard } from "@/components/list-card";
import { convertToCards } from "./helper";
import { __mock_data__ } from "./__mock-data__";
import { useEffect, useState } from "react";
//@ts-ignore
import { axiosWithoutAuth } from "@/services/axios.config";
//@ts-ignore
import { TCard } from "@/components/list-card/card/card.type";
//@ts-ignore
import { BASE_URL } from "@/constants";
//@ts-ignore
import { getProduct } from "@/services/product/product.service";
import { IIFE } from "../../../utils";

export function ProductFeature() {
    // const numbers = [1, 2, 3, 4, 5];
    const [cards, setCards] = useState<TCard[]>([]);

    // call api get all product

    // V.1: Tệ nhất
    // useEffect(() => {
    //     // 200
    //     axios
    //         .get(`https://shop.cyberlearn.com/api/Product`)
    //         .then((resp) => {
    //             const data = resp.data; // undefined

    //             // Cẩn thận thêm 1 chút:
    //             // data?.message: data !== null && data !== undefined && data.message
    //             if (data?.message === "Thành công!") {
    //                 const content = data.content;

    //                 setCards(convertToCards(content));
    //             } else {
    //                 console.log("Error ::: ", data);
    //             }
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }, []);

    // V.2:
    // useEffect(() => {
    //     // 200
    //     axios
    //         .get(`${BASE_URL}/Product`)
    //         .then((resp) => {
    //             const data = resp.data; // undefined

    //             // Cẩn thận thêm 1 chút:
    //             // data?.message: data !== null && data !== undefined && data.message
    //             if (data?.message === "Thành công!") {
    //                 const content = data.content;

    //                 setCards(convertToCards(content));
    //             } else {
    //                 console.log("Error ::: ", data);
    //             }
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }, []);

    // V.3:
    useEffect(() => {
        // 200
        // axiosWithoutAuth
        //     .get(`/Product`)
        //     .then((resp) => {
        //         const data = resp.data; // undefined

        //         // Cẩn thận thêm 1 chút:
        //         // data?.message: data !== null && data !== undefined && data.message
        //         if (data?.message === "Thành công!") {
        //             const content = data.content;

        //             setCards(convertToCards(content));
        //         } else {
        //             console.log("Error ::: ", data);
        //         }
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
        //! Tối ưu refactor  version 3:
        //* Cách 3: Dùng async + await + IIFE
        IIFE(async () => {
            try {
                const data = await getProduct();
                if (data?.message === "Thành công!") {
                    const content = data.content;

                    setCards(convertToCards(content));
                } else {
                    console.log("Error ::: ", data);
                }
            } catch (e) {
                console.log({ e });
            }
        });

        //* Cách 2: Dùng promise
        // getProduct()
        //     .then((data:any) => {
        //         if (data?.message === "Thành công!") {
        //             const content = data.content;

        //             setCards(convertToCards(content));
        //         } else {
        //             console.log("Error ::: ", data);
        //         }
        //     })
        //     .catch((e:any) => {
        //         console.log(e);
        //     });

        //*Cách 1:dùng call back function
        // getProduct((resp: any) => {
        //     const data = resp.data;

        //     if (data?.message === "Thành công!") {
        //         const content = data.content;

        //         setCards(convertToCards(content));
        //     } else {
        //         console.log("Error ::: ", data);
        //     }
        // });
    }, []);

    return (
        <>
            {/* {numbers.map((i) => (
                <button key={i}>{i}</button>
            ))}
            <RenderItem numbers={numbers} /> */}

            <H2 width={700}>Product Feature</H2>
            <ListCard cards={cards} />
        </>
    );
}

// function RenderItem({ numbers }: { numbers: number[] }) {
//     // Vừa render vừa xử lý logic rẻ nhánh
//     return (
//         <>
//             {numbers.map((i) => {
//                 return <Item i={i} key={i} />;
//             })}
//         </>
//     );
// }

// function Item({ i }: any) {
//     return <button key={i}>{i}</button>;
// }
