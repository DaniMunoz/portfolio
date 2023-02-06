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
    <header className="bg-gradient-to-br from-rose-100 via-slate-300 to-teal-100 p-5 sticky top-0 flex flex-row z-10">
      <Link className="basis-1/4" href="/">
        {/*<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      </Link>
      <nav className="md:text-2xl basis-3/4">
        <div className="flex flex-row-reverse">
          <LanguageSelector />&nbsp;&nbsp;&nbsp;
          <Link href="/" className="font-normal bg-teal-400 hover:bg-teal-500 text-white py-1 px-2 rounded-lg border-0 hover:rounded">{languageStrings["header.contact"]}</Link>&nbsp;&nbsp;&nbsp;
          <Link href="/" className="font-normal bg-slate-400 hover:bg-slate-500 text-white py-1 px-2 rounded-lg border-0 hover:rounded" onClick={handleHideProjects}>{languageStrings["header.qualifications"]}</Link>&nbsp;&nbsp;&nbsp;
          <Link href="/" className="font-normal bg-rose-400 hover:bg-rose-500 text-white py-1 px-2 rounded-lg border-0 hover:rounded" onClick={handleShowProjects}>{languageStrings["header.projects"]}</Link>&nbsp;&nbsp;&nbsp;
        </div>
      </nav>
    </header>
  );
}
