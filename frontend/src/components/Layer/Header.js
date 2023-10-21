import React from 'react'
import { ReactComponent as VK } from "../../vk.svg"
import { ReactComponent as YouTube } from "../../youtube.svg"
import { ReactComponent as Search } from "../../search.svg"
import { ReactComponent as Cart } from "../../cart.svg"

function Header() {
  var menuItems = [
    { name: "Главная", href: '' },
    { name: 'Категории товаров', href: '' },
    { name: 'Услуги', href: '' },
    { name: 'Вики', href: '' },
    { name: 'Партнёры', href: '' },
  ]

  return (
    <div id="header" className="flex flex-row h-[90px] items-center bg-[#ECE7E6]">
      <div id="left" className="flex flex-row gap-x-10 px-16 items-center">
        {menuItems?.map((menuItem, index) => (
          <a key={index} className="font-mont font-medium text-xl" href={menuItem.href}>{menuItem?.name}</a>
        ))}
      </div>
      <div id="right" className="flex flex-row items-center px-20">
        <div id="social" className="flex flex-row items-center gap-x-2">
          <a href="https://vk.com/cloud_delight">
            <VK />
          </a>
          <a href="https://youtube.com/@cloud_delight"><YouTube /></a>
        </div>
        <div id="search" className="flex flex-row items-center border border-[#07070708] bg-[rgba(7,7,7,0.03)] mx-8 w-[220px] h-[32px]">
          <a className="px-2">
            <Search />
          </a>
          <input placeholder="Поиск" className="w-[180px] bg-transparent"></input>
        </div>
        <div id="cart" className="flex flex-row items-center justify-end">
          <Cart />
          <span className="rounded-full absolute h-[18px] w-[18px] bg-black text-white text-xs text-center font-semibold font-mont">3</span>
        </div>
      </div>
    </div>
  );
}

export default Header;