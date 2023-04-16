import { useEffect, useState } from "react";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";

export const Filters = ({ onSearch }) => {
  const [laminaLisa, setLaminaLisa] = useState(false);
  const [laminaAcanalada, setLaminaAcanalada] = useState(false);
  const [laminaOndulada, setLaminaOndulada] = useState(false);
  const [laminaTranslucida, setLaminaTranslucida] = useState(false);
  const [panelAislante, setPanelAislante] = useState(false);
  const [accesorios, setAccesorios] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    onSearch({
      laminaLisa,
      laminaAcanalada,
      laminaOndulada,
      laminaTranslucida,
      panelAislante,
      accesorios,
    });
  };

  useEffect(() => {
    const {
      laminaLisa: laminaLisaInitial,
      laminaAcanalada: laminaAcanaladaInitial,
      laminaOndulada: laminaOnduladaInitial,
      laminaTranslucida: laminaTranslucidaInitial,
      panelAislante: panelAislanteInitial,
      accesorios: accesoriosInitial,
    } = queryString.parse(window.location.searchProduct);

    setLaminaLisa(laminaLisaInitial === "true");
    setLaminaAcanalada(laminaAcanaladaInitial === "true");
    setLaminaOndulada(laminaOnduladaInitial === "true");
    setLaminaTranslucida(laminaTranslucidaInitial === "true");
    setPanelAislante(panelAislanteInitial === "true");
    setAccesorios(accesoriosInitial === "true");
  }, []);

  return (
    <>
      {/* Filters Desktop */}
      <div className="md:block hidden">
        <div className="max-w-5xl lg:mx-auto mx-2 my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaAcanalada}
                  onChange={() => setLaminaAcanalada((value) => !value)}
                />
                <span className="pl-2">lamina acanalada</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaLisa}
                  onChange={() => setLaminaLisa((value) => !value)}
                />
                <span className="pl-2">lamina lisa</span>
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaOndulada}
                  onChange={() => setLaminaOndulada((value) => !value)}
                />
                <span className="pl-2">lamina ondulada</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaTranslucida}
                  onChange={() => setLaminaTranslucida((value) => !value)}
                />
                <span className="pl-2">lamina translúcida</span>
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={panelAislante}
                  onChange={() => setPanelAislante((value) => !value)}
                />
                <span className="pl-2">panel aislante</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={accesorios}
                  onChange={() => setAccesorios((value) => !value)}
                />
                <span className="pl-2">accesorios</span>
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
            className="max-w-5xl md:mx-auto mx-2 my-5 bg-gray-300 p-3 rounded-md cursor-pointer md:hidden text-right"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="p-1 align-middle">Filtros </span>
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
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaAcanalada}
                      onChange={() => setLaminaAcanalada((value) => !value)}
                    />
                    <span className="pl-2">lamina acanalada</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaLisa}
                      onChange={() => setLaminaLisa((value) => !value)}
                    />
                    <span className="pl-2">lamina lisa</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaOndulada}
                      onChange={() => setLaminaOndulada((value) => !value)}
                    />
                    <span className="pl-2">lamina ondulada</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaTranslucida}
                      onChange={() => setLaminaTranslucida((value) => !value)}
                    />
                    <span className="pl-2">lamina translúcida</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={panelAislante}
                      onChange={() => setPanelAislante((value) => !value)}
                    />
                    <span className="pl-2">panel aislante</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={accesorios}
                      onChange={() => setAccesorios((value) => !value)}
                    />
                    <span className="pl-2">accesorios</span>
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
