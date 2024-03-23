//@ts-ignore
import { ListCard } from "@/components/list-card";
//@ts-ignore
import { TCard } from "@/components/list-card/card/card.type";
//@ts-ignore
import { getProductById } from "@/services/product/product.service";
//@ts-ignore
import { IProductApi } from "@/services/product/product.type";
//@ts-ignore
import { IIFE } from "@/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Define trước khi biết thông tin các thuộc tính api trả về
// Cần thiết để có được giao diện như mong muốn
interface IProduct {
    id: number | string;
    relatedProduct: TCard[];
    name: string;
    sizes: (number | string)[];
    shortDesc: string;
    img: string;
}

// convert IProductApi -> IProduct

/**
 * 1. UI: trước xong hết
 *
 * 2. API: Thuộc tính trả về không như mong muốn
 * - convert tên thuộc tính về cho giống như mong muốn
 *
 *
 */

const convertProduct = (product: IProductApi): IProduct => {
    return {
        id: product.id,
        img: product.image,
        name: product.name,
        sizes: product.size,
        shortDesc: product.shortDescription,
        relatedProduct: product.relatedProducts.map((i) => {
            return {
                id: i.id,
                img: i.image,
                name: i.name,
                price: i.price,
                shortDesc: i.shortDescription,
            };
        }),
    };
};

export default function Detail() {
    const { productId } = useParams();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        if (productId) {
            IIFE(async () => {
                try {
                    const resp = await getProductById(productId);

                    setProduct(convertProduct(resp));
                } catch (e) {
                    console.log(e);
                }
            });
        }
    }, [productId]);

    if (!product) return null;

    return (
        <>
            Detail: {productId}
            <div>
                <img
                    style={{
                        width: 400,
                    }}
                    src={product.img}
                />
                {product.sizes.map((size, index) => {
                    return (
                        <button
                            className="text-green m-2 border p-4"
                            key={index}
                        >
                            {size}
                        </button>
                    );
                })}
            </div>
            <>
                <ListCard cards={product.relatedProduct} />
            </>
        </>
    );
}
