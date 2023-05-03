import { faPhoneAlt, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlockRenderer } from "components/BlockRenderer";
import { MainFooter } from "components/MainFooter";
import { MainMenu } from "components/MainMenu";
import { SocialMenu } from "components/SocialMenu";
import { PageWrapper } from "context/page";
import Head from "next/head";

export const Page = (props) => {
  // console.log("PAGE PROPS: ", props);
  return (
    <PageWrapper
      value={{
        productFeatures: props.productFeatures,
        title: props.title,
        featuredImage: props.featuredImage,
      }}
    >
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>
      <div className="md:block hidden">
        <div className="flex justify-between">
          <div className="ml-5 p-5 h-[64px] flex items-center">
            <FontAwesomeIcon className="align-middle" icon={faShieldHalved} />
            <span className="p-2 align-middle">
              SEGURIDAD, EXACTITUD Y GARANTÍA
            </span>
            <FontAwesomeIcon className="ml-2 align-middle" icon={faPhoneAlt} />
            <span className="p-2 align-middle">(55) 8280-2149</span>
          </div>
          <SocialMenu items={props.socialMenuItems} />
        </div>
      </div>
      <MainMenu
        items={props.mainMenuItems}
        callToActionDestination={props.callToActionDestination}
        callToActionLabel={props.callToActionLabel}
        socialItems={props.socialMenuItems}
      />
      <BlockRenderer blocks={props.blocks} />
      <MainFooter items={props.socialMenuItems} />
    </PageWrapper>
  );
};
