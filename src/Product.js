import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}){
    const [{ basket }, dispatch] = useStateValue();
    
    /* action 에 들어갈 아이템을 설정해주는 것 
        ADDTOBASKET 이 리듀서에 있는 바스켓에 내용이 들어감
    */
    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };

    return (
        <div className="product">

            <div className="product-info">
                <p >{title}</p>
                <p className="product-price">
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>

                </p>

                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <div key={i}>                            
                            <p>★</p>
                            </div>
                        ))}


                </div>

            </div>

            <img src={image} alt=""/>
            <button onClick={addToBasket}>장바구니에 담기</button>


        </div>
    );
}

export default Product;