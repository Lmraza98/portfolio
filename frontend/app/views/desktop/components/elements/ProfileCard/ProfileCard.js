import styled from 'styled-components'
import Logo from "../Logo";
import { ScrollLink, ScrollLink } from '../ScrollLink'
import ProfileImage from '../ProfileImage'

const ProfileCardGrid = styled.div`
    display: grid;
    grid-template-rows: 15% 95%;
    padding-bottom: 10%;
    height: 80%;
    width: 100%;
`
const ProfileSpriteContainer = styled.div`
   
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    // padding-top: 10%;
    width: 100%;
    // height: 100%;
`
const Name = styled.div`
    font-size:30px;
    text-align: center;
    font-family: ${props => props.theme.navFont};
    color: white;
    grid-column-start: 1;
    grid-column-end: 2;
`
const Title = styled.div`
    font-size: 20px;
    text-align: center;
    font-family: ${props => props.theme.navFont};
    color: white;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
`
const Place = styled.div`
    font-size: 18px;
    text-align: center;
    font-family: ${props => props.theme.navFont};
    color: white;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
`
const ButtonContainer = styled.div`
    // align-self: start;
    padding-left:5px;
    padding-top:5px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
`
const LogoContainer = styled.div`
    align-self: center;
`
const PersonalInfoGrid = styled.div`
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    // padding-right: 5%;
    // margin-right: 5%;
    background-color: ${props => props.theme.sideColorSecondary};
    border-right: 10px solid ${props => props.theme.sideColorSecondary};
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    align-text: center;
    text-align: center;
    height: 50%;

`

export function ProfileCard({children}){
    return (
        <ProfileCardGrid>
            <ButtonContainer>
                {children}
            </ButtonContainer>
            
            <InfoContainer>
                <ProfileSpriteContainer>

                </ProfileSpriteContainer>
                <PersonalInfoGrid>
                    <Name>
                        Lucas Raza
                    </Name>
                    <Title>
                        Software Engineer
                    </Title>
                    <Place>
                        Boston, MA
                    </Place>
                </PersonalInfoGrid>
            </InfoContainer>   
        </ProfileCardGrid>
        
    )
}
