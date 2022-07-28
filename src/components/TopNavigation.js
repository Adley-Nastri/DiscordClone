import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaInbox,
    FaQuestionCircle,
    FaMapPin,
    FaUserFriends
} from 'react-icons/fa'



const TopNavigation = () => {

    return (

        <div className="top-navigation fixed max-w-screen">
            <HashtagIcon/>
            <Title/>
            <BellIcon/>
            <Pin/>
            <Members/>
            <Search/>
            <Inbox/>
            <Help/>
        </div>

    )
}
const HashtagIcon = () => <FaHashtag size="24" className="title-hashtag" />;
const Title = () => <h5 className='title-text'>#current_channel_hook</h5>

const Search = () => (

    <div className="search">
        <input className="search-input" type="text" placeholder="Search..." />
        <FaSearch size="18" className="text-secondary my-auto" />
    </div>


);
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const Pin = () => <FaMapPin size="24" className="top-navigation-icon" />;

const Members = () => <FaUserFriends size="24" className="top-navigation-icon" />;
const Inbox = () => <FaInbox size="24" className="top-navigation-icon" />;

const Help = () => <FaQuestionCircle size="24" className="top-navigation-icon" />;


export default TopNavigation;