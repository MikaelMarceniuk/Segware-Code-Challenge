import { Navbar, Container, Button } from 'react-bootstrap'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import './style.css'

const CustomNavbar = () => {
	return (
		<Navbar style={{ backgroundColor: '#5fd9fb' }} expand="lg">
			<Container>
				<Navbar.Brand className="brand_container">
					<BsFillHandThumbsUpFill className="brand_icon" /> Upvotes
				</Navbar.Brand>

				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Button variant="outline-dark">Sign out</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default CustomNavbar
