import React from "react";
import "./filter_Item.css";
import { styled } from "styled-components";

const StyledAuthor = styled.div`
position: absolute;
border-radius: 12px;
background: #313131;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
&::active, .--active:hover {
    color: #b672ff;
    border-color: #b672ff
};
& ::active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
}
`;

export const AuthorList = () => {
    return (
        <StyledAuthor>
            <div>Dynoro, Outwork, Mr. Gee</div>
            <div>Стоункат, Psychopath</div>
            <div>HYBIT, Mr. Black, Offer Nissim, Hi Profile</div>
            <div>Blue Foundation, Zeds Dead</div>
        </StyledAuthor>
    )
}
