import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="bg-background">
        <div className="my-0 mx-auto min-h-screen max-w-screen-lg">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
