import React from "react"
import { BsFillPlayFill } from "react-icons/bs"
import { ReactComponent as Products } from "../products.svg"
import { ReactComponent as Services } from "../services.svg"

function Main() {
  var advantages = [
    { number: "100+", text: "успешно выполненных заказов" },
    { number: "50+", text: "положительных отзывов о нас" },
    { number: "24/7", text: "Работает техническая поддержка" },
    { number: "6+", text: "Месяцев успешной работы" },
  ]

  return (
    <div className="bg-gray-800 px-[85px] ">
      <div id="block1" className="flex flex-col justify-center items-center py-14 gap-y-14">
        <div id="information" className="flex flex-row gap-x-8">
          <div id="left" className="flex flex-col gap-y-4">
            <p className="font-semibold text-6xl leading-none text-[#ECE7E6] font-mont">
              Интернет <span className="text-[#F8DC4A]">магазин готовых разработок </span>
              для Minecraft проектов!
            </p>
            <p className="font-medium text-lg w-[34rem] text-[#A7A7A7] font-mont">
              Воплощайте свои мечты в реальность, вместе с нами!
              Быстро, качественно, недорого. Выберите два условия!
            </p>
            <button className="bg-[#F8DC4A] w-[25rem] h-[4rem] rounded-r-3xl 
            shadow-[0_0_25px_0_rgba(255,237,0,0.25),0_5px_0_0_rgba(255,237,0,0.25)] text-semibold text-lg">
              Просмотреть ассортимент
            </button>
          </div>
          <div id="right" className="">
            <div className="w-[400px] h-[200px] border-2 border-[#F8DC4A] bg-[#141414] flex justify-center items-center">
              <BsFillPlayFill size={45} fill="#F8DC4A" />
            </div>
          </div>
        </div>
        <div id="advantages" className="flex flex-row gap-x-4">
          {advantages?.map((advantage, index) => (
            <p key={index} className="text-2xl font-medium font-mont text-[#ECE7E6]"><span className="text-[#F8DC4A] text-3xl">{advantage?.number}</span> {advantage?.text}</p>
          ))}
        </div>
      </div>
      <div id="block2">
        <div className="text-3xl font-semibold font-mont text-[#ECE7E6]">
          Доступные категории
        </div>
        <div id="categories" className="flex flex-row justify-between gap-x-8 py-8">
          <div className="w-full h-[13rem] flex flex-row justify-between border-4 border-[#2B2B2B] rounded-2xl px-4">
            <div id="right" className="flex flex-col justify-around">
              <div className="">
                <p className="text-2xl font-semibold font-mont text-[#ECE7E6]">
                  Категория — Товары
                </p>
                <p className="font-medium text-md text-[#A7A7A7] font-mont">
                  Сборки и плагины с автоматической системой оплаты и выдачи
                </p>
              </div>
              <a className="text-md font-medium font-mont text-[#ECE7E6]" href="">
                перейти к категории товаров
              </a>
            </div>
            <div id="left" className="flex items-center">
              <Products />
            </div>
          </div>
          <div className="w-full h-[13rem] flex flex-row justify-between border-4 border-[#2B2B2B] rounded-2xl px-4">
            <div id="right" className="flex flex-col justify-around">
              <div className="">
                <p className="text-2xl font-semibold font-mont text-[#ECE7E6]">
                  Категория — Услуги
                </p>
                <p className="font-medium text-md text-[#A7A7A7] font-mont">
                  Дизайн, постройки на заказ с портфолио на каждую услугу
                </p>
              </div>
              <a className="text-md font-medium font-mont text-[#ECE7E6]" href="">
                перейти к услугам
              </a>
            </div>
            <div id="left" className="flex items-center">
              <Services />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;