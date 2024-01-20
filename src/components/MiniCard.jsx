
import { styled } from 'styled-components';
import Search from "../img/search.png";


const Container = styled.div`

width: 100px;
display:flex;
padding: 20px;
flex-direction:column;
align-items: center;
box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
@media only screen and (max-width:480px) {
    width: 50px;

    
}

`
const Image = styled.img`
width: 20px;

`
const Text = styled.div`
margin-top: 10px;
text-align: center;
@media only screen and (max-width:480px) {
font-size: 14px;
}
`



function MiniCard() {
    return (
        <Container>
            <Image src={Search} />
            <Text>Lorem Ipsum dolor sit amet consectetur</Text>
        </Container>
    )
}

export default MiniCard
