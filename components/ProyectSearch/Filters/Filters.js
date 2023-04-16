import { Input } from "components/Input";
import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  const [estructuraMetalica, setEstructuraMetalica] = useState(false);
  const [laminaEstructural, setLaminaEstructural] = useState(false);
  const [laminaTranslucida, setLaminaTranslucida] = useState(false);
  const [panelAislante, setPanelAislante] = useState(false);
  const [mantenimiento, setMantenimiento] = useState(false);

  const handleSearch = () => {
    onSearch({
      estructuraMetalica,
      laminaEstructural,
      laminaTranslucida,
      mantenimiento,
      panelAislante,
    });
  };

  useEffect(() => {
    const {
      estructuraMetalica: estructuraMetalicaInitial,
      laminaEstructural: laminaEstructuralInitial,
      laminaTranslucida: laminaTranslucidaInitial,
      panelAislante: panelAislanteInitial,
      mantenimiento: mantenimientoInitial,
    } = queryString.parse(window.location.searchProyect);

    setEstructuraMetalica(estructuraMetalicaInitial === "true");
    setLaminaEstructural(laminaEstructuralInitial === "true");
    setLaminaTranslucida(laminaTranslucidaInitial === "true");
    setPanelAislante(panelAislanteInitial === "true");
    setMantenimiento(mantenimientoInitial === "true");
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
      <div className="flex-1">
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={estructuraMetalica}
              onChange={() => setEstructuraMetalica((value) => !value)}
            />
            <span className="pl-2">Estructura Metálica</span>
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={laminaEstructural}
              onChange={() => setLaminaEstructural((value) => !value)}
            />
            <span className="pl-2">Lamina estructural</span>
          </label>
        </div>
      </div>
      <div className="flex-1">
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
              checked={mantenimiento}
              onChange={() => setMantenimiento((value) => !value)}
            />
            <span className="pl-2">mantenimiento</span>
          </label>
        </div>
      </div>
      <div>
        <div className="btn" onClick={handleSearch}>
          Search
        </div>
      </div>
    </div>
  );
};
