import { styled } from "styled-components";

export const FilterTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 40px 20px 111px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  gap: 15px;
  background-color: black;
`;

export const FilterContent = styled.div`
  padding: 20px 40px 20px 111px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  gap: 15px;
  background-color: black;
`;
export const FilterButton = styled.button`
width: 144px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
color: white;
background-color: black;
& :not(:last-child) {
margin-right: 10px;
};
&:hover {
    border-color: ${(props) => (props.$isActive ? "#ffffff" : "#d9b6ff")};
    color: ${(props) => (props.isActive ? "#ffffff" : "#d9b6ff")};
    cursor: pointer;
    
      }
}`;

export const Author = styled.div`
position: absolute;
border-radius: 12px;
background: #313131;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
;`

export const Year = styled.div`
position: absolute;
border-radius: 12px;
background: #313131;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`;

export const Genre = styled.div`
position: absolute;
border-radius: 12px;
background: #313131;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`;