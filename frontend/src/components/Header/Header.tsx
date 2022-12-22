import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from '../../styles/Header.module.css';

export default function Header() {

    return (
      <Navbar expand="lg" className={styles.navBarContainer}>
        <Container>
          <Navbar.Brand href="/" className="headerLogo--container">
            <img
              alt=""
              src="https://via.placeholder.com/30x30"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius:'50%'}}
            />{' '}
            Territorio Bohemian
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.menuToggler} />
          <Navbar.Collapse className="justify-content-end">
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Link href="/servicios" className={styles.navBarText}>Servicios</Link>
            <Link href="#action2" className={styles.navBarText}>Sobre nosotros</Link>
          </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

