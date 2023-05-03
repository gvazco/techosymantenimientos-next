import { useEffect, useState } from "react";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";

export const Filters = ({ onSearch }) => {
  const [comunicados, setComunicados] = useState(false);
  const [documentacionTecnica, setDocumentacionTecnica] = useState(false);
  const [medioAmbiente, setMedioAmbiente] = useState(false);
  const [noticiasAcero, setNoticiasAcero] = useState(false);
  const [seguridad, setSeguridad] = useState(false);
  const [tecnologia, setTecnologia] = useState(false);
  const [tutoriales, setTutoriales] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    onSearch({
      comunicados,
      documentacionTecnica,
      medioAmbiente,
      noticiasAcero,
      seguridad,
      tecnologia,
      tutoriales,
    });
  };

  const handleCheckboxChange = (checkboxName) => {
    setDocumentacionTecnica(checkboxName === "documentacionTecnica");
    setComunicados(checkboxName === "comunicados");
    setMedioAmbiente(checkboxName === "medioAmbiente");
    setNoticiasAcero(checkboxName === "noticiasAcero");
    setSeguridad(checkboxName === "seguridad");
    setTecnologia(checkboxName === "tecnologia");
    setTutoriales(checkboxName === "tutoriales");
  };

  useEffect(() => {
    const {
      documentacionTecnica: documentacionTecnicaInitial,
      comunicados: comunicadosInitial,
      medioAmbiente: medioAmbienteInitial,
      noticiasAcero: noticiasAceroInitial,
      seguridad: seguridadInitial,
      tecnologia: tecnologiaInitial,
      tutoriales: tutorialesInitial,
    } = queryString.parse(window.location.search);

    setDocumentacionTecnica(documentacionTecnicaInitial === "true");
    setComunicados(comunicadosInitial === "true");
    setMedioAmbiente(medioAmbienteInitial === "true");
    setNoticiasAcero(noticiasAceroInitial === "true");
    setSeguridad(seguridadInitial === "true");
    setTecnologia(tecnologiaInitial === "true");
    setTutoriales(tutorialesInitial === "true");
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
                    !documentacionTecnica &&
                    !comunicados &&
                    !medioAmbiente &&
                    !noticiasAcero &&
                    !seguridad &&
                    !tecnologia &&
                    !tutoriales
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
                  checked={documentacionTecnica}
                  onChange={() => handleCheckboxChange("documentacionTecnica")}
                />
                <span className="pl-2">Documentación Técnica</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={comunicados}
                  onChange={() => handleCheckboxChange("comunicados")}
                />
                <span className="pl-2">Comunicados</span>
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={medioAmbiente}
                  onChange={() => handleCheckboxChange("medioAmbiente")}
                />
                <span className="pl-2">Medio Ambiente</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={noticiasAcero}
                  onChange={() => handleCheckboxChange("noticiasAcero")}
                />
                <span className="pl-2">Noticias del Acero</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={seguridad}
                  onChange={() => handleCheckboxChange("seguridad")}
                />
                <span className="pl-2">Seguridad</span>
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={tecnologia}
                  onChange={() => handleCheckboxChange("tecnologia")}
                />
                <span className="pl-2">Tecnología</span>
              </label>
            </div>
            <div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={tutoriales}
                  onChange={() => handleCheckboxChange("tutoriales")}
                />
                <span className="pl-2">Tutoriales</span>
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
                        !documentacionTecnica &&
                        !comunicados &&
                        !medioAmbiente &&
                        !noticiasAcero &&
                        !seguridad &&
                        !tecnologia &&
                        !tutoriales
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
                      checked={documentacionTecnica}
                      onChange={() =>
                        handleCheckboxChange("documentacionTecnica")
                      }
                    />
                    <span className="pl-2">Estructuras metálicas</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={comunicados}
                      onChange={() => handleCheckboxChange("comunicados")}
                    />
                    <span className="pl-2">Lámina estructural</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={medioAmbiente}
                      onChange={() => handleCheckboxChange("medioAmbiente")}
                    />
                    <span className="pl-2">Lámina translúcida</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={noticiasAcero}
                      onChange={() => handleCheckboxChange("noticiasAcero")}
                    />
                    <span className="pl-2">Panel aislante</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={seguridad}
                      onChange={() => handleCheckboxChange("seguridad")}
                    />
                    <span className="pl-2">Seguridad</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tecnologia}
                      onChange={() => handleCheckboxChange("tecnologia")}
                    />
                    <span className="pl-2">Tecnología</span>
                  </label>
                </div>
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tutoriales}
                      onChange={() => handleCheckboxChange("tutoriales")}
                    />
                    <span className="pl-2">Tutoriales</span>
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
