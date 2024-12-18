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
    <div>
      <h1 className="text-4xl font-bold text-slate-200 sm:text-5xl">{name}</h1>
      <h2 className="mt-2 text-lg font-medium text-slate-200 sm:text-xl">
        {role}
      </h2>
      <p className="mt-4 max-w-md leading-normal text-gray-400">
        {description}
      </p>
    </div>
  );
}
