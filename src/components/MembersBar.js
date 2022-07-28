import { useState } from 'react'
import { BsHash } from 'react-icons/bs'
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa'
import { SideBarIcon, SideBar} from "./SideBar"
import { FaDiscord, FaSteam, FaXbox, FaPlaystation, FaSmile } from 'react-icons/fa';



const topics = ["tailwind-css", "react-js"]
const questions = ["jit-compilation", "purging files", "dark/light mode"]
const random = ["npm packages", "plugins", "memes"]


const loop = Array.from(Array(15).keys())


const MemberBar = () => {

    return (

        <div className="Member-bar shadow-lg">
            
            <div className="Member-container">
                
                {loop.map((key) => {
                    
                    return  <Member name={`LightBearer${key+1}`} playing={"Destiny 2"} />
                })}
            </div>
        </div>


    )

}







const Divider = () => <hr className="Member-hr" />


const Member = ({ name, playing }) => {

    const seed = Math.round(Math.random() * 100);
    return (
        <div className={'member'}>
            <div className='member-avatar-wrapper'>
                <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='member-avatar' />
            </div>

            <div className='member-content'>
            <p className='member-owner'>
                    {name}
                </p>
                <p className='member-playing'>Playing {playing}</p>
            </div>
        </div>
    );
};
export default MemberBar