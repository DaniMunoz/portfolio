import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "../languageSelector/languageSelector";

//import styles from "../dist/output.css";

export default function Header() {
  return (
    <header className="bg-amber-400 p-5 sticky top-0 flex flex-row">
      <Link className="basis-1/4" href="/">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </Link>
      <nav className="text-xl md:text-2xl basis-3/4">
        <div className="flex flex-row-reverse">
          <LanguageSelector />&nbsp;&nbsp;&nbsp;
          <Link href="/contact">Contact</Link>&nbsp;&nbsp;&nbsp;
          <Link href="/qualifications">Qualifications</Link>&nbsp;&nbsp;&nbsp;
          <Link href="/projects">Projects</Link>&nbsp;&nbsp;&nbsp;
        </div>
      </nav>
    </header>
  );
}
