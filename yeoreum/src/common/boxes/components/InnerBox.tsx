import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode,
  size: number[],
  value: number
}

function InnerBox(props:Props) {
  return (  
    <Wrapper size={props.size} value={props.value} >{props.children}</Wrapper>
  )
}

export default InnerBox;

const Wrapper = styled.div<{size: number[], value: number}>`
  width: ${(props) => props.size[0]}px;
  height: ${(props) => props.size[1]}px;
  ${({ theme }) => theme.common.inner};
  box-shadow: ${({value}) => `inset ${value}px ${value}px ${value*2}px #a3a3a9, inset -${value}px -${value}px -${value*2}px #ffffff`}
`;