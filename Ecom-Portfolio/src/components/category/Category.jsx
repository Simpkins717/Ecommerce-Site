import './category.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';
import React from 'react';
import { Categories } from '../../assets/data/data.js';
import Slider from 'react-slick';

function Category() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className='category'>
        <div className='container'>
          <Slider {...settings}>
            {Categories.map((category) => {
              <div className='boxes' key={category.id}>
                <div className='box boxItems'>
                  <img src={category.cover} alt='img' />
                  <p>{category.title}</p>;
                </div>
              </div>;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export { Category };
