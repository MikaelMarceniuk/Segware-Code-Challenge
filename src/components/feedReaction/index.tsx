import { BsArrowUp, BsHeartFill } from 'react-icons/bs'
import { useHomePageContext } from '../../pages/home'
import './style.css'

interface IProps {
	isUpvote?: boolean
	count: number
	feedId: number
}

const FeedReaction: React.FC<IProps> = ({ isUpvote, count, feedId }) => {
	const { onReactionClick } = useHomePageContext()

	return (
		<div
			className="feedReaction_container"
			onClick={() => onReactionClick(feedId, isUpvote)}
		>
			{isUpvote ? <BsArrowUp /> : <BsHeartFill />} {count}
		</div>
	)
}

export default FeedReaction
