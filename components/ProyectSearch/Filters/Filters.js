import { useEffect, useState } from "react";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";

export const Filters = ({ onSearch }) => {
  const [estructuraMetalica, setEstructuraMetalica] = useState(false);
  const [laminaEstructural, setLaminaEstructural] = useState(false);
  const [laminaTranslucida, setLaminaTranslucida] = useState(false);
  const [panelAislante, setPanelAislante] = useState(false);
  const [mantenimiento, setMantenimiento] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    onSearch({
      estructuraMetalica,
      laminaEstructural,
      laminaTranslucida,
      mantenimiento,
      panelAislante,
    });
  };

  const handleCheckboxChange = (checkboxName) => {
    setEstructuraMetalica(checkboxName === "estructuraMetalica");
    setLaminaEstructural(checkboxName === "laminaEstructural");
    setLaminaTranslucida(checkboxName === "laminaTranslucida");
    setPanelAislante(checkboxName === "panelAislante");
    setMantenimiento(checkboxName === "mantenimiento");
  };

  useEffect(() => {
    const {
      estructuraMetalica: estructuraMetalicaInitial,
      laminaEstructural: laminaEstructuralInitial,
      laminaTranslucida: laminaTranslucidaInitial,
      panelAislante: panelAislanteInitial,
      mantenimiento: mantenimientoInitial,
    } = queryString.parse(window.location.search);

    setEstructuraMetalica(estructuraMetalicaInitial === "true");
    setLaminaEstructural(laminaEstructuralInitial === "true");
    setLaminaTranslucida(laminaTranslucidaInitial === "true");
    setPanelAislante(panelAislanteInitial === "true");
    setMantenimiento(mantenimientoInitial === "true");
  }, []);

  return (
    <>
      {/* Filters Desktop */}
      <div className="md:block hidden">
        <div className="max-w-5xl lg:mx-auto mx-2 my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
          <div className="flex-1">
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={
                    !estructuraMetalica &&
                    !laminaEstructural &&
                    !laminaTranslucida &&
                    !panelAislante &&
                    !mantenimiento
                  }
                  onChange={() => handleCheckboxChange("ningunaSeleccion")}
                />
                <span className="pl-2">Ver todos</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={estructuraMetalica}
                  onChange={() => handleCheckboxChange("estructuraMetalica")}
                />
                <span className="pl-2">Estructura Metálica</span>
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaEstructural}
                  onChange={() => handleCheckboxChange("laminaEstructural")}
                />
                <span className="pl-2">Lamina estructural</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaTranslucida}
                  onChange={() => handleCheckboxChange("laminaTranslucida")}
                />
                <span className="pl-2">Lámina translúcida</span>
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={panelAislante}
                  onChange={() => handleCheckboxChange("panelAislante")}
                />
                <span className="pl-2">Panel aislante</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={mantenimiento}
                  onChange={() => handleCheckboxChange("mantenimiento")}
                />
                <span className="pl-2">Mantenimiento</span>
              </label>
            </div>
          </div>
          <div>
            <div className="btn" onClick={handleSearch}>
              Search
            </div>
          </div>
        </div>
      </div>
      {/* Filters Movil */}
      <div className="md:hidden block">
        <div className="relative">
          {/* Botón de activación del menú */}
          <div
            className="max-w-5xl md:mx-auto mx-2 my-5 bg-slate-200 p-3 rounded-md cursor-pointer md:hidden text-right"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="p-1 align-middle">Filtrar: </span>
            {!isOpen ? (
              <FontAwesomeIcon
                className="p-1 align-middle"
                icon={faSquareCaretDown}
              />
            ) : (
              <FontAwesomeIcon
                className="p-1 align-middle"
                icon={faSquareCaretUp}
              />
            )}
          </div>

          {/* Contenido del menú */}
          <div
            className={`md:absolute md:top-0 md:right-0 md:w-auto md:bg-white md:shadow-md md:rounded-md md:p-3 md:space-y-3 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="max-w-5xl md:mx-auto mx-2 my-5 flex gap-5 md:gap-0 border-solid border-slate-400 border-2 p-5 rounded-md flex-wrap flex-col">
              <div className="">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        !estructuraMetalica &&
                        !laminaEstructural &&
                        !laminaTranslucida &&
                        !panelAislante &&
                        !mantenimiento
                      }
                      onChange={() => handleCheckboxChange("ningunaSeleccion")}
                    />
                    <span className="pl-2">Ver todos</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={estructuraMetalica}
                      onChange={() =>
                        handleCheckboxChange("estructuraMetalica")
                      }
                    />
                    <span className="pl-2">Estructuras metálicas</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaEstructural}
                      onChange={() => handleCheckboxChange("laminaEstructural")}
                    />
                    <span className="pl-2">Lámina estructural</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaTranslucida}
                      onChange={() => handleCheckboxChange("laminaTranslucida")}
                    />
                    <span className="pl-2">Lámina translúcida</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={panelAislante}
                      onChange={() => handleCheckboxChange("panelAislante")}
                    />
                    <span className="pl-2">Panel aislante</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mantenimiento}
                      onChange={() => handleCheckboxChange("mantenimiento")}
                    />
                    <span className="pl-2">Mantenimiento</span>
                  </label>
                </div>
              </div>
              <div className="w-full lg:w-auto mt-3 lg:mt-0">
                <div className="flex justify-end">
                  <div className="btn" onClick={handleSearch}>
                    Search
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
