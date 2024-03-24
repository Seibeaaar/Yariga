import { AppTheme } from "@/customization/ThemeContext";
import { FC, useState, SVGProps, useMemo } from "react";
import { Link } from "react-router-dom";

type NavLinkProps = {
  title: string;
  path: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  theme: AppTheme;
  isCurrentPath: boolean;
};

const NavLink: FC<NavLinkProps> = ({
  title,
  path,
  theme,
  isCurrentPath,
  icon,
}) => {
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  const toggleHoverState = (isOn: boolean) => setMouseOn(isOn);

  const textColor = useMemo(() => {
    if (theme === "light") {
      return mouseOn ? "primary-dark" : "primary-light";
    }
    return "primary-dark";
  }, [theme, mouseOn]);

  const iconColor = useMemo(() => {
    if (theme === "light") {
      if (mouseOn) {
        return "#FCFCFC";
      }
      return isCurrentPath ? "##1A1D1F" : "#808191";
    }
    return mouseOn || isCurrentPath ? "#FCFCFC" : "#808191";
  }, [theme, mouseOn, isCurrentPath]);

  const Icon = icon;

  return (
    <Link
      to={path}
      onMouseLeave={() => toggleHoverState(false)}
      onMouseEnter={() => toggleHoverState(true)}
      className={`w-full cursor-pointer py-[16px] px-[24px] ease-in duration-200 bg-transparent hover:bg-primary rounded-[12px] flex items-center gap-[16px]`}
    >
      <Icon width={24} height={24} fill={iconColor} />
      <p
        className={`${
          isCurrentPath ? "font-semibold" : "font-normal"
        } text-${textColor}`}
      >
        {title}
      </p>
    </Link>
  );
};

export default NavLink;
