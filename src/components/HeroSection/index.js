import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {
    const [hover, sethover] = useState(false)

    const onHover = () => {
        sethover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg  autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
            <HeroH1>Price Checking Made Easy</HeroH1>
            <HeroP>
                Start looking for the products you want and we'll let you know when they're cheap!
            </HeroP>
            <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
                </HeroBtnWrapper>
                </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
