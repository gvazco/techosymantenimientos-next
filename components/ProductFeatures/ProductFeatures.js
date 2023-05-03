import {
  faBoxOpen,
  faDownLeftAndUpRightToCenter,
  faFlask,
  faIndustry,
  faLeftRight,
  faTags,
  faTruckFast,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CallToActionExternal } from "components/CallToActionExternal";
import { Heading } from "components/Heading";
import { usePageContext } from "context/page";
import Image from "next/image";
import numeral from "numeral";

export const ProductFeatures = () => {
  const { productFeatures, featuredImage, title } = usePageContext();

  const {
    marca,
    largoEfectivo,
    largoEstandar,
    anchoEfectivo,
    calibre,
    espesor,
    existencia,
    presentacion,
    contenido,
    entrega,
    otros,
    precio,
    whatsapp
  } = productFeatures;

  const separador = (array) => {
    if (array.length === 0) return "";
    if (array.length === 1) return array[0];
    const ultimoElemento = array[array.length - 1];
    const primerosElementos = array.slice(0, -1).join(", ");
    return `${primerosElementos} y ${ultimoElemento}`;
  };

  return (
    <div className="lg:max-w-5xl max-w-md mx-auto my-10 bg-transparent text-slate-200 p-5 text-center flex lg:flex-row flex-col lg:justify-around justify-center">
      <Image
        className="mx-auto border-solid border-x-4 border-y-4 border-slate-300 p-2 mb-8 rounded-lg"
        src={featuredImage}
        height={400}
        width={400}
        style={{ objectFit: "cover" }}
        alt="Product Image"
      />

      <div className="flex flex-col align-middle my-auto">
        <div>
          <Heading content={title} level="3" textAlign="center" />
        </div>
        {!existencia && (
          <div className="flex w-full relative">
            <div className="absolute inset-0 flex items-center justify-center text-2xl lg:text-3xl text-slate-200 uppercase font-bold">
              <span className="bg-orange-500 p-3">Agotado</span>
            </div>
          </div>
        )}
        {!!marca && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faTags} />
            <span className="p-1 text-left">Marca: {marca}</span>
          </div>
        )}
        {!!largoEfectivo && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faUpRightAndDownLeftFromCenter}
            />

            <span className="p-1 text-left">
              {separador(largoEfectivo)} largo estándar.
            </span>
          </div>
        )}
        {!!largoEstandar && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faUpRightAndDownLeftFromCenter}
            />
            <span className="p-1 text-left">
              {separador(largoEstandar)} largo estándar.
            </span>
          </div>
        )}
        {!!anchoEfectivo && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faLeftRight} />
            <span className="p-1 text-left">
              {separador(anchoEfectivo)} ancho efectivo.
            </span>
          </div>
        )}
        {!!espesor && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faDownLeftAndUpRightToCenter}
            />
            <span className="p-1 text-left">
              Espesor disponible: {separador(espesor)} pulgadas.
            </span>
          </div>
        )}
        {!!calibre && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faDownLeftAndUpRightToCenter}
            />
            <span className="p-1 text-left">
              Calibre disponible: {separador(calibre)}
            </span>
          </div>
        )}
        {!!contenido && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faFlask} />
            <span className="p-1 text-left">{contenido}</span>
          </div>
        )}
        {!!presentacion && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faBoxOpen} />
            <span className="p-1 text-left">{presentacion}</span>
          </div>
        )}
        {!!entrega && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faTruckFast} />
            <span className="p-1 text-left">Disponibilidad: {entrega}</span>
          </div>
        )}
        {!!otros && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faIndustry} />
            <span className="p-1 text-left">{otros}</span>
          </div>
        )}

        {!!whatsapp && (
          <div className="mt-6">
            <CallToActionExternal
              buttonLabel="Cotizar en WhatsApp"
              destination={whatsapp}
              align="center"
            />
          </div>
        )}
      </div>
    </div>
  );
};
