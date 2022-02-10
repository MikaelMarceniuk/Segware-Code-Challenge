import { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useHomePageContext } from '../../pages/home'
import './style.css'

const NewPostForm = () => {
	const [postContent, setPostContent] = useState('')
	const { onSharePost } = useHomePageContext()

	const handleSubmit = async () => {
		const isSuccess = await onSharePost(postContent)
		if (isSuccess) setPostContent('')
	}

	return (
		<div className="wrapper">
			<Form.Group>
				<Form.Label>Create a new post</Form.Label>
				<Form.Control
					className="form_textarea"
					as="textarea"
					placeholder="Insert what you are thinking here 😊"
					rows={3}
					onChange={(e) => setPostContent(e.target.value)}
					value={postContent}
				/>
			</Form.Group>

			<Col className="d-grid form_btn_container">
				<Button variant="primary" onClick={handleSubmit}>
					Share
				</Button>
			</Col>
		</div>
	)
}

export default NewPostForm
