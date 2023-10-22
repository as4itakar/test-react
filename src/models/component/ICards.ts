import IUser from "../entity/IUser";

export default interface ICards{
    errorUsers: string,
    loadUsers: boolean,
    users: IUser[],
    openModal: (name: string) => void
}