import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-background">
        <Header />
        <main className="px-3">
          <div className="my-0 mx-auto min-h-screen max-w-screen-lg h-auto">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
