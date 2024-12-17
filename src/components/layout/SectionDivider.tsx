interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center w-full justify-center">
      <div className="w-full border-t border-gray-600"></div>
      <span className="px-2 text-gray-400">{title}</span>
      <div className="w-full border-t border-gray-600"></div>
    </div>
  );
}
