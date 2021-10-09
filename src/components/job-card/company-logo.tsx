import logo1 from "../../assets/logos/logo1.svg"
import logo2 from "../../assets/logos/logo2.svg"
import logo3 from "../../assets/logos/logo3.svg"
import logo4 from "../../assets/logos/logo4.svg"
import logo5 from "../../assets/logos/logo5.svg"

const logos = {
    "logo1.svg": logo1,
    "logo2.svg": logo2,
    "logo3.svg": logo3,
    "logo4.svg": logo4,
    "logo5.svg": logo5
}

const Logo = ({logoName}:{logoName:string}) => {
    return (
        <img alt={logoName} src={logos[logoName as keyof typeof logos]} />
    );
};

export default Logo;