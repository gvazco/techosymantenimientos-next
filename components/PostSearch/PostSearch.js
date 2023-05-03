import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Results } from "./Results";
import queryString from "query-string";
import { Filters } from "./Filters";

export const PostSearch = () => {
  const [posts, setPosts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 3;
  const router = useRouter();

  const searchPost = async () => {
    const {
      page,
      comunicados,
      documentacionTecnica,
      medioAmbiente,
      noticiasAcero,
      seguridad,
      tecnologia,
      tutoriales,
    } = queryString.parse(window.location.search);

    const filters = {};
    if (comunicados === "true") {
      filters.comunicados = true;
    }
    if (documentacionTecnica === "true") {
      filters.documentacionTecnica = true;
    }
    if (noticiasAcero === "true") {
      filters.noticiasAcero = true;
    }
    if (medioAmbiente === "true") {
      filters.medioAmbiente = true;
    }
    if (seguridad === "true") {
      filters.seguridad = true;
    }

    if (tutoriales === "true") {
      filters.tutoriales = true;
    }

    if (tecnologia === "true") {
      filters.tecnologia = true;
    }

    const response = await fetch(`/api/searchPost`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters,
      }),
    });
    const data = await response.json();
    // console.log("SEARCH DATA: ", data);
    setPosts(data.posts);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    const {
      comunicados,
      documentacionTecnica,
      medioAmbiente,
      noticiasAcero,
      seguridad,
      tecnologia,
      tutoriales,
    } = queryString.parse(window.location.search);

    await router.push(
      `${router.query.slug.join("/")}?page=${pageNumber}&comunicados=${
        comunicados === "true"
      }&documentacionTecnica=${documentacionTecnica === "true"}&medioAmbiente=${
        medioAmbiente === "true"
      }&tecnologia=${tecnologia === "true"}&noticiasAcero=${
        noticiasAcero === "true"
      }&seguridad=${seguridad === "true"}&tutoriales=${tutoriales === "true"}`,
      null,
      {
        shallow: true,
      }
    );
    searchPost();
  };

  useEffect(() => {
    searchPost();
  }, []);

  const handleSearch = async ({
    documentacionTecnica,
    comunicados,
    medioAmbiente,
    noticiasAcero,
    seguridad,
    tecnologia,
    tutoriales,
  }) => {
    // update our browser url
    // search
    await router.push(
      `${router.query.slug.join(
        "/"
      )}?page=1&comunicados=${!!comunicados}&documentacionTecnica=${!!documentacionTecnica}&medioAmbiente=${!!medioAmbiente}&tecnologia=${!!tecnologia}&noticiasAcero=${!!noticiasAcero}&seguridad=${!!seguridad}&tutoriales=${!!tutoriales}`,
      null,
      {
        shallow: true,
      }
    );
    searchPost();
  };

  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results posts={posts} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};
