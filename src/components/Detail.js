import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import db from '../firebase'

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(); //

    useEffect(() => {
        //grab the movies from db
        db.collection('movies')
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                //Save the movies data
                setMovie(doc.data());
            }else{
                //not exists: redirect to home page
            }
        })

    }, [id])

    return (
        <Container>
            {movie && (
                <>
                 <Background>
                 <img src={movie.backgroundImg} />
             </Background>
             <ImgTitle>
                 <img src={movie.titleImg} />
             </ImgTitle>
             <Controls>
                 <PlayButton>
                     <img src ="/images/play-icon-black.png" />
                     <span>PLAY</span>
                 </PlayButton>
 
                 <TrailerButton>
                 <img src ="/images/play-icon-white.png" />
                     <span>TRAILER</span>
                 </TrailerButton>
 
                 <AddButton>
                     <span>+</span>
                 </AddButton>
 
                 <GroupWatchButton>
                     <img src ="/images/group-icon.png"/>
                 </GroupWatchButton>
             </Controls>
             <SubTitle>
                 {movie.subTitle}
             </SubTitle>
             <Description>
                 {movie.description}
             </Description>
             </>
            )}
           
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh- 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    padding: 20px;
    margin-top: 100px;
`

const Background = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right:0;
    bottom:0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%; 
        obj-fit: cover;
    }
`

const ImgTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-bottom: 30px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display:flex;
    height: 56px;
    align-items: center;
    margin-left: 100px;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    height: 56px;
    align-items: center;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0, 0.3);
    border: 1px solid rgb(198, 198, 198);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0,0,0, 0.6);
    cursor: pointer;
    margin-right: 22px;
    transition: all 250ms; 

    span{
        font-size: 30px;
        color: white;
    }

    &:hover{
        background: rgb(0,0,0);
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
    &:hover{
        background: rgba(0,0,1, 0.6);

    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    margin-top: 26px;
    min-height: 20px;
    font-size: 15px;
    margin-left: 100px

`

const Description = styled.div`
    color: rgb(249, 249, 249);
    margin-top: 16px;
    min-height: 20px;
    font-size: 20px;
    line-height: 1.4;
    width: 65%;
    margin-left: 100px

`