
import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import classes from './main-header.module.css'
import Navlink from './nav-link';

export default function MainHeader(){
    return(
        <header className={classes.header}>
            <Link href='/' className={classes.logo}>
                <Image src={logoImg}  alt="logo plate"  priority/>
                NextLevel Food

            </Link>

            <nav className={classes.nav}>
                <ul >
                    <li>
                        <Navlink href='/meals'>Browse Meals</Navlink>
                    </li>
                    <li>
                        <Navlink href='/community'>Join Community</Navlink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}