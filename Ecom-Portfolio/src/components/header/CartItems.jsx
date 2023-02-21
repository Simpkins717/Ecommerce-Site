import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function CartItems({ title, desc, id, price, cover, quantity }) {
  return (
    <>
      <div className='cardList' key={id}>
        <div className='cardContent'>
          <div className='img'></div>
          <div className='details'>
            <p>{title}</p>
            <p>Unit Price:{price}</p>
            <div className='price'>
              <div className='qty flex-center'>
                <button className='plus'>
                  <AiOutlinePlus />
                </button>

                <button className='num'>
                  {Math.floor(Math.random() * 10)}
                </button>
                <button className='minus'>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className='pricetitle'>{price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
