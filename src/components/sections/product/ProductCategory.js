import React, { useEffect } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductCategory.scss';

import Slider from 'react-slick';

import ProductCategoryItem from '../../UI/products/ProductCategoryItem';
import BucketsBox from '../../UI/products/BucketsBox';

import { getProducts, getAuthToken } from '../../../actions/product';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCategory() {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);

    useEffect(() => {
        async function check() {
            await dispatch(getAuthToken());
            // const result = await dispatch(getProducts());
            // if (result === 'fail') {
            //     await dispatch(getAuthToken());
            //     await dispatch(getProducts());
            // }
        }
        check();
    }, []);

    const settings_category = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
      };
return (
    <div className='menu-screen'>
        <div className='productCategorySection pt-4 pb-5'>
            
                { products ? (
                    <Slider {...settings_category}>
                        {products.groups.map((group, index) => (
                            <ProductCategoryItem imgSrc="images/product/buckets.png" key={group.id} categoryid={`${group.name}-ordering`} categoryName={group.name}/>
                        ))}
                    </Slider>
                ) : (
                    <label>Loading...</label>
                )}
                
            
        </div>

        <div className='productBucketBoxSectionTitle' id="Modificatori%20Paine-ordering">Modificatori Paine</div>
            { products ? (
                <div className='productBucketBoxSection row'>
                    {products.products.map((item, index) => { 
                        if (item.parentGroup === 'ec5573e9-6c91-433f-ac79-e5e1b9c60c87') {
                            return (<div className='col-xl-4 col-md-6 col-sm-12' key={item.id}><BucketsBox imgSrc="images/product/buckets.png" title={item.name} description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price={item.sizePrices[0].price.currentPrice} unit="RON" /></div>);
                        }
                    })}
                </div>
            ) : (
                <label>Loading...</label>
            )}
                
        <div className='productBucketBoxSectionTitle' id="Patiserie-ordering">Patiserie</div>
            { products ? (
                <div className='productBucketBoxSection row'>
                    {products.products.map((item, index) => { 
                        if (item.parentGroup === 'ab8686bb-a71d-4184-9baa-b9a1ec86b1dd') {
                            return (<div className='col-xl-4 col-md-6 col-sm-12' key={item.id}><BucketsBox imgSrc="images/product/buckets.png" title={item.name} description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price={item.sizePrices[0].price.currentPrice} unit="RON" /></div>);
                        }
                    })}
                </div>
            ) : (
                <label>Loading...</label>
            )}        
        
        <div className='productBucketBoxSectionTitle' id="Service%20fee-ordering">Service fee</div>
            { products ? (
                <div className='productBucketBoxSection row'>
                    {products.products.map((item, index) => { 
                        if (item.parentGroup === 'ef8d9120-1495-43fe-be2c-580a4a469605') {
                            return (<div className='col-xl-4 col-md-6 col-sm-12' key={item.id}><BucketsBox imgSrc="images/product/buckets.png" title={item.name} description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price={item.sizePrices[0].price.currentPrice} unit="RON" /></div>);
                        }
                    })}
                </div>
            ) : (
                <label>Loading...</label>
            )} 

        <div className='productBucketBoxSectionTitle' id="Modificatori%20Paine-ordering">Modificatori Paine</div>
            { products ? (
                <div className='productBucketBoxSection row'>
                    {products.products.map((item, index) => { 
                        if (item.parentGroup === 'a6081e1f-0b74-44b4-a63c-8fdeccc44b37') {
                            return (<div className='col-xl-4 col-md-6 col-sm-12' key={item.id}><BucketsBox imgSrc="images/product/buckets.png" title={item.name} description="Bucket contains 4 pieces of Kentucky chicken, 8x Hot Wings, 8x Strips, 4x..." price={item.sizePrices[0].price.currentPrice} unit="RON" /></div>);
                        }
                    })}
                </div>
            ) : (
                <label>Loading...</label>
            )} 

    </div>
    )
}