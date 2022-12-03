export const initialState = {
    basket: [],
    user: null
};


// 요금 총액 대한 셀렉터
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)
/* 지정된 콜백함수를 요청 
    0도 처음값 amount 초기값 이자 앞으로 축적될 값들이 저장될 인수
    item 현재의 아이템의 속성이 들어가는데 item.price 장바구니 아이템의 가격
    reduce 배열의 모든 값을 합산할 때 사용
    basket 배열에서 item의 price를 합산하기 위해 reduce 사용
    */
const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'REMOVE_FROM_BASKET':
            console.log(state);
            console.log(action);

            /* action 을 실행했을 대 아이디와 완전히 일치하는 값을 삭제 */
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
                ///원본 메소드를 변경하는 splice(제거를 시작할 인덱스, 몇개를 제거할것인지) 
                // action에서 발생한 데이터를 index에 넣어주고 새로 basket을 만들어준다?
            } else {
                console.warn(
                     '(id: ' +
                    action.id +
                    ')이 장바구니에 존재하지 않습니다 '
                )
            }
            
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
            ...state,
            user: action.user
            }        
        default:
            return state;
          
    }
};

export default reducer;