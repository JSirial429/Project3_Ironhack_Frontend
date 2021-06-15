import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg  autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroH1>Price Checking Made Easy</HeroH1>
            <HeroP>
                Start looking for the products you want and we'll let you know when they're cheap!
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup'>
                    Get started {hover ? <ArrowFoward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContainer>
    )
}

export default HeroSection;
