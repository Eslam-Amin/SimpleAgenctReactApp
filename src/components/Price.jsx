
import { styled } from 'styled-components';
import PriceCard from '../components/priceCard';
import AnimatedShapes from './AnimatedShapes';


const Container = styled.div`
height:100%;
display:flex;
justify-content: center;
align-items: center ;
@media only screen and (max-width:480px) {
    flex-direction: column;
}
`


function Price() {
    return (
        <Container>
            <AnimatedShapes />
            <PriceCard price="10" type="Basic" />
            <PriceCard price="25" type="Premium" />
            <PriceCard price="30" type="Advanced" />
        </Container>
    )
}

export default Price
