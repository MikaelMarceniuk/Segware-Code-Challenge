import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import FeedReaction from '.'

describe('FeedReaction', () => {
	const onClick = jest.fn()
	const feedId = 500
	const count = 5

	const testOnClick = async (
		element: HTMLElement,
		expectedUpvoteValue: boolean | undefined
	) => {
		await act(async () => {
			await fireEvent.click(element)
			expect(onClick).toBeCalledTimes(1)
			expect(onClick).toBeCalledWith(feedId, expectedUpvoteValue)
		})
	}

	beforeEach(() => {
		onClick.mockClear()
	})

	it('Upvote Reaction', async () => {
		const { getByTestId } = render(
			<FeedReaction
				count={count}
				feedId={feedId}
				onClickHandler={onClick}
				isUpvote
				isTesting
			/>
		)

		// Verify Click
		await testOnClick(getByTestId('upvote_feedReaction_container'), true)
	})

	it('Love Reaction', async () => {
		const { getByTestId } = render(
			<FeedReaction
				count={count}
				feedId={feedId}
				onClickHandler={onClick}
				isTesting
			/>
		)

		await testOnClick(getByTestId('love_feedReaction_container'), undefined)
	})
})
