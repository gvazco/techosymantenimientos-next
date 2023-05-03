import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

    let comunicadosFilter = ``;
    let documentacionTecnicaFilter = ``;
    let medioAmbienteFilter = ``;
    let noticiasAceroFilter = ``;
    let seguridadFilter = ``;
    let tecnologiaFilter = ``;
    let tutorialesFilter = ``;

    if (filters.comunicados) {
      comunicadosFilter = `
      {
        key: "comunicados"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.documentacionTecnica) {
      documentacionTecnicaFilter = `
      {
        key: "documentacion_tecnica"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }


    if (filters.medioAmbiente) {
      medioAmbienteFilter = `
      {
        key: "medio_ambiente"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.noticiasAcero) {
      noticiasAceroFilter = `
      {
        key: "noticias_acero"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.seguridad) {
      seguridadFilter = `
      {
        key: "seguridad"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.tecnologia) {
      tecnologiaFilter = `
      {
        key: "tecnologia"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.tutoriales) {
      tutorialesFilter = `
      {
        key: "tutoriales"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    const { data } = await client.query({
      query: gql`
        query AllPostsQuery {
          posts(where: {
            offsetPagination: { size: 3, offset: ${
              ((filters.page || 1) - 1) * 3
            } }
          metaQuery: {
            relation: AND
            metaArray: [
              ${documentacionTecnicaFilter}
              ${comunicadosFilter}
              ${noticiasAceroFilter}
              ${medioAmbienteFilter}
              ${seguridadFilter}
              ${tecnologiaFilter}
              ${tutorialesFilter}
            ]
          }
        }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              databaseId
              title
              uri
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              postsFeatures {
                comunicados
                documentacionTecnica
                medioAmbiente
                noticiasAcero
                seguridad
                tecnologia
                tutoriales
              }
              author{
                node{
                  name
                }
              }
              date
              tags {
                nodes {
                  name
                }
              }
            }
          }
        }
      `,
    });
    // console.log("SERVER SIDE: ", data.posts.nodes);
    return res.status(200).json({
      total: data.posts.pageInfo.offsetPagination.total,
      posts: data.posts.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;
