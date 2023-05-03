import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faFacebookMessenger,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const SocialMenu = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <nav className="font-bold">
      <div className="px-5 h-[64px] sticky top-0 z-20 flex justify-between">
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
  );
};
