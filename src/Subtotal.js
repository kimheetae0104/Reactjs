import React from 'react';
import './Subtotal.css'
import CurrecnyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import {useNavigate} from "react-router-dom";
import {getBasketTotal} from "./reducer";

function Subtotal() {
    const navigate = useNavigate();

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrecnyFormat
                renderText={(value) => (
                    <>
                        <p>
                            총액 ( {basket?.length} items): <strong> {value} 원 </strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>체크박스입니다.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
            />


            <button onClick={e => navigate('/payment')}> 결제하러 가기 </button>

        </div>
    );
}

export default Subtotal;