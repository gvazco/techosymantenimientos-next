import { ProyectCard } from "./ProyectCard";

export const Results = ({ proyects }) => {
  return (
    <div className="max-w-5xl lg:mx-auto mx-2 grid grid-cols-1 gap-5 mb-10 sm:grid-cols-2 md:grid-cols-3">
      {proyects.map((proyect) => (
        <ProyectCard
          key={proyect.databaseId}
          title={proyect.title}
          destination={proyect.uri}
          estructuraMetalica={proyect.proyectFeatures.estructuraMetalica}
          laminaEstructural={proyect.proyectFeatures.laminaEstructural}
          laminaTranslucida={proyect.proyectFeatures.laminaTranslucida}
          panelAislante={proyect.proyectFeatures.panelAislante}
          mantenimiento={proyect.proyectFeatures.mantenimiento}
          ubicacion={proyect.proyectFeatures.description.ubicacion}
          cliente={proyect.proyectFeatures.description.cliente}
          date={proyect.date}
          image={proyect.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};
