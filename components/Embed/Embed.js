import React from "react";

export const Embed = ({url}) => {

  function transformYoutubeUrl(cleanUrl) {
    // Encuentra el ID del video en la URL usando una expresión regular
    const videoId = cleanUrl.match(/watch\?v=(.*)/)[1];

    // Crea una nueva URL con el formato deseado
    const newUrl = `https://www.youtube.com/embed/${videoId.split("&")[0]}`;

    return newUrl;
  }

  const cleanUrl = transformYoutubeUrl(url);

  return (
    <div className="max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto aspect-w-16 aspect-h-9">
      <iframe
        src={cleanUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        className="w-full h-full"
        style={{ height: "450px" }}
      />
    </div>
  );
};
