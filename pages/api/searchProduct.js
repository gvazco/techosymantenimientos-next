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
    let accesoriosFilter = ``;

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

    if (filters.accesorios) {
      accesoriosFilter = `
      {
        key: "accesorios"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    const { data } = await client.query({
      query: gql`
        query AllProductsQuery {
          products(where: {
            offsetPagination: { size: 3, offset: ${
              ((filters.page || 1) - 1) * 3
            } }
          metaQuery: {
            relation: AND
            metaArray: [
              ${laminaAcanaladaFilter}
              ${laminaLisaFilter}
              ${laminaOnduladaFilter}
              ${laminaTranslucidaFilter}
              ${panelAislanteFilter}
              ${accesoriosFilter}
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
                  calibre
                  entrega
                  largoEfectivo
                  largoEstandar
                  otros
                  precio
                }
                accesorios
                fieldGroupName
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
    console.log("SERVER SIDE: ", data.products.nodes);
    return res.status(200).json({
      total: data.products.pageInfo.offsetPagination.total,
      products: data.products.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;
