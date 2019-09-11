import React from 'react';
import moon from './_assets/moon.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="https://ik.imagekit.io/61cms/61financial/cf3851ac9617370207eaa9a3347fed4a.png" className="logo61" alt="61logo" />
      <h1>
        <font className="text-red">中秋佳節</font>
        <font className="text-yellow">
          <font className="hao">好</font><font className="xiao-yao">逍遙</font>
        </font>
      </h1>
      <img src={moon} className="moon" alt="moon" />
    </header>
  );
}

export default Header;
