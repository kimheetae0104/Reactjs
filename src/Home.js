import React from 'react';
import './Home.css';
import Product from './Product';


function Home(){
    return(
        
        <div className='home'>
            
            <div className='home-container'>
                
              <img className='home-image'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOs2dBLroElvel_PXAfnbGOUvxm5S7wEGwP7JN2qWhasKYzhkUbCQSR-6NBhLBjNxAGI&usqp=CAU"
                alt="" /> 
            
                
                <div className='home-row'>
                  <Product id="2323"
                            title="제품1"
                            price={4000}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvV3tlwaLSV4vp4hW-8XLP9fqcEUIo5Ww_A&usqp=CAU"   
                            rating={5}/>
                </div>
                <div className='home-row'>
                    <Product id="2312"
                            title="제품2"
                            price={3400}
                            image ="https://image.utoimage.com/preview/cp867505/2020/09/202009029156_500.jpg" 
                            rating={4}/>
                    <Product id="2333"
                            title="제품3"
                            price={4500}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjL200cc8SWtC_t4p6eMcJwwN7AQYnJqlTaV-WkuxrjxehAkazpvpeGZqrXOf3xqpPaA&usqp=CAU"
                            rating={4} />
                </div>
                <div className='home-row'>
                    <Product id="2354"
                            title="제품4"
                            price={3500}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAn0K4goJ5urjWI-bIrP2gW-ZLR2nSRQu8fQ&usqp=CAU"
                            rating={4} />
                    <Product id="0005"
                            title="제품5"
                            price={4500}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQhfLnFrYgjvETOWkTWrzvaQomRMJJrlKvQ&usqp=CAU" 
                            rating={4} />

                    </div>
                </div>

            </div>

   
    );
}

export default Home;