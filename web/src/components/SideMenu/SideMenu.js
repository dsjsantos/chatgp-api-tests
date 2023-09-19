import React from "react";

import './SideMenu.css';

const SideMenu = (props) => {
    return(
        <aside className="sidemenu-wrapper">
            <div className="sidemenu-button">
                <span>+</span>
                Novo Chat
            </div>
        </aside>
    );
}

export default SideMenu;