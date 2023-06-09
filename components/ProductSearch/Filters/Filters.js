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
  const [fijacion, setFijacion] = useState(false);
  const [selladores, setSelladores] = useState(false);
  const [aislantes, setAislantes] = useState(false);
  const [rematesLamina, setRematesLamina] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    onSearch({
      laminaLisa,
      laminaAcanalada,
      laminaOndulada,
      laminaTranslucida,
      panelAislante,
      fijacion,
      selladores,
      aislantes,
      rematesLamina,
    });
  };

  const handleCheckboxChange = (checkboxName) => {
    setLaminaLisa(checkboxName === "laminaLisa");
    setLaminaAcanalada(checkboxName === "laminaAcanalada");
    setLaminaOndulada(checkboxName === "laminaOndulada");
    setLaminaTranslucida(checkboxName === "laminaTranslucida");
    setPanelAislante(checkboxName === "panelAislante");
    setAislantes(checkboxName === "aislantes");
    setSelladores(checkboxName === "selladores");
    setFijacion(checkboxName === "fijacion");
    setRematesLamina(checkboxName === "rematesLamina");
  };

  useEffect(() => {
    const {
      laminaLisa: laminaLisaInitial,
      laminaAcanalada: laminaAcanaladaInitial,
      laminaOndulada: laminaOnduladaInitial,
      laminaTranslucida: laminaTranslucidaInitial,
      panelAislante: panelAislanteInitial,
      aislantes: aislantesInitial,
      selladores: selladoresInitial,
      fijacion: fijacionInitial,
      rematesLamina: rematesLaminaInitial,
    } = queryString.parse(window.location.search);

    setLaminaLisa(laminaLisaInitial === "true");
    setLaminaAcanalada(laminaAcanaladaInitial === "true");
    setLaminaOndulada(laminaOnduladaInitial === "true");
    setLaminaTranslucida(laminaTranslucidaInitial === "true");
    setPanelAislante(panelAislanteInitial === "true");
    setAislantes(aislantesInitial === "true");
    setSelladores(selladoresInitial === "true");
    setFijacion(fijacionInitial === "true");
    setRematesLamina(rematesLaminaInitial === "true");
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
                    !laminaAcanalada &&
                    !laminaLisa &&
                    !laminaOndulada &&
                    !laminaTranslucida &&
                    !panelAislante &&
                    !aislantes &&
                    !selladores &&
                    !fijacion &&
                    !rematesLamina
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
                  checked={aislantes}
                  onChange={() => handleCheckboxChange("aislantes")}
                />
                <span className="pl-2">Aislantes</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={fijacion}
                  onChange={() => handleCheckboxChange("fijacion")}
                />
                <span className="pl-2">Fijacion</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaAcanalada}
                  onChange={() => handleCheckboxChange("laminaAcanalada")}
                />
                <span className="pl-2">Lámina acanalada</span>
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaLisa}
                  onChange={() => handleCheckboxChange("laminaLisa")}
                />
                <span className="pl-2">Lámina lisa</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={laminaOndulada}
                  onChange={() => handleCheckboxChange("laminaOndulada")}
                />
                <span className="pl-2">Lámina ondulada</span>
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
          </div>
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={rematesLamina}
                  onChange={() => handleCheckboxChange("rematesLamina")}
                />
                <span className="pl-2">Remates lámina</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={selladores}
                  onChange={() => handleCheckboxChange("selladores")}
                />
                <span className="pl-2">Selladores</span>
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
                        !laminaAcanalada &&
                        !laminaLisa &&
                        !laminaOndulada &&
                        !laminaTranslucida &&
                        !panelAislante &&
                        !aislantes &&
                        !selladores &&
                        !fijacion &&
                        !rematesLamina
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
                      checked={aislantes}
                      onChange={() => handleCheckboxChange("aislantes")}
                    />
                    <span className="pl-2">Aislantes</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fijacion}
                      onChange={() => handleCheckboxChange("fijacion")}
                    />
                    <span className="pl-2">Fijación</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaAcanalada}
                      onChange={() => handleCheckboxChange("laminaAcanalada")}
                    />
                    <span className="pl-2">Lámina acanalada</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaLisa}
                      onChange={() => handleCheckboxChange("laminaLisa")}
                    />
                    <span className="pl-2">Lámina lisa</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laminaOndulada}
                      onChange={() => handleCheckboxChange("laminaOndulada")}
                    />
                    <span className="pl-2">Lámina ondulada</span>
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
                      checked={rematesLamina}
                      onChange={() => handleCheckboxChange("rematesLamina")}
                    />
                    <span className="pl-2">Remates lámina</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selladores}
                      onChange={() => handleCheckboxChange("selladores")}
                    />
                    <span className="pl-2">Selladores</span>
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
