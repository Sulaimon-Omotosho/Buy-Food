import React from 'react'
import { pizzas } from '../../../data'
import Link from 'next/link'
import Image from 'next/image'

const CategoryPage = () => {
  return (
    <section className=''>
      <div className='flex flex-wrap text-red-500'>
        {pizzas.map((item) => (
          <Link
            className='w-full h-[60vh] sm:w-1/2 lg:w-1/3 border-r-2 border-b-2 group p-4 border-red-500 flex flex-col justify-between even:bg-fuchsia-100 '
            href={`/product/${item.id}`}
            key={item.id}
          >
            {/* Image Container */}
            {item.img && (
              <div className='relative h-[80%]'>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className='object-contain'
                />
              </div>
            )}
            {/* Text Container */}
            <div className='flex items-center justify-between font-bold'>
              <h1 className='uppercase text-2xl p-2'>{item.title}</h1>
              <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
              <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md '>
                Add to cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryPage
