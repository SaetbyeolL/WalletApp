import React from 'react'
import {useSelector} from "react-redux";

function DefaultLayout({children}){
    const [collapsed, setCollapsed] = React.useState(false);
    const {user} = useSelector((state) => state.users);

    return (
        <div className='layout'>
            <div className = 'sidebar'>Sidebar</div>
            <div className = 'body'>
                <div className = "header flex justify-between items-center">
                    <div className="text-white">
                    {collapsed && <i class="ri-close-line"
                        onClick= {()=> setCollapsed(!collapsed)}
                    ></i>}
                    {!collapsed && <i class="ri-menu-2-line"
                        onClick= {()=> setCollapsed(!collapsed)}
                    ></i>}
                    </div>

                    <div>
                        <h1 className="text-xl text-white">
                            STELLA WALLET
                        </h1>
                    </div>

                    <div>
                        <h1 className= "text-sm underline text-white">
                            {user?.firstName} {user?.lastName}
                        </h1>
                    </div>
                </div>
                <div className = 'content'>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout