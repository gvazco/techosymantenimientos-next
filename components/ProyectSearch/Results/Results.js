import { ProyectCard } from "./ProyectCard";

export const Results = ({ products }) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
      {products.map((product) => (
        <ProyectCard
          key={proyect.databaseId}
          title={proyect.title}
          destination={proyect.uri}
          estructuraMetalica={proyect.proyectFeatures.estructuraMetalica}
          laminaEstructural={proyect.proyectFeatures.laminaEstructural}
          laminaTranslucida={proyect.proyectFeatures.laminaTranslucida}
          panelAislante={proyect.proyectFeatures.panelAislante}
          mantenimiento={proyect.proyectFeatures.mantenimiento}
          ubicacion={proyect.proyectFeatures.ubicacion}
          image={proyect.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};
