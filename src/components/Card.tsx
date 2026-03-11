import Image from "next/image";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg w-72">
      <Image
        src={imgSrc}
        alt={venueName}
        width={288}
        height={200}
        className="object-cover w-full"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-600">{venueName}</h3>
      </div>
    </div>
  );
}
