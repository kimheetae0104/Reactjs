import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

function Checkout(){
    // useStateValue에 저장된 값을 불러오기 위해 지정
    // eslint-disable-next-line
    const [{basket , user}, dispatch] = useStateValue();

    return(
        <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad"
                 src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
                 alt=""/>


                 <div>
                     <h2 className="checkout_title">  
                        {user?.email}의 장바구니
                      </h2>
                     {basket.map(item => (
                         <CheckoutProduct
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                         /> // CheckoutProduct에서 각 명목을 가져오는 것 
                     ))}


                 </div>

        </div>

        <div className="checkout_right">
            <Subtotal/>
        </div>

    </div>
    );
}

export default Checkout;