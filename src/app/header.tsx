import {AiOutlineShoppingCart}  from "react-icons/ai";

export default function Header({productCount, changeCount}) {
  return (
    <>
      <header className='absolute top-0 left-0 bg-sky-300 px-4 py-2'>
          <button className='relative p-3 bg-lime-300 rounded-full' onClick={changeCount}>
            <AiOutlineShoppingCart />
            <div className="absolute bottom-0 right-0 countStyle bg-red-900 rounded-full p-[3px] text-[10px] leading-[10px] text-white">{productCount}</div>
          </button>
        </header>
    </>
  )
}
