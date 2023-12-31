import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';



function Cart() {

  const context = useContext(myContext)
  const { mode } = context;

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  console.log(cartItems)

  
  // add to cart
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
    toast.success('Etkinlik silindi');
  }
  

 

  return (
    <Layout >
      <div className="h-screen bg-gray-100 pt-5 " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Katıldığım Etkinlikler</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
              {cartItems.map((item,index)=>{
                    const{title , date, time, imageUrl, category} = item;
                    return(
                    <div className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
                    <img src={imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                        <h2 className="text-sm  text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{date}  {time}</h2>
                        <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{category}</p>
                      </div> 
                      <button onClick = {()=> deleteCart(item)} className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            İptal Et
                     </button>
                   </div>
                  </div>
                  ) } )}
          </div>

          
            
        </div>
      </div>
    </Layout>
  )
}

export default Cart