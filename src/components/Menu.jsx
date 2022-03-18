import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return <>
        <div className={styles.menu}>
            <div className={styles.name}>
                Lamia Ouassaa
            </div>
            <div className={styles.options}>
                <h1><Link to="/" /*className={ ({isActive}) => isActive ? styles.active : ''}*/>Home</Link></h1>
                <h1><Link to="/ProjectsMainPage">Projects</Link></h1>
                <h1><Link to="/Contact">Contact</Link></h1> 
            </div>             
        </div>  
    </>
}