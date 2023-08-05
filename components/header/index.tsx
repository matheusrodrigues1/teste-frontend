import Image from "next/image";
import Styles from "./header.module.scss"
import team from "../../public/images/team.svg"
import Link from "next/link";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logotipo}>
        <Image src={team} alt="logotipo" className={Styles.logotipo}/>
      </div>
      <div className={Styles.menu}>
            <Link href="/">Cadastrar novo prestador</Link>
            <Link href="/">Listar todos os prestadores</Link>
      </div>
      <div className={Styles.action}>
        <button className={Styles.button}>Fale conosco</button>
      </div>
    </div>
  )
}

export default Header;