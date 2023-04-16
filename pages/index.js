import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { getPageStaticProps } from "utils/getPageStaticProps";
import { getThemeStylesSheet } from "utils/getThemeStylesSheet";
import { Page } from "components/Page";

export default Page;

export const getStaticProps = getPageStaticProps;
export const themeStylesSheet = getThemeStylesSheet
