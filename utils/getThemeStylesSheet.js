import { gql } from "@apollo/client";
import client from "client";

export const getThemeStylesSheet = async (context) => {

  const { data } = await client.query({
    query: gql`
      query StylesQuery {
        themeStylesheet
      }
    `,
  });

  return {
    props: {
      wpStyles: data
    }
  }
}
