interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <div
      className={`
        flex 
        items-center 
        justify-center 
        rounded-full
        py-1 px-4
        bg-[#472A43]
      `}
    >
      <p className="text-white text-sm">{label}</p>
    </div>
  );
}
