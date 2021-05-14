import styled from 'styled-components'
import Logo from "../Logo";
import { ScrollLink, scroller } from '../ScrollLink'

const ProfileCardGrid = styled.div`
    display: grid;
    grid-template-rows: 15% 95%;
    padding-bottom: 10%;
    height: 80%;
    width: 100%;
`
const ProfileSpriteContainer = styled.div`
    // width: 100;
    // height: 100;
    padding: 25%;
    border-radius 50%;
    background-color: white;
    align-self: center;
    grid-row-start: 2;
    grid-row-end: 3;
    margin: 5%;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // padding-top: 10%;
    width: 100%;
    // height: 100%;
`
const Name = styled.div`
    font-size:35px;
    text-align: center;
    font-family: ${props => props.theme.navFont};
    color: ${props => props.theme.textColor};
`
const Title = styled.div`
    font-size: 20px;
    text-align: center;
    font-family: ${props => props.theme.navFont};
    color: ${props => props.theme.textColor};
`
const Place = styled.div`
    font-size: 18px;
    text-align: center;
    font-family: ${props => props.theme.navFont};
    color: ${props => props.theme.textColor};
`
const ButtonContainer = styled.div`
    // align-self: start;
    padding-left:5px;
    padding-top:5px;
    grid-row-start: 1;
    grid-row-end: 2;
`
const LogoContainer = styled.div`
    align-self: center;
`
const PersonalInfoContainer = styled.div`
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    // padding-right: 5%;
    // margin-right: 5%;
    background-color: #e08e22;
    border-right: 20px solid #e08e22;
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
                <PersonalInfoContainer>
                    <Name>
                        Lucas
                    </Name>
                    <Title>
                        Software Engineer
                    </Title>
                    <Place>
                        Boston, MA
                    </Place>
                </PersonalInfoContainer>
            </InfoContainer>   
        </ProfileCardGrid>
        
    )
}
