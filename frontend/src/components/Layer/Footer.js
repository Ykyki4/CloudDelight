import React from "react"
import { ReactComponent as Logo } from "../../logo.svg"

function Footer() {
  var blocks = [
    {
      id: "about", title: "О студии", context: [
        { name: "Пользовательское соглашение", href: "" },
        { name: "Политика конфиденциальности", href: "" },
        { name: "Портфолио", href: "" },
      ]
    },
    {
      id: "helpful", title: "Полезные статьи", context: [
        { name: "Бесплатные товары", href: "" },
        { name: "Промокоды", href: "" },
        { name: "Отзывы", href: "" },
      ]
    },
    {
      id: "contacts", title: "Контакты", context: [
        { name: "Почта — cloud.delight@yandex.ru", href: "" },
        { name: "VK — vk.com/x0v_gordeev0x", href: "https://vk.com/x0v_gordeev0x" },
        { name: "Discord — discord.gg/yXzyKpcx2m ", href: "https://discord.gg/yXzyKpcx2m" },
      ]
    }
  ]
  return (
    <footer className="h-[23.75em] px-[6em] py-[4em] bg-black flex flex-row">
      <div id="clouddelight" className="flex flex-col gap-y-4">
        <Logo />
        <p className="text-white text-xl font-medium leading-6 w-[17.125em] font-mont">
          2023 CloudDelight — Создание Minecraft серверов
        </p>
        <p className="text-gray-400 text-base leading-5 font-medium w-[25em] font-mont">
          CloudDelight не связан с Mojang, коммерческая деятельность кампании соответствует правилам Mojang
        </p>
      </div>
      {blocks?.map((block, index) => (
        <div id={block.id} key={index} className="flex flex-col gap-y-4">
          <p className="text-white text-3xl leading-9 font-medium font-mont">
            {block.title}
          </p>
          {block.context?.map((item, index) => (
            <a href={item.href} key={index} className="text-gray-400 text-base leading-5 font-medium font-mont">
              {item.name}
            </a>
          ))}
        </div>
      ))}
    </footer>
  );
}

export default Footer;