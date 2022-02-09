import { Navbar, Container, Button } from 'react-bootstrap'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { useUserContext } from '../../contexts'
import './style.css'

const CustomNavbar = () => {
	const { user, signOut } = useUserContext()

	return (
		<Navbar style={{ backgroundColor: '#5fd9fb' }} expand="lg">
			<Container>
				<Navbar.Brand className="brand_container">
					<BsFillHandThumbsUpFill className="brand_icon" /> Upvotes
				</Navbar.Brand>

				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text className="signin_text">
						Signed in as: {user}
					</Navbar.Text>
					<Button variant="outline-dark" onClick={signOut}>
						Sign out
					</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default CustomNavbar
