import { Link } from "react-router-dom";
import LogoIcon from "@/assets/icons/Logo.svg";
import { SOLE_PROP_NAV_LINKS } from "@/constants/navigation";

const SideBar = () => {
  return (
    <aside className="w-[250px] h-screen p-[16px] bg-primary-dark dark:bg-primary-light">
      <div className="flex items-center gap-[16px]">
        <img src={LogoIcon} alt="Logo" />
        <h5 className="font-bold text-2xl text-primary-light dark:text-primary-dark">
          Yariga
        </h5>
      </div>
      <nav className="pt-[32px]">
        {SOLE_PROP_NAV_LINKS.map((link) => (
          <Link
            className={`w-full cursor-pointer ease-in duration-200 bg-transparent hover:bg-primary rounded-[12px] py-[16px] px-[24px] flex items-center gap-[16px]`}
            key={link.path}
            to={link.path}
          >
            <img
              src={link.icon}
              alt={link.title}
              className="color-bg-primary-light w-[24px] h-[24px]"
            />
            <p className="text-primary-light dark:text-primary-dark">
              {link.title}
            </p>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
