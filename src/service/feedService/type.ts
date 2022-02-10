export interface IFeed {
	id: number
	content: string
	createdAt: string
	updatedAt: string
	likes: number
	loves: number
	activeUserLikedIt: number
	activeUserLovedIt: number
	author: {
		id: number
		username: string
	}
}

export interface ISubmitFeed {
	content: string
}

export interface IReactFeed {
	feedId: number
	like: boolean
	love: boolean
}

export interface IUpvoteFeed {
	authorId: number
	content: string
}
