import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom'

const navMenus = [
    {
        path: "/projects",
        title: "Add Project"
    },
    {
        path: "/tasks",
        title: "Add Task"
    },
    {
        path: "/users",
        title: "Add User"
    },
    {
        path: "/task/details",
        title: "View task"
    }
];

export default class NavHeader extends PureComponent {
    render() {
        return (
            <div>
                <ul class="nav justify-content-center">
                    {navMenus.map(navItem => (
                        <li key={navItem.title} class="nav-item">
                            <NavLink className="nav-link" to={navItem.path}>{navItem.title}</NavLink>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}
