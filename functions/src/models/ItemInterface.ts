import { ObjectId } from "mongodb"

export default interface Item {
    _id: ObjectId,
    type: string,
    printed: boolean,
    primaryColor: string,
    secondaryColor?: string
}