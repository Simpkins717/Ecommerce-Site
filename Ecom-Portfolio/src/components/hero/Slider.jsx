import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import cupcake from './cupcake1.jpg';
import { slide } from '../../assets/data/data.js';

function Slider() {
  return (
    <>
      <div className='slider'>
        <div className='container grid'>
          {slide.map((item, i) => (
            <div className='box' key={i}>
              <div className='img'>
                <img className='square-img' src={cupcake} alt='img' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { Slider };
