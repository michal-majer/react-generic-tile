import React from 'react'
import styled from 'styled-components'

const NumericContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  color: ${props => props.color};
`;

const Number = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 2.5rem;
  line-height: 3rem;
  padding: 0 5px;
`;

const ScaleAndIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%:
  padding: 0 5px;
`;

const Scale = styled.div`
  margin-top: 0.3rem;
  font-size: 1rem;
`;

const Indicator = styled.div`
  ${props => props.indicator === 'Up' ? 'border-bottom: 0.625rem solid' : 'border-top: 0.625rem solid' }
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent
`;

const Numeric = ({number, scale, indicator, color, icon}) => (
  <NumericContent color={color}>
    {icon}
    <Number>{number}</Number>
    <ScaleAndIndicatorContainer>
      { indicator === 'Up' || indicator === 'Down' ? <Indicator indicator={indicator}/ > : null }
      <Scale>{scale}</Scale>
    </ScaleAndIndicatorContainer>
  </NumericContent>
)

export default Numeric
