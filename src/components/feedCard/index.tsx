import moment from 'moment'
import { FeedReaction } from '..'
import { IFeed } from '../../service/feedService/type'

import './style.css'

const FeedCard: React.FC<IFeed> = ({
	id,
	author,
	content,
	likes,
	loves,
	createdAt,
}) => {
	return (
		<div className="wrapper">
			<header className="header_container">
				<strong>{author.username}</strong> ·{' '}
				<span className="header_createdAt">
					Created at: {moment(createdAt).format('DD/MM/YYYY HH:mm')}
				</span>
			</header>

			<div>{content}</div>

			<div className="icons_container">
				<FeedReaction isUpvote count={likes} feedId={id} />
				<FeedReaction count={loves} feedId={id} />
			</div>
		</div>
	)
}

export default FeedCard
