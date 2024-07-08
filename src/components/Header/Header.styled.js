import styled from "styled-components";
import { MdDarkMode, MdOutlineLightbulb } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  padding: 2rem;

  .logo {
    height: 4rem;
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;

export const LightmodeIcon = styled(MdOutlineLightbulb)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;

export const DarkmodeIcon = styled(MdDarkMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
