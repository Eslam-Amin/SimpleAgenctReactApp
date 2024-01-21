
import React, { useState } from "react";
import { styled } from 'styled-components';
import How from "../img/how.png"
import MiniCard from './MiniCard';
import Play from "../img/play.png"

const Container = styled.div`
display: flex;
height: 100%;
@media only screen and (max-width:480px) {

        flex-direction: column;
}
`

const Left = styled.div`
width:50%;
position: relative;
@media only screen and (max-width:480px) {

    display:none;
}
`

const Right = styled.div`
width:50%;
@media only screen and (max-width:480px) {
    width: 100%;
    
}
`

const Image = styled.img`
display:${props => props.isVideoOpened && "none"};
height: 99%;
margin-left: 100px;
margin-top: 5%;
width: 90%;
`

const Video = styled.video`
display:${props => !props.isVideoOpened && "none"};
height:300px ;
position: absolute;
top:0;
bottom: 0;
margin:auto;
right:0;

@media only screen and (max-width:480px) {
width: 100%;
}
`

const Wrapper = styled.div`
padding:50px;
display:flex;
flex-direction: column;
@media only screen and (max-width:480px) {
    padding: 20px;   
}
`


const Title = styled.h1`

`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color:#555;
`

const CardContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`

const Button = styled.button`
width: 180px;
border:none;
border-radius: 10px;
background-color: darkblue;
font-size: 20px;
padding:15px;
margin: 50px;
cursor: pointer;
display: flex;
align-items: center;
`

const Icon = styled.img`
width: 20px;
margin-right: 10px;
`


const Modal = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);
`

const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border:none;
    border-radius: 5px;
    right: 5px;
    top: 30%;
    width: 20%;
    display: ${props => !props.isCloseShown && !props.smallScreen && ("none")};
`
function Service({ smallScreen }) {
    const [isCloseShown, setCloseShown] = useState(false)
    const [isVideoOpened, setVideoOpen] = useState(false);
    return (
        <Container>
            <Left>
                <Image isVideoOpened={isVideoOpened} src={How} />
                <Video
                    isVideoOpened={isVideoOpened}
                    autoPlay
                    loop
                    controls
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                />
                <CloseButton isCloseShown={isVideoOpened} onClick={() => { setVideoOpen(false); setCloseShown(false) }}>Close</CloseButton>

            </Left>
            <Right>
                <Wrapper>
                    <Title> Simple Process to start </Title>
                    <Desc>
                        We provide digital experience services to startups and small
                        businesses to looking for a partner of their digital media, design &
                        development, lead generation and communications requirents. We work
                        with you, not for you. Although we have a great resources
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => { setVideoOpen(true); setCloseShown(true) }} >
                        <Icon src={Play} />
                        How it Works
                    </Button>
                </Wrapper>
            </Right>
            {(smallScreen && isVideoOpened) &&
                (<Modal>
                    <Video
                        isVideoOpened={isVideoOpened}
                        autoPlay
                        loop
                        controls
                        src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                    />
                    <CloseButton isCloseShown={isVideoOpened} onClick={() => setVideoOpen(false)}>Close</CloseButton>
                </Modal>)}
        </Container>
    )
}

export default Service
