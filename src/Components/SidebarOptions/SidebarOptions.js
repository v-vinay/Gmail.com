import React from 'react'
import "./SidebarOptions.css";

function SidebarOptions({count, title, Icon, selected}) {
    return (
        <div className={`sidebar-options ${selected && "sidebar-options-active"}`}>
            <Icon />
            <h3> {title} </h3>
            <p> {count} </p>
        </div>
    )
}

export default SidebarOptions;
