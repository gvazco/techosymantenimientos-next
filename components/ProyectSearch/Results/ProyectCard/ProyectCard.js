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

export const ProyectCard = ({
  title,
  destination,
  image,
  date,
  ubicacion,
  cliente,
}) => {
  console.log(ubicacion, cliente);

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
            height={300}
            width={300}
            style={{ objectFit: "cover", maxHeight: "300px" }}
            alt=""
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
        {!!cliente && (
          <div className="flex">
            <FontAwesomeIcon className="p-2 align-middle" icon={faBuilding} />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              Cliente: {cliente}
            </span>
          </div>
        )}
        {!!ubicacion && (
          <div className="flex">
            <FontAwesomeIcon
              className="p-2 align-middle"
              icon={faLocationDot}
            />
            <span className="p-1 overflow-hidden text-ellipsis truncate">
              Ubicación: {ubicacion}
            </span>
          </div>
        )}

      </a>
    </Link>
  );
};
