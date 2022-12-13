import Link from "next/link";
import styles from "../dist/output.css";

export default function Header() {
  return (
    <header className="bg-amber-400 p-5 sticky top-0 flex flex-row">
      <Link className="basis-1/4" href="/">
        <img src="/" alt="Logo" />
      </Link>
      <nav className="text-xl md:text-2xl basis-3/4">
        <div className="text-right flex flex-row">
        <Link className="basis-1/4" href="/">About</Link>
        <Link className="basis-1/4" href="/">Services</Link>
        <Link className="basis-1/4" href="/">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
