import { NavLink } from "react-router-dom";

const Logo = ({fontSize, imageSize}) => {
  return (
    <h1 className={`font-display text-on-background ${fontSize} flex items-center font-semibold gap-1`}>
        <img src="linkvault_logo.jpeg" alt="" className={`${imageSize}`} />
        LinkVault
    </h1>
  );
};

export default Logo;
