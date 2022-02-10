import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import NewPostForm from '.'

it('NewPostForm', async () => {
	const onSubmit = jest.fn()
	const postContent = 'This input is being tested'

	const { getByTestId } = render(
		<NewPostForm submitHandler={onSubmit} isTesting />
	)

	const input = getByTestId('newPostForm_input')
	const submitBtn = getByTestId('newPostForm_btn')

	await act(async () => {
		await fireEvent.change(input, { target: { value: postContent } })
		await fireEvent.click(submitBtn)

		expect(onSubmit).toBeCalledTimes(1)
		expect(onSubmit).toBeCalledWith(postContent)
	})
})
