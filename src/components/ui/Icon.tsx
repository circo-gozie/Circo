import Image from 'next/image';

const Icon = ({ name, size = 3 }: { name: string; size?: number }) => {
  return (
    <Image
      src={`/images/icons/${name}.svg`}
      alt={name}
      width={size * 3.5}
      height={size * 3.5}
    />
  );
};

export default Icon;
