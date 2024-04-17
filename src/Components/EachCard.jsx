const EachCard = ({data}) => {
    const {id,image,area,status,facilities,segment_name,description,price,location}= data ;
    
    return (
        <div>
            <img src={image} alt="" />
            <h2>{segment_name}</h2>
            <p>{description}</p>
            <p>{area}</p>
            <p>{facilities}</p>
            <p>{location}</p>
            <p>{price}</p>
            <p>{status}</p>
        </div>
    );
};

export default EachCard;