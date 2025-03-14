interface ChipItemProps {
  label: string;
  className?: string;
}

export default function ChipItem({ label, className = "" }: ChipItemProps) {
  return (
    <div
      className={`
        flex 
        items-center 
        justify-center 
        rounded-full
        py-1 px-4
        bg-[#472A43]
        ${className}
      `}
    >
      <p className="text-white text-sm">{label}</p>
    </div>
  );
}
