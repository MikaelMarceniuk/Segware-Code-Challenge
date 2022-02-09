export interface IUser {
	username: string
	password: string
}

export interface ISignUp extends IUser {
	confirmPassword?: string
}
