import { useSelector, useDispatch } from 'react-redux';
import {languageActions} from '../../src/store/language-slice';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  //To retrieve state:
  const language = useSelector((state) => state.language.language);

  const handleLanguageChange = (event) => {
    dispatch(languageActions.changeLanguageTo(event.target.value))
  };

  return (
    <div>
      <select role="languageSelector" data-testid="select-language" value={language} onChange={handleLanguageChange}>
        <option data-testid="en" key="en" value="en">English</option>
        <option data-testid="es" key="es" value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
