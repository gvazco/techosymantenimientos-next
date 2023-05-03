import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/icon_bco.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMailBulk,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faFacebookMessenger,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const MainFooter = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-slate-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex items-center justify-center lg:justify-around">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="flex items-center mx-auto hidden lg:block border-4 border-slate-400 rounded-lg"
            >
              <Image src={Logo} width={110} height={110} alt="Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 text-center md:text-left">
            <div >
              <h2 className="mb-6 text-sm font-semibold text-slate-900 uppercase dark:text-white">
                Recursos
              </h2>
              <ul className="text-slate-600 dark:text-slate-400">
                <li className="mb-4">
                  <Link href="/blog/all-posts" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contacto" className="hover:underline">
                    Contacto
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/portafolios/all-proyects"
                    className="hover:underline"
                  >
                    Portafolios
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/all-products" className="hover:underline">
                    Productos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-slate-900 uppercase dark:text-white">
                Encuentranos en:
              </h2>
              <ul className="text-slate-600 dark:text-slate-400">
                <li className="mb-4">
                  <FontAwesomeIcon
                    className="ml-2 align-middle"
                    icon={faLocationDot}
                  />
                  <span className="p-2 align-middle">Dirección fiscal:</span>
                  <br />
                  <span className="p-2 align-middle">
                    Ricardo Flores Magón #105
                  </span>
                  <br />
                  <span className="p-2 align-middle">
                    Col. Izcalli Chamapa,
                  </span>
                  <br />
                  <span className="p-2 align-middle">
                    C.P. 53689, Naucalpan,
                  </span>
                  <br />
                  <span className="p-2 align-middle">Estado de México.</span>
                </li>
                <li className="mb-4">
                  <FontAwesomeIcon
                    className="ml-2 align-middle"
                    icon={faMailBulk}
                  />
                  <span className="p-2 align-middle">
                    info.mevasa@gmail.com
                  </span>
                  <br></br>
                  <FontAwesomeIcon
                    className="ml-2 align-middle"
                    icon={faPhoneAlt}
                  />
                  <span className="p-2 align-middle">(55) 8280-2149</span>
                </li>
              </ul>
            </div>

            <div className="lg:text-right">
              <h2 className="mb-6 text-sm font-semibold text-slate-900 uppercase dark:text-white">
                Legales
              </h2>
              <ul className="text-slate-600 dark:text-slate-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Términos y Condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-200 sm:mx-auto dark:border-slate-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between justify-center">
          <span className="text-sm text-slate-500 text-center dark:text-slate-400">
            © 2023
            <Link href="/" className="hover:underline">
              &nbsp; Techos y Mantenimientos | Mevasa
            </Link>
            . Todos los derechos reservados.
          </span>
          <nav className="text-white font-bold">
            <div className="px-5 h-[64px] sticky top-0 z-20 flex justify-center sm:justify-between">
              <div className="">
                <div className="flex flex-1 justify-end">
                  {(items || []).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item.label)}
                      className={`hover:bg-slate-700 hover:text-slate-900 cursor-pointer relative group ${
                        selectedItem === item.label
                          ? "bg-slate-200 text-slate-900"
                          : ""
                      }`}
                    >
                      <div>
                        <a href={item.destination} className="py-4 px-2 block">
                          {item.label === "Facebook" && (
                            <FontAwesomeIcon
                              icon={faFacebookF}
                              className="p-2 align-middle"
                            />
                          )}
                          {item.label === "Messenger" && (
                            <FontAwesomeIcon
                              icon={faFacebookMessenger}
                              className="p-2 align-middle"
                            />
                          )}
                          {item.label === "Instagram" && (
                            <FontAwesomeIcon
                              icon={faInstagram}
                              className="p-2 align-middle"
                            />
                          )}
                          {item.label === "Youtube" && (
                            <FontAwesomeIcon
                              icon={faYoutube}
                              className="p-2 align-middle"
                            />
                          )}
                          {item.label === "WhatsApp" && (
                            <FontAwesomeIcon
                              icon={faWhatsapp}
                              className="p-2 align-middle"
                            />
                          )}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};
