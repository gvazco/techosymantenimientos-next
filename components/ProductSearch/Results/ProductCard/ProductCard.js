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
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";
import React from "react";

export const ProductCard = ({
  title,
  destination,
  image,
  precio,
  description,
}) => {
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
  } = description;

  const separador = (array) => {
    if (array.length === 0) return "";
    if (array.length === 1) return array[0];
    const ultimoElemento = array[array.length - 1];
    const primerosElementos = array.slice(0, -1).join(", ");
    return `${primerosElementos} y ${ultimoElemento}`;
  };

  return (
    <Link href={destination} legacyBehavior>
      <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
        <div className="mt-3 mb-3 text-lg font-bold">{title}</div>
        <div className="flex w-full relative">
          <Image
            className="mb-3 mx-auto "
            src={image}
            height={300}
            width={300}
            style={{ objectFit: "cover", maxHeight: "300px" }}
            alt=""
          />
          {!existencia && (
            <div className="absolute inset-0 flex items-center justify-center text-2xl lg:text-3xl text-slate-900 uppercase font-bold">
              <span className="bg-orange-500 p-3">Agotado</span>
            </div>
          )}
        </div>
        {!!precio && (
          <div className="text-lg">${numeral(precio).format("0,0")}</div>
        )}

        {!!marca && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faTags} />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              Marca: {marca}
            </span>
          </div>
        )}
        {!!largoEfectivo && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faUpRightAndDownLeftFromCenter}
            />

            <span className="p-1 overflow-hidden text-ellipsis truncate">
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
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              {separador(largoEstandar)} largo estándar.
            </span>
          </div>
        )}
        {!!anchoEfectivo && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faLeftRight} />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
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
            <span className="p-1 overflow-hidden text-ellipsis truncate">
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
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              Calibre disponible: {separador(calibre)}
            </span>
          </div>
        )}
        {!!contenido && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faFlask}
            />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              {contenido}
            </span>
          </div>
        )}
        {!!presentacion && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faBoxOpen}
            />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              {presentacion}
            </span>
          </div>
        )}
        {!!entrega && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faTruckFast} />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              Disponibilidad: {entrega}
            </span>
          </div>
        )}
        {!!otros && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faIndustry} />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              {otros}
            </span>
          </div>
        )}

        {/* <div className="flex justify-center">
          <ButtonLink destination={destination} label="Más detalles..." />
        </div> */}
      </a>
    </Link>
  );
};
