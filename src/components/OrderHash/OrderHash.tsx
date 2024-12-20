import { CorrectIcon, WrongIcon } from "../Icons/Icons"

interface OrderHashProps{
    hash: number
    acepted: boolean
}

export const OrderHash = ({hash, acepted}: OrderHashProps) => {
  return (
    <div className={`flex gap-1 border rounded-lg w-24 h-12 items-center justify-center ${acepted? "border-green-600" : "border-red-700"} cursor-pointer hover:scale-110 transition-all`}>
        {acepted ? <CorrectIcon className="w-5 h-5" color="green" /> : <WrongIcon className="w-7 h-7" color="red" />}<p className={`${acepted ? "text-green-600" : "text-red-700"}`}>#{hash}</p>
    </div>
  )
}