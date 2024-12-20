import React from 'react'
import { OrderList, SearchIcon } from '@/components'

export const HomeAside = () => {
  return (
    <aside className='flex-1 bg-zinc-100 p-10'>
        <div className='flex border border-zinc-400 py-3 px-5 bg-white rounded-lg gap-5 w-full md:w-[350px] mb-10'>
            <SearchIcon color='black' className='w-6 h-6' />
            <input type="text" placeholder='Search' className='outline-none text-lg'/>
        </div>
        <OrderList />
    </aside>
  )
}
