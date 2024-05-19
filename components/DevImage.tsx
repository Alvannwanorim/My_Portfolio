import Image from "next/image";

const DevImage = ({
  containerStyles,
  imgSrc,
}: {
  containerStyles: string;
  imgSrc: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt="" fill priority />
    </div>
  );
};

export default DevImage;
