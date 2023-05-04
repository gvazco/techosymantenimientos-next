import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

    let estructuraMetalicaFilter = ``;
    let laminaEstructuralFilter = ``;
    let laminaTranslucidaFilter = ``;
    let panelAislanteFilter = ``;
    let mantenimientoFilter = ``;

    if (filters.estructuraMetalica) {
      estructuraMetalicaFilter = `
      {
        key: "lamina_lisa"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.laminaEstructural) {
      laminaEstructuralFilter = `
      {
        key: "lamina_acanalada"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.laminaTranslucida) {
      laminaTranslucidaFilter = `
      {
        key: "lamina_translucida"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.panelAislante) {
      panelAislanteFilter = `
      {
        key: "panel_aislante"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.mantenimiento) {
      mantenimientoFilter = `
      {
        key: "mantenimiento"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    const { data } = await client.query({
      query: gql`
        query AllProyectsQuery {
          proyects(where: {
            offsetPagination: { size: 9, offset: ${
              ((filters.page || 1) - 1) * 3
            } }
          metaQuery: {
            relation: AND
            metaArray: [
              ${laminaEstructuralFilter}
              ${estructuraMetalicaFilter}
              ${laminaTranslucidaFilter}
              ${panelAislanteFilter}
              ${mantenimientoFilter}
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
              proyectFeatures {
                description {
                  cliente
                  ubicacion
                }
                  estructuraMetalica
                  laminaEstructural
                  laminaTranslucida
                  mantenimiento
                  panelAislante
              }
              date
            }
          }
        }
      `,
    });
    // console.log("SERVER SIDE: ", data.proyects.nodes);
    return res.status(200).json({
      total: data.proyects.pageInfo.offsetPagination.total,
      proyects: data.proyects.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;
