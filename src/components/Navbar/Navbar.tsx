import React from 'react'
import { HomeIcon, HistoryIcon, OrangeIcon, SettingsIcon, LogOutIcon } from '@/components'

export const Navbar = () => {
  return (
    <nav className="flex flex-col h-screen gap-4 text-black bg-white border-r border-orange-400/40 hover:border-orange-400/80 w-72 p-2 text-slate-300">
          <div className='w-full flex items-center justify-center'><img src="https://cdn.discordapp.com/attachments/773364102071975976/1319410432141688862/logo.png?ex=6765dc38&is=67648ab8&hm=ca3d65c1df83abfd9f00f6c2c27908d306137e6dc295e8873945fb5be0bd9340&" alt="logo LocalOrder" className="w-28" /></div>
          <ul className="flex-grow my-4 border-t border-orange-400/20">
            <li className="my-2 rounded-lg p-2 mx-5 bg-transparent hover:border-orange-400 border border-white cursor-pointer flex gap-8 items-center uppercase"><HomeIcon color={`#FFA500`} className='w-8 h-8' />Home</li>
            <li className="my-2 rounded-lg p-2 mx-5 bg-transparent hover:border-orange-400 border border-white cursor-pointer flex gap-8 items-center uppercase"><HistoryIcon color={`#FFA500`} className='w-8 h-8' />Order History</li>
            <li className="my-2 rounded-lg p-2 mx-5 bg-transparent hover:border-orange-400 border border-white cursor-pointer flex gap-8 items-center uppercase"><OrangeIcon color={`#FFA500`} className='w-8 h-8' />Products</li>
            <li className="my-2 rounded-lg p-2 mx-5 bg-transparent hover:border-orange-400 border border-white cursor-pointer flex gap-8 items-center uppercase"><SettingsIcon color={`#FFA500`} className='w-8 h-8' />Settings</li>
          </ul>
          <ul className="my-4 border-t border-orange-400/20">
            <li className="my-2 rounded-lg p-2 mx-5 bg-transparent hover:border-orange-400 border border-white cursor-pointer flex gap-8 items-center uppercase"><LogOutIcon color={`#FFA500`} className='w-8 h-8' />LogOut</li>
          </ul>
    </nav>
  )
}
