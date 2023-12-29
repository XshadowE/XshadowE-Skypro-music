import React from "react";
import { styled } from "styled-components";

const StyledYear = styled.div`
position: absolute;
border-radius: 12px;
background: #313131;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`;

export const YearList = () => {
    return (
        <StyledYear>
            <div>1990</div>
            <div>2000</div>
            <div>2010</div>
            <div>2020</div>
        </StyledYear>
    )
}