export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto my-5 text-center">
      <h1 className="text-5xl font-bold">
        Rick & Morty -{" "}
        <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          GraphQl
        </span>
      </h1>
      {children}
    </main>
  );
};
