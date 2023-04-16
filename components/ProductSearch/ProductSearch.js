import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Results } from "./Results";
import queryString from "query-string";
import { Filters } from "./Filters";

export const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 3;
  const router = useRouter();

  const searchProduct = async () => {
    const {
      page,
      laminaLisa,
      laminaAcanalada,
      laminaOndulada,
      laminaTranslucida,
      panelAislante,
      accesorios,
    } = queryString.parse(window.location.search);
    const filters = {};
    if (laminaLisa === "true") {
      filters.laminaLisa = true;
    }
    if (laminaAcanalada === "true") {
      filters.laminaAcanalada = true;
    }
    if (laminaOndulada === "true") {
      filters.laminaOndulada = true;
    }
    if (laminaTranslucida === "true") {
      filters.laminaTranslucida = true;
    }
    if (panelAislante === "true") {
      filters.panelAislante = true;
    }
    if (accesorios === "true") {
      filters.accesorios = true;
    }

    const response = await fetch(`/api/searchProduct`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters,
      }),
    });
    const data = await response.json();
    console.log("SEARCH DATA: ", data);
    setProducts(data.products);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    const {
      laminaLisa,
      laminaAcanalada,
      laminaOndulada,
      laminaTranslucida,
      panelAislante,
      accesorios,
    } = queryString.parse(window.location.search);

    await router.push(
      `${router.query.slug.join("/")}?page=${pageNumber}&laminaLisa=${
        laminaLisa === "true"
      }&laminaAcanalada=${laminaAcanalada === "true"}&laminaOndulada=${
        laminaOndulada === "true"
      }&laminaTranslucida=${laminaTranslucida === "true"}&panelAislante=${
        panelAislante === "true"
      }&accesorios=${accesorios === "true"}`,
      null,
      {
        shallow: true,
      }
    );
    searchProduct();
  };

  useEffect(() => {
    searchProduct();
  }, []);

  const handleSearch = async ({
    laminaLisa,
    laminaAcanalada,
    laminaOndulada,
    laminaTranslucida,
    panelAislante,
    accesorios,
  }) => {
    // update our browser url
    // search
    console.log(
      "FILTERS: ",
      laminaLisa,
      laminaAcanalada,
      laminaOndulada,
      laminaTranslucida,
      panelAislante,
      accesorios
    );
    await router.push(
      `${router.query.slug.join(
        "/"
      )}?page=1&laminaLisa=${!!laminaLisa}&laminaAcanalada=${!!laminaAcanalada}&laminaOndulada=${!!laminaOndulada}&laminaTranslucida=${!!laminaTranslucida}&panelAislante=${!!panelAislante}&accesorios=${!!accesorios}`,
      null,
      {
        shallow: true,
      }
    );
    searchProduct();
  };

  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results products={products} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};
