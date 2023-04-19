import { ProyectCard } from "./ProyectCard";

export const Results = ({ proyects }) => {
  return (
    <div className="max-w-5xl lg:mx-auto mx-2 grid grid-cols-1 gap-5 mb-10 sm:grid-cols-2 md:grid-cols-3">
      {proyects.map((proyect) => (
        <ProyectCard
          key={proyect.databaseId}
          title={proyect.title}
          destination={proyect.uri}
          estructuraMetalica={proyect.proyectFeatures.type.estructuraMetalica}
          laminaEstructural={proyect.proyectFeatures.type.laminaEstructural}
          laminaTranslucida={proyect.proyectFeatures.type.laminaTranslucida}
          panelAislante={proyect.proyectFeatures.type.panelAislante}
          mantenimiento={proyect.proyectFeatures.type.mantenimiento}
          ubicacion={proyect.proyectFeatures.description.ubicacion}
          cliente={proyect.proyectFeatures.description.cliente}
          date={proyect.date}
          image={proyect.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};
