import React from "react";
// import data
import { footer } from "../data";

const Footer = () => {
  // destructure footer data
  const { logo, links, newsletter, legal, form } = footer;
  return (
    <footer>
      <div>
        {/* Logo */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* list 1 */}
        <div>
          <div className="text-2xl uppercase font-medium mb-6">Links</div>
          <ul className="flex flex-col gap-y-3 ">
            {links.map((item, index) => {
              // destructure the link
              const { href, name } = item;
              return (
                <li key={index}>
                  <a
                    className="font-medium hover:text-accent transition"
                    href={href}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* list 2 */}
        <div>
          <div className="text-2xl uppercase font-medium mb-6">Legal</div>
          <ul className="flex flex-col gap-y-3 ">
            {legal.map((item, index) => {
              // destructure the link
              const { href, name } = item;
              return (
                <li key={index}>
                  <a
                    className="font-medium hover:text-accent transition"
                    href={href}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* newsletter */}
        <div>
          <div>{newsletter.title}</div>
          <div>{newsletter.subtitle}</div>
          {/* form */}
          <form className="bg-blue-300 max-w-[394px] mb-[10px]:">
            <div className="h-[62px] p-[7px] flex border border-dark rounded-">
              <input type="text" placeholder={form.placeholder} />
              <button>{form.btnText}</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
