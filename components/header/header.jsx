import { useSelector, useDispatch } from 'react-redux';
import {showProjectsActions} from '../../src/store/showProjects-slice';
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "../languageSelector/languageSelector";
import languageData from '../../public/json/languages.json' assert { type: 'JSON' };

export default function Header() {
  const dispatch = useDispatch();
  //Obtain current language from redux store
  const language = useSelector((state) => state.language.language);
  const languageStrings = languageData[0][language];

  const handleShowProjects = (event) => {
    dispatch(showProjectsActions.changeShowProjectsTo(true));
  };

  const handleHideProjects = (event) => {
    dispatch(showProjectsActions.changeShowProjectsTo(false));
  };

  return (
    <header className="bg-amber-400 p-5 sticky top-0 flex flex-row z-10">
      <Link className="basis-1/4" href="/">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </Link>
      <nav className="text-xl md:text-2xl basis-3/4">
        <div className="flex flex-row-reverse">
          <LanguageSelector />&nbsp;&nbsp;&nbsp;
          <Link href="/">{languageStrings["header.contact"]}</Link>&nbsp;&nbsp;&nbsp;
          <Link href="/"  onClick={handleHideProjects}>{languageStrings["header.qualifications"]}</Link>&nbsp;&nbsp;&nbsp;
          <Link href="/" onClick={handleShowProjects}>{languageStrings["header.projects"]}</Link>&nbsp;&nbsp;&nbsp;
        </div>
      </nav>
    </header>
  );
}
