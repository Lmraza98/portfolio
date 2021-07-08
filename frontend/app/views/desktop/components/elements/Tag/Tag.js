import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../../../../contexts/GlobalContext' 

const TagContainer = styled.div`
    border: ${props => '3px solid ' + props.color};
    background-color: ${props => props.selected ? 'white' : props.color};
    height: 25px;
    color: ${props => props.selected ? props.color : 'white' };
    // margin: ${props => props.selected ?  '-3px' : '0px' };
    // padding-top: ${props => props.selected ?  '-3px' : '0px' };
    // width: ${props => props.selected ? 'calc(auto - 6px)' : 'auto'};
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 10px;
    // color: white;
    border-radius: 20px;
`


const Tag = ({name, color, selectable, keyValue}) => {
    const [ select, setSelect ] = useState(false)
    const [ state, dispatch ] = useContext(GlobalContext)
    const onClick = (e) => {
        e.preventDefault()
        if(select)
        {
            dispatch({type: 'REMOVE_CATEGORY', payload: name})
            setSelect(!select)
        }else{
            dispatch({type: 'ADD_CATEGORY', payload: name})
            setSelect(!select)
        }
    }
    return (
        selectable ? 
            <TagContainer key={keyValue} name={name} onClick={onClick} color={color} selected={select}>
            {
                name ? name : ""
            }
            </TagContainer>
            :
            <TagContainer selected={false} key={keyValue} color={color}>
            {
                name ? name : ""
            }
            </TagContainer>

        
    )
}

export default Tag
