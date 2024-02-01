import styled from "styled-components";



const StyledTweet = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #ccc;

    .profile {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        gap: 0.5rem;
    }

    span {
        margin-block-start: 0.5rem;
        font-weight: bold;
    }

    img {    
        width: 50px;
        border-radius: 50%;
    }
    p {
        padding: 0.5;
        font-size: 1rem;
    }
`
interface TweetProps {
    profilePhoto: String;
    name: String;
    userName: String;
    content: String;
}

export const Tweet = (props: TweetProps) => {

    return(
            <StyledTweet>
                <div className="profile">
                    <div>
                        <img src={props.profilePhoto} alt="perfil"/>
                    </div>
                    <span>{props.name}</span>
                    <span>@{props.userName}</span>
                </div> 
                <p>{props.content}</p>
            </StyledTweet>
    )
}