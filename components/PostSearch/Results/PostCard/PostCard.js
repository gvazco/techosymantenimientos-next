import {
  faBuilding,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonLink } from "components/ButtonLink";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";
import React from "react";

export const PostCard = ({
  title,
  destination,
  image,
  date,
  autor,
  tags,
  type,
}) => {
  // console.log(autor, tags, type);

  // Crear un objeto de fecha a partir de la cadena de texto
  const fechaObjeto = new Date(date);

  // Obtener el año y el mes
  const año = fechaObjeto.getFullYear();
  const numeroMes = fechaObjeto.getMonth(); // Los meses en JavaScript comienzan desde 0
  const nombreMes = obtenerNombreMes(numeroMes);

  // Función para obtener el nombre del mes a partir del número de mes
  function obtenerNombreMes(numeroMes) {
    const nombresMes = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return nombresMes[numeroMes];
  }

  // Formatear la fecha como una cadena de texto
  const fechaFormateada = nombreMes + " " + año;

  return (
    <Link href={destination} legacyBehavior>
      <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
        <div className="flex w-full">
          <Image
            className="mb-3 mx-auto border-2 border-slate-300"
            src={image}
            height={200}
            width={300}
            style={{ objectFit: "cover", maxHeight: "200px" }}
            alt="Product Image"
          />
        </div>
        <div className="mt-3 text-lg font-bold mb-3">{title}</div>
        {!!date && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faCalendarDays}
            />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              {fechaFormateada}
            </span>
          </div>
        )}
      </a>
    </Link>
  );
};
