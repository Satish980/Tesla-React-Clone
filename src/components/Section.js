import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImage, leftButtonText, rightButtonText }) {
    return (
        <Wrap bgImage={backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Button>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                        {rightButtonText &&
                            <RightButton>
                                {rightButtonText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>

                <DownArrow src="/images/down-arrow.svg" />
            </Button>
        </Wrap >
    );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction:column;
  justify-content: space-between; //vertical
  align-items: center; // horizontal
  background-image: ${props => `url(${props.bgImage})`};
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity: 0.85;
    text-transform:uppercase;
    fonst-size:12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.85;
`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Button = styled.div`

`
