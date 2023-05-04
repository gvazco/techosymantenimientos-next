import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Results } from "./Results";
import queryString from "query-string";
import { Filters } from "./Filters";

export const ProyectSearch = () => {
  const [proyects, setProyects] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 6;
  const router = useRouter();

  const searchProyect = async () => {
    const {
      page,
      estructuraMetalica,
      laminaEstructural,
      laminaTranslucida,
      mantenimiento,
      panelAislante,
    } = queryString.parse(window.location.search);
    const filters = {};
    if (laminaEstructural === "true") {
      filters.laminaEstructural = true;
    }
    if (estructuraMetalica === "true") {
      filters.estructuraMetalica = true;
    }
    if (mantenimiento === "true") {
      filters.mantenimiento = true;
    }
    if (laminaTranslucida === "true") {
      filters.laminaTranslucida = true;
    }
    if (panelAislante === "true") {
      filters.panelAislante = true;
    }

    const response = await fetch(`/api/searchProyect`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters,
      }),
    });
    const data = await response.json();
    // console.log("SEARCH DATA: ", data);
    setProyects(data.proyects);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    const {
      estructuraMetalica,
      laminaEstructural,
      laminaTranslucida,
      mantenimiento,
      panelAislante,
    } = queryString.parse(window.location.search);

    await router.push(
      `${router.query.slug.join("/")}?page=${pageNumber}&laminaEstructural=${
        laminaEstructural === "true"
      }&estructuraMetalica=${estructuraMetalica === "true"}&laminaTranslucida=${laminaTranslucida === "true"}&panelAislante=${
        panelAislante === "true"
      }&mantenimiento=${mantenimiento === "true"}`,
      null,
      {
        shallow: true,
      }
    );
    searchProyect();
  };

  useEffect(() => {
    searchProyect();
  }, []);

  const handleSearch = async ({
    estructuraMetalica,
    laminaEstructural,
    laminaTranslucida,
    mantenimiento,
    panelAislante,
  }) => {
    // update our browser url
    await router.push(
      `${router.query.slug.join(
        "/"
      )}?page=1&laminaEstructural=${!!laminaEstructural}&estructuraMetalica=${!!estructuraMetalica}&laminaTranslucida=${!!laminaTranslucida}&panelAislante=${!!panelAislante}&mantenimiento=${!!mantenimiento}`,
      null,
      {
        shallow: true,
      }
    );
    searchProyect();
  };

  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results proyects={proyects} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};
