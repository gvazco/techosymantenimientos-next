import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  console.log(req, res);
  try {
    const filters = JSON.parse(req.body);

    let laminaLisaFilter = ``;
    let laminaAcanaladaFilter = ``;
    let laminaOnduladaFilter = ``;
    let laminaTranslucidaFilter = ``;
    let panelAislanteFilter = ``;
    let aislantesFilter = ``;
    let selladoresFilter = ``;
    let fijacionFilter = ``;
    let rematesLaminaFilter = ``;

    if (filters.laminaLisa) {
      laminaLisaFilter = `
      {
        key: "lamina_lisa"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.laminaAcanalada) {
      laminaAcanaladaFilter = `
      {
        key: "lamina_acanalada"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.laminaOndulada) {
      laminaOnduladaFilter = `
      {
        key: "lamina_ondulada"
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

    if (filters.aislantes) {
      aislantesFilter = `
      {
        key: "aislantes"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.fijacion) {
      fijacionFilter = `
      {
        key: "fijacion"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.selladores) {
      selladoresFilter = `
      {
        key: "selladores"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.rematesLamina) {
      rematesLaminaFilter = `
      {
        key: "remates_lamina"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    const { data } = await client.query({
      query: gql`
        query AllProductsQuery {
          products(where: {
            offsetPagination: { size: 6, offset: ${
              ((filters.page || 1) - 1) * 6
            } }
          metaQuery: {
            relation: AND
            metaArray: [
              ${laminaAcanaladaFilter}
              ${laminaLisaFilter}
              ${laminaOnduladaFilter}
              ${laminaTranslucidaFilter}
              ${panelAislanteFilter}
              ${aislantesFilter}
              ${fijacionFilter}
              ${selladoresFilter}
              ${rematesLaminaFilter}
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
              productFeatures {
                description {
                  marca
                  anchoEfectivo
                  largoEfectivo
                  largoEstandar
                  espesor
                  calibre
                  existencia
                  entrega
                  presentacion
                  contenido
                  otros
                  precio
                  whatsapp
                }
                aislantes
                selladores
                fijacion
                rematesLamina
                laminaAcanalada
                laminaLisa
                laminaOndulada
                laminaTranslucida
                panelAislante
              }
            }
          }
        }
      `,
    });
    // console.log("SERVER SIDE: ", data.products.nodes);
    return res.status(200).json({
      total: data.products.pageInfo.offsetPagination.total,
      products: data.products.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;
