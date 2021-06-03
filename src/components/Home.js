import React from 'react'
import styled from 'styled-components'
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';


function Home() {
    return (
        <Container>
            <Wrap>
            <Tada>

            <h1>
                Potter’s Delivery provides you Convenience, 
                Enjoyable, and Satisfactory experience.</h1></Tada>

                <img src="/images/image 6.png" alt=""></img>



            </Wrap>
            <RightWrap>
                <CustomeCard>
                    <Fade bottom>
                
                    <h1>Quick register as a rider:</h1>
                    <p>Phone number:</p>
                    <input type="number"></input>
                    <p>Name</p>
                    <input></input>
                    <p>HKID/Identity prove</p>
                    <input></input>
                    <p>Email</p>
                    
                    <input type="email"></input>
                    <h2>*When your form is well-received, we will contact you as soon as possible.</h2>
                    </Fade>

                    <Button>Submit</Button>
                
                </CustomeCard>
            </RightWrap>

        </Container>
    )
}

export default Home

const Container = styled.div`
align-items: center;
justify-content: space-between;
display: flex;
width: 100vw;
height: 100vh;
object-fit: cover;
background-image: url('/images/background2.png');
background-size: cover;


`

const Wrap = styled.div`
flex-direction: columns;
justify-content: center;
width: 40vw;
height: 30vh;
padding-left: 60px;
text-align: center;
h1{
    color: #262626;
    opacity: 0.7;
    
}
img{
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

@media(max-width:831px) {
    flex-direction: columns;
    font-size: 12px;
    width: 100vw;
    align-items: center;
    justify-content: center;
}`

const RightWrap = styled.div`
padding-right: 80px;
display: flex;
flex-direction:column;
`

const CustomeCard = styled.div`
background-color: white;
width: 30vw;
height: 75vh;
align-items: center;
justify-content: start;
padding: 0 20px;
h1{
    font-size: 25px;
    font-weight: 500;
}
p{
    font-size: 14px;
    font-weight: 400;
}
input{
    width: 95%;
    height: 5vh;
    
}
h2{
    font-size: 12px;
    font-weight: 200;
}
@media (max-width:1000px) {
    display: none;
}`


const Button = styled.button`
width: 220px;
height: 50px;
background: black;
color: white;
cursor: pointer;
margin-top: 40px;`