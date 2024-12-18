import Image from "next/image";

interface HeaderProfileProps {
  name: string;
  role: string;
  description: string;
}

export default function HeaderProfile({
  name,
  role,
  description,
}: HeaderProfileProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="w-28 h-28 rounded-full border-4 border-slate-200"
        width={460}
        height={460}
        src="/assets/avatar.jpg"
        alt="Jean De Jesus"
      />
      <h1 className="font-bold text-slate-200 text-3xl">{name}</h1>
      <h2 className="text-lg font-medium text-slate-200">{role}</h2>
      <p className="mt-2 max-w-md leading-normal text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}
