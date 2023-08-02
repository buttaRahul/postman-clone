import styled from "styled-components";
import Header from "./Header";


const StyledImage = styled.img`
    width: 100px;
    padding:5px;
`;

const Home = () => {
  return (
    <div>
        <StyledImage src="https://mostlovedworkplace.com/wp-content/uploads/2021/09/pm-logo-horiz.png" alt="logo"/>
    </div>
  )
}

export default Home