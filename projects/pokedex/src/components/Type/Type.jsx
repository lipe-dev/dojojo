import styled from 'styled-components';
import {colors} from './constants';

const TypeWrapper = styled.div`
  color: white;
  font-size: 24px;
  background-color: ${({type}) => colors[type].background};
  padding: 8px;
  border-radius: 4px;
  border: 1px ${({type}) => colors[type].border} solid;
  text-transform: uppercase;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);
`

const Type = ({type}) => {
    return <TypeWrapper type={type}>{type}</TypeWrapper>
}

export default Type
