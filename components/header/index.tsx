import Image from "next/image";
import Styles from "./header.module.scss"
import team from "../../public/images/team.svg"
import Link from "next/link";
import CadastroPrestadorForm from "../cadastroPrestador/index";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logotipo}>
        <Image src={team} alt="logotipo" className={Styles.logotipo}/>
      </div>
      <div className={Styles.menu}>
            <Link href="/cadastro">Cadastrar novo prestador</Link>
            <Link href="/importacao">Importar serviços</Link>
      </div>
      <div className={Styles.action}>
        <button className={Styles.button}>Fale conosco</button>
      </div>
    </div>
  )
}

export default Header;