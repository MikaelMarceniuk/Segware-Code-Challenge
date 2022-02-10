import { createContext, useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NewPostForm, FeedCard } from '../../components'
import { feedService } from '../../service'
import { IFeed } from '../../service/feedService/type'

interface IHomePage_Context {
	onReactionClick: (feedId: number, isLike?: boolean) => void
}

const homePageContext = createContext({} as IHomePage_Context)

export const useHomePageContext = () => useContext(homePageContext)

const HomePage = () => {
	const [feeds, setFeeds] = useState<IFeed[]>([])

	useEffect(() => {
		;(async () => await fetchFeed())()
	}, [])

	const fetchFeed = async () => {
		const apiFeeds = await feedService.getFeed()
		if (apiFeeds) setFeeds(apiFeeds)
	}

	const onReactionClick = async (feedId: number, isLike?: boolean) => {
		const body = { feedId, like: false, love: false }

		isLike ? (body.like = true) : (body.like = false)

		const { isSuccess } = await feedService.reactFeed(body)
		if (!isSuccess) alert('Error in react to post')
		else {
			alert('Succefully reacted to post')
			await fetchFeed()
		}
	}

	return (
		<homePageContext.Provider value={{ onReactionClick }}>
			<Container fluid style={{ height: '100vh', marginTop: '1rem' }}>
				<Row>
					<Col>
						<NewPostForm />
					</Col>
					<Col lg={8}>
						{feeds.map((feed) => (
							<FeedCard key={feed.id} {...feed} />
						))}
					</Col>
				</Row>
			</Container>
		</homePageContext.Provider>
	)
}

export default HomePage
