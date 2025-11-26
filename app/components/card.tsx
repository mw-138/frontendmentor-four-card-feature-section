import Image from "next/image";
import * as React from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  stripColor: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  stripColor,
}) => {
  return (
    <div
      className="bg-white relative w-72 h-48 text-gray-500 rounded-md border-t-4 p-4 shadow-xl"
      style={{ borderTopColor: stripColor }}
    >
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm">{description}</p>
      <Image src={imageSrc} alt="" className="absolute bottom-5 right-5" />
    </div>
  );
};

export default Card;
