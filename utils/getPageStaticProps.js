import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { mapSocialMenuItems } from "./mapSocialMenuItems";

export const getPageStaticProps = async (context) => {
  // console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Product {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            productFeatures {
              description {
                anchoEfectivo
                calibre
                contenido
                entrega
                espesor
                existencia
                largoEfectivo
                largoEstandar
                marca
                otros
                precio
                presentacion
                whatsapp
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Proyect {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Post {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
        acfOptionsSocialMenu {
          socialMenu {
            socialItems {
              socialItem {
                destination {
                  url
                }
                label
                setIcon
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  return {
    props: {
      seo: data.nodeByUri.seo,
      title: data.nodeByUri.title,
      productFeatures: data.nodeByUri.productFeatures?.description || null,
      featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      socialMenuItems: mapSocialMenuItems(
        data.acfOptionsSocialMenu.socialMenu.socialItems
      ),
      callToActionLabel:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks,
    },
  };
};
