import React from "react";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";
import { CallToActionButton } from "components/CallToActionButton";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import Image from "next/image";
import { PropertySearch } from "components/PropertySearch";
import { ProductSearch } from "components/ProductSearch";
import { PostTitle } from "components/PostTitle";
import { ProyectSearch } from "components/ProyectSearch";
import { PostSearch } from "components/PostSearch";
import { Embed } from "components/Embed";
import { CallToActionExternal } from "components/CallToActionExternal";
import { TickItem } from "components/TickItem";
import { Gallery } from "components/Gallery";
import { FormspreeForm } from "components/FormspreeForm";
import { PropertyFeatures } from "components/PropertyFeatures";
import { ProductFeatures } from "components/ProductFeatures";

export const BlockRenderer = ({ blocks }) => {
  // console.log(blocks);
  return blocks.map((block) => {
    switch (block.name) {
      case "acf/productfeatures": {
        return <ProductFeatures key={block.id} />;
      }
      case "acf/propertyfeatures": {
        return <PropertyFeatures key={block.id} />;
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination}
            align={block.attributes.data.align}
          />
        );
      }
      case "acf/ctaexternal": {
        return (
          <CallToActionExternal
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination.url}
            align={block.attributes.data.align}
          />
        );
      }
      case "acf/propertysearch": {
        return <PropertySearch key={block.id} />;
      }
      case "acf/productsearch": {
        return <ProductSearch key={block.id} />;
      }
      case "acf/proyectsearch": {
        return <ProyectSearch key={block.id} />;
      }
      case "acf/postsearch": {
        return <PostSearch key={block.id} />;
      }
      case "acf/formspreeform": {
        return (
          <FormspreeForm
            key={block.id}
            formId={block.attributes.data.form_id}
          />
        );
      }
      case "acf/tickitem": {
        return (
          <TickItem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </TickItem>
        );
      }
      case "core/gallery": {
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            cropImages={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/post-title":
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/post-title": {
        return (
          <PostTitle
            key={block.id}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/cover": {
        // console.log("COVER BLOCK: ", block);
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/embed": {
        console.log(block)
        return <Embed key={block.id} url={block.attributes.url} />;
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/group":
      case "core/block": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/image": {
        return (
          <Image
            className="mx-auto border-2 border-slate-300 p-1 m-1"
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
          />
        );
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  });
};
