import React, { useState } from 'react';
import Popup from '../../components/shared/popup/Popup.component';
import CloseSVG from '../../components/shared/svg/Close.svg';
import MenuSvg from '../../components/shared/svg/Menu.svg';
import NavList from './NavList';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((toggle) => !toggle);
  };

  return (
    <>
      <button onClick={toggleModal}>
        <MenuSvg />
      </button>
      <Popup open={open}>
        <div className='popup absolute top-[60px] px-10 py-6 bg-slate-200 dark:bg-slate-800 right-4'>
          <div className='absolute top-2 right-2' onClick={toggleModal}>
            <CloseSVG />
          </div>
          <NavList />
        </div>
      </Popup>
    </>
  );
};

export default MobileNavbar;
