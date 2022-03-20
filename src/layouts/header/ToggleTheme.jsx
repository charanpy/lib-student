import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import { liStyle } from './helper';

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggler = theme === 'dark' ? 'light' : 'dark';

  return (
    <li className={`${liStyle} row`} onClick={() => setTheme(toggler)}>
      <img
        src={`/${toggler}.svg`}
        alt='theme'
        width={24}
        height={24}
        className='mr-2'
      />
      Theme
    </li>
  );
};

export default ToggleTheme;
