
import { FaDiscord, FaSteam, FaXbox, FaPlaystation, FaHandMiddleFinger, FaGamepad } from 'react-icons/fa';

const SideBar = () => {

    const loop = Array.from(Array(15).keys())

    return (
        <div className="fixed top-0 left-0 h-screen w-[4.5rem] m-0
                        flex flex-col
                        overflow-y-auto
                        bg-[#e3e5e8] dark:bg-[#202225] text-white ">

            <SideBarIcon icon={<FaDiscord size="28" />} />
            <Divider />
            <SideBarIcon icon={<FaSteam size="28" />} />
            <SideBarIcon icon={<FaXbox size="28" />} />
            <SideBarIcon icon={<FaPlaystation size="28" />} />

            {loop.map((key) => {


                return <SideBarIcon icon={<FaGamepad size="28" />} />
            })}


        </div>
    )




}

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => 

     (<div className="sidebar-icon group">
                {icon}

                {/* <span class="sidebar-tooltip group-hover:scale-75">
                    {text}
                </span> */}
            </div>
    )




const Divider = () => <hr className="sidebar-hr" />

export default SideBar;

