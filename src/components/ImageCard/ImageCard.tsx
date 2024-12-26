import React from "react";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  onClick: () => void;
  image: string;
  alt_description: string;
  likes: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  onClick,
  image,
  alt_description,
  likes,
}) => {
  return (
    <div className={s.imgBox} onClick={onClick}>
      <img className={s.img} src={image} alt={alt_description} width={400} />
      <span className={s.likes}>
        Likes: <span className={s.likesData}>{likes}</span>
      </span>
    </div>
  );
};

export default ImageCard;
