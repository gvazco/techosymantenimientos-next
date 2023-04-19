import { useState } from "react";
import { ButtonLink } from "components/ButtonLink";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import { FaHouseUser } from "react-icons/fa";

export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Agrega el estado local para controlar si el menú mobile está abierto o cerrado
  const [selectedItem, setSelectedItem] = useState(-1); // Inicializar con un valor por defecto

  // Función de manejo de eventos para abrir/cerrar el menú mobile
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // console.log("MAIN MENU: ", items);
  return (
    <nav className="bg-white text-slate-800 font-bold">
      <div className="px-5 h-[64px] sticky top-0 z-20 flex justify-between">
        <div className="py-4 pl-5 flex">
          <Image src={Logo} height={60} width={100} alt="Logo" />
        </div>
        <div className="hidden md:block">
          <div className="flex flex-1 justify-end">
            {(items || []).map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item.label)}
                className={`hover:bg-slate-100 hover:text-amber-600 cursor-pointer relative group ${
                  selectedItem === item.label
                    ? "bg-slate-200 text-amber-600"
                    : ""
                }`}
              >
                <div>
                  <Link legacyBehavior href={item.destination}>
                    <a className="p-5 block">{item.label}</a>
                  </Link>
                </div>
                {/* {!!item.subMenuItems?.length && (
              <div className="group-hover:block hidden bg-slate-200 hover:bg-slate-100 hover:text-amber-600 text-right absolute right-0 top-full -mt-3">
                {item.subMenuItems.map((subMenuItem) => (
                  <Link
                    legacyBehavior
                    key={subMenuItem.id}
                    href={subMenuItem.destination}
                  >
                    <a className="block whitespace-nowrap p-5 hover:bg-slate-100 hover:text-amber-600">
                      {subMenuItem.label}
                    </a>
                  </Link>
                ))}
              </div>
            )} */}
              </div>
            ))}
            <div className="ml-3 my-auto">
              <ButtonLink
                destination={callToActionDestination}
                label={callToActionLabel}
              />
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            className=""
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen} // Usa el estado local para determinar si el menú mobile está abierto o cerrado
            onClick={handleMobileMenuToggle} // Asigna la función de manejo de eventos al evento onClick del botón
          >
            <span className="sr-only">Abrir menú</span>
            <FaHouseUser size={30} />
          </button>
        </div>
      </div>
      {/* Menu Mobile */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-slate-200`}
        id="mobile-menu"
      >
        <div className="flex-col text-center">
          {(items || []).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item.label)}
              className={`hover:bg-slate-100 hover:text-amber-600 cursor-pointer relative group ${
                selectedItem === item.label ? "bg-slate-200 text-amber-600" : ""
              }`}
            >
              <div>
                <Link legacyBehavior href={item.destination}>
                  <a className="p-3 block">{item.label}</a>
                </Link>
              </div>
              {/* {!!item.subMenuItems?.length && (
              <div className="group-hover:block hidden bg-slate-200 hover:bg-slate-100 hover:text-amber-600 text-right absolute right-0 top-full -mt-3">
                {item.subMenuItems.map((subMenuItem) => (
                  <Link
                    legacyBehavior
                    key={subMenuItem.id}
                    href={subMenuItem.destination}
                  >
                    <a className="block whitespace-nowrap p-5 hover:bg-slate-100 hover:text-amber-600">
                      {subMenuItem.label}
                    </a>
                  </Link>
                ))}
              </div>
            )} */}
            </div>
          ))}
          <div className="pb-4 my-auto">
            <ButtonLink
              destination={callToActionDestination}
              label={callToActionLabel}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
