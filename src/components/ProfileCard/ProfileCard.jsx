
export default function ProfileCard(props) {
    return (
        <>
            <div 
            className="item-card"
            style={{ backgroundImage: `url(${props.profile.img})` }}>
                <div>
                    <h1>{props.profile.name}</h1>
                    <h1>{props.profile.artist}</h1>
                </div>
            </div>
        </>
    );
}