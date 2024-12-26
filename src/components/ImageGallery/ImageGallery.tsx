import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: { small: string };
  alt_description: string;
  likes: number;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id} className={s.card}>
          <ImageCard
            onClick={() => openModal(image)}
            image={image.urls.small}
            alt_description={image.alt_description}
            likes={image.likes}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;