import Image from "next/image";
//import styles from "../dist/output.css";

export default function SideBar() {
  return (
    <aside className="bg-green-300 md:w-1/3 lg:w-1/5 px-5 py-40">
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <h1 role="name" className="text-2xl md:text-4xl">Daniel Muñoz Gil</h1>
      <h2 role="title">Software Developer</h2>
      <Image role="toque" src="/images/toque.png" alt="image" width={200} height={25} />
    </aside>
  );
}
