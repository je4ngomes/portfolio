import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className="flex flex-col justify-start pt-24 pl-12 sticky top-0">
      <div>
        <h1 className="text-4xl font-bold text-txt-primary sm:text-5xl">
          Jean Gomes
        </h1>
        <h2 className="mt-2 text-lg font-medium text-txt-primary sm:text-xl">
          Software Developer
        </h2>
        <p className="mt-4 max-w-md leading-normal text-txt-secundary">
          I enjoy building things that live on the internet.
        </p>
      </div>
      <Nav />
    </header>
  );
}
