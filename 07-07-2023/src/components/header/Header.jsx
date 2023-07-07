import React, { useState } from "react";

import styles from "./Header.module.scss";

import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItems = [
    {
      id: 1,
      label: "A",
      items: [
        {
          id: 1,
          label: "A.1",
        },
        {
          id: 2,
          label: "A.2",
        },
        {
          id: 3,
          label: "A.3",
        },
      ],
    },
    {
      id: 2,
      label: "B",
      items: [
        {
          id: 1,
          label: "B.1",
        },
        {
          id: 2,
          label: "B.2",
        },
        {
          id: 3,
          label: "B.3",
        },
      ],
    },
  ];

  const handleOpenMenu = (item) => {
    if (item === openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(item);
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`flex align-items-center justify-content-between`}>
          <div className="col-3">Logo</div>
          <div className={`${styles.menu} col-6`}>
            <ul className={`${styles.menuItem} flex`}>
              {menuItems?.map((item) => (
                <li
                  key={item?.id}
                  onClick={() => {
                    handleOpenMenu(item?.id);
                  }}
                >
                  <div className={styles.menuItem__label}>
                    <span>{item?.label}</span>{" "}
                    <span>
                      <FaChevronDown />
                    </span>
                  </div>
                  <div
                    className={`${styles.menuItem__dropdown} 
                    
                    ${openMenu && openMenu === item?.id ? styles.open : ""}`}
                  >
                    <ul>
                      {item?.items?.map((subItem) => (
                        <li key={subItem?.id}>
                          <span>{subItem?.label}</span>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-3">Actions</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
