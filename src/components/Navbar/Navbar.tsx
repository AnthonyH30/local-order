import React from 'react'
import { HomeIcon, HistoryIcon, OrangeIcon, SettingsIcon, LogOutIcon } from '@/components'

export const Navbar = () => {
  return (
    <nav className="flex flex-col h-screen gap-4 text-black bg-white border-r border-orange-400/40 hover:border-orange-400/80 w-72 p-2 text-slate-300">
          <div className='w-full flex items-center justify-center'><img src="https://cdn.discordapp.com/attachments/773364102071975976/1319410432141688862/logo.png?ex=676fbf78&is=676e6df8&hm=da2167ecb04248d900c1a95fbc55ba740542a5767eca42680c44f57763fc737f&" alt="logo LocalOrder" className="w-28" /></div>
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
