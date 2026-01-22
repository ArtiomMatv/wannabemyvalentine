import { ReactNode } from 'react';

type Props = {
  id: number;
  top: number;
  left: number;
  index: number;
  rotate: number;
  src: string;
  children: ReactNode;
};

const Polaroid = ({ top, left, index, rotate, src, children }: Props) => {
  const styles = {
    top: `${top}%`,
    left: `${left}%`,
    zIndex: index,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div
      className="bg-white p-4 shadow-2xl absolute filter grayscale hover:filter-none hover:!scale-100 hover:!rotate-0 hover:transition-all duration-200 max-w-64 min-w-40 flex flex-col"
      style={styles}
    >
      <div className="flex-shrink-0 mb-2 w-full">
        <img
          src={src}
          alt={children?.toString() || 'Polaroid'}
          className="max-w-full h-auto opacity-60 hover:opacity-[100%] w-full object-contain"
        />
      </div>
      <div className="md:text-xl text-sm text-center leading-tight mt-auto pt-1">
        {children}
      </div>
    </div>
  );
};
export default Polaroid;
