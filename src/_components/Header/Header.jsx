import React, { useEffect } from 'react';
import './Header.css';

// X'Mas
import Snow from '../../_components/Snow/Snow';
import XmasTree from './_assets/xmas_tree.png';

// Moon Festival
import moon from './_assets/moon.png';

function Header({ theme }) {
  useEffect(() => {
    const title = theme === 'xmas' ? '61 歡樂耶誕城' : '61 中秋佳節好逍遙'
    document.title = title
  })

  return (
    <header className={`header ${theme}`}>
      <img src="https://ik.imagekit.io/61cms/61financial/cf3851ac9617370207eaa9a3347fed4a.png" className="logo61" alt="61logo" />

      {
        theme === 'xmas' ?
        (
          <div className="header-content">
            <Snow />
            <h1>
              <font className="text-green tilt-left">歡樂</font>
              <font className="text-red text-large">
                耶誕城
              </font>
            </h1>
            <img src={XmasTree} className="xmas-tree" alt="xmas_tree" />
          </div>
        ) :
        (
          <div className="header-content">
            <h1>
              <font className="text-red">中秋佳節</font>
              <font className="text-yellow">
                <font className="text-large">好</font><font className="tilt-right">逍遙</font>
              </font>
            </h1>
            <img src={moon} className="moon" alt="moon" />
          </div>
        )
      }
    </header>
  );
}

export default Header;
