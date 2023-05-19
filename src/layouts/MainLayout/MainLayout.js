import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MainLayout = ({ children }) => {
    return (
        <Container>

            <Navbar expand="lg" variant="dark" bg="danger">
                <Navbar.Brand className="p-2"  href="#">React test app</Navbar.Brand>
            </Navbar>
            <Container>
                {children}
            </Container>
        </Container>
    )
}

export default MainLayout