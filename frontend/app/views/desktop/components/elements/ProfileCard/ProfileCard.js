import styled from 'styled-components'

const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 10%;
    height: 100%;
    width: 100%;
`
const ProfileSpriteContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius 50%;
    background-color: white;
    // position: absolute;
    
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    align-self: start;

`
export function ProfileCard({children}){
    return (
        <ProfileCardContainer>
            <ButtonContainer>
                {children}
            </ButtonContainer>
            <ProfileSpriteContainer>

            </ProfileSpriteContainer>
            <InfoContainer>
                <Name>
                    Lucas
                </Name>
                <Title>
                    Software Engineer
                </Title>
                <Place>
                    Boston, MA
                </Place>
            </InfoContainer>   
        </ProfileCardContainer>
        
    )
}
