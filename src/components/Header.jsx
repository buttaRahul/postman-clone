import styled from "styled-components";

const StyledImage = styled.img`
  width: 100px;
  padding: 5px;
`;

const Header = () => {
  return (
    <div>
      <div>
        <StyledImage
          src="https://mostlovedworkplace.com/wp-content/uploads/2021/09/pm-logo-horiz.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
