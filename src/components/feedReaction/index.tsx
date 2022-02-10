import { BsArrowUp, BsHeartFill } from 'react-icons/bs'
import { useHomePageContext } from '../../pages/home'
import './style.css'

interface IProps {
	isUpvote?: boolean
	count: number
	feedId: number
	isTesting?: boolean
	onClickHandler?: (feedId: number, isUpvote: boolean | undefined) => void
}

const FeedReaction: React.FC<IProps> = ({
	isUpvote,
	count,
	feedId,
	isTesting,
	onClickHandler,
}) => {
	let homeReactClick: (feedId: number, isLike?: boolean | undefined) => void
	if (!isTesting) homeReactClick = useHomePageContext().onReactionClick

	const handleClick = () => {
		isTesting && onClickHandler
			? onClickHandler(feedId, isUpvote)
			: homeReactClick(feedId, isUpvote)
	}

	const genTestIdPrefix = () => (isUpvote ? 'upvote' : 'love')

	return (
		<div
			className="feedReaction_container"
			onClick={handleClick}
			data-testid={`${genTestIdPrefix()}_feedReaction_container`}
		>
			{isUpvote ? <BsArrowUp /> : <BsHeartFill />} {count}
		</div>
	)
}

export default FeedReaction
