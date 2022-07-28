import { useState } from 'react'
import { BsHash } from 'react-icons/bs'
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa'



const topics = ["tailwind-css", "react-js"]
const questions = ["jit-compilation", "purging files", "dark/light mode"]
const random = ["npm packages", "plugins", "memes"]
const ChannelBar = () => {

    const loop = Array.from(Array(6).keys())

    return (

        <div className="channel-bar shadow-lg">
            <ChannelBlock />
            <Divider />
            <div className="channel-container">
                <Dropdown header="Topics" selections={topics} />
                <Dropdown header="Questions" selections={questions} />
                {loop.map((key) => {
                    
                    return   <Dropdown header={`Random${key+1}`} selections={random} />
                })}
              

            </div>
        </div>


    )

}

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);


    return (

        <div className="dropdown">

            <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
                <ChevronIcon expanded={expanded} />
                <h5
                    className={expanded ? "dropdown-header-text-selected" : "dropdown-header-text"}>
                    {header}
                </h5>
                <FaPlus size="12" className="text-accent text-opacity-80 my-auto ml-auto" />
            </div>


            {expanded &&
                selections &&
                selections?.map((selection) => <TopicSelection selection={selection} />)}

        </div>

    )

}

const ChevronIcon = ({ expanded }) => {

    const chevClass = "text-accent text-opacity-80 my-auto mr-1";
    return expanded ? (

        <FaChevronDown size="14" className={chevClass} />

    ) : (
        <FaChevronRight size="14" className={chevClass} />
    );

}


const TopicSelection = ({ selection }) => (

    <div className="dropdown-selection">
        <BsHash size="24" className="text-gray-400 dark:text-white" />
        <h5 className="dropdown-selection-text">{selection}</h5>
    </div>
)

const ChannelBlock = () => (
    <div className="channel-block">
        <h5 className="channel-block-text ">Discord Server</h5>
    </div>
)
const Divider = () => <hr className="channel-hr" />
export default ChannelBar