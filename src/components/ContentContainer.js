import TopNavigation from "./TopNavigation"


const loop = Array.from(Array(40).keys())

const newArr = loop.slice().reverse();

const ContentContainer = () => {


    return (

        <div className="content-container ">
            <TopNavigation />
            <div className="content-list pt-20">
                <Post
                    name='Ada'
                    timestamp='42 weeks ago'
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                           amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                           adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                           ipsum dolor sit amet consectetur adipisicing elit.`}
                />
                <Post name='Leon' timestamp='41 weeks ago' text={`Lorem ipsum dolor. `} />
                <Post name='Jill' timestamp='41 weeks ago' text={`Lorem.`} />
                <Post
                    name='Ellie'
                    timestamp='41 weeks ago'
                    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
                /> 
                {newArr.map((key) => {
                    return <Post name={`Gamer${key+1}`} timestamp={`${key+1} week${key+1 <= 1 ? "" : "s"} ago`} text={`Lorem ipsum dolor. ${key+1} `} />
                })}
                

            </div>
            <BottomBar />
        </div>

    )

}


const BottomBar = () => (

    <div className="bottom-bar">

        <input type="text" placeholder="Enter message..." className="bottom-bar-input" />

    </div>


)

const Post = ({ name, timestamp, text }) => {

    const seed = Math.round(Math.random() * 100);
    return (
        <div className={'post'}>
            <div className='avatar-wrapper'>
                <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
            </div>

            <div className='post-content'>
                <p className='post-owner'>
                    {name}
                    <small className='timestamp'>{timestamp}</small>
                </p>
                <p className='post-text'>{text}</p>
            </div>
        </div>
    );
};


export default ContentContainer;