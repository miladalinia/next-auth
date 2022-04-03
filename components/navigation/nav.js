import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link'


const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Link href="/">My awesome app</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link href="/sign_in" passHref>
                    <Nav.Link>Sign in</Nav.Link>
                </Link>

                <Link href="/sign_out" passHref>
                    <Nav.Link>Sign out</Nav.Link>
                </Link>

                <Link href="/dashboard" passHref>
                    <Nav.Link>Dashboard</Nav.Link>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;