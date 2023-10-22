export default interface ICard{
    fullName: string;
    phoneNumber: string,
    mail: string,
    openModal: (name: string) => void
}