import styles from "../dist/output.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="bg-amber-400 p-5 sticky top-0">
          <h1 className="text-2xl md:text-4xl">Header</h1>
        </header>

        <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
            <h1 className="text-2xl md:text-4xl">Sidebar</h1>
          </aside>
          <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
            <h1 className="text-2xl md:text-4xl">Main Content</h1>
            {children}
          </main>
        </div>

        <footer className="bg-slate-800 mt-auto p-5">
          <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
        </footer>
      </body>
    </html>
  );
}
