/**
 * S = {
 *  CardWrapper,
 *CardBody,
 * }
 */

 import * as S from "./card.style";

 import { TCard } from "./card.type";
 
 /**
  * Omit<TCard, "id">: loại bỏ thuộc tính id trong TCard
  *
  * {
  *  img: string;
  *  name: string;
  *  shortDesc: string;
  *  price: string;
  * }
  */
 export function Card(props: Omit<TCard, "id">) {
    return (
        <S.CardWrapper>
            <img
                style={{
                    width: 200,
                }}
                src={props.img}
            />

            <S.CardBody>
                <h3>{props.name}</h3>

                <p>{props.shortDesc}</p>

                <div>
                    <S.Button variant="success">Buy now</S.Button>
                    <S.Button variant="dark">{props.price}$</S.Button>
                </div>
            </S.CardBody>
        </S.CardWrapper>
    );
}
 