import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-background">
        <Header />
        <main>
          <div className="my-0 mx-auto min-h-screen max-w-screen-lg">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
