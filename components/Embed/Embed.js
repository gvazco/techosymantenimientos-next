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
    <div className=" max-w-5xl mx-auto aspect-w-16 aspect-h-9">
      <iframe
        src={cleanUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        className="w-full h-full sm:mx-3"
        style={{ height: "450px" }}
      />
    </div>
  );
};
