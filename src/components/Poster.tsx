import { useState, useEffect } from "react";
import { buildImageUrl } from "../utils/helpers";
import Spinner from "./Spinner";
import fallback from "../assets/fallback.png";

type PosterProps = {
  imgUrl: string | null;
  alt: string;
};

function Poster({ imgUrl, alt }: PosterProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imgUrl) return;

    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = buildImageUrl(imgUrl);
  }, [imgUrl]);

  if (imgUrl && !loaded) {
    return <Spinner />;
  }

  return (
    <div className="h-[250px] w-full">
      <img
        className="object-cover h-full w-full"
        src={imgUrl ? buildImageUrl(imgUrl) : fallback}
        alt={alt}
      />
    </div>
  );
}

export default Poster;
