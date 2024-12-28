import { CorrectIcon, WrongIcon } from "../Icons/Icons"

export const OrderCard = () => {

    return (
      <div className="min-w-80 border border-zinc-600 rounded-lg px-5 py-6">
        <div className="flex justify-between">
            <div>
                <h3>Order #351</h3>
                <p className="text-zinc-500">05 Feb 2023, 08:28 PM</p>
            </div>
            <picture>
                <img src="https://cdn.discordapp.com/attachments/773364102071975976/1322452522048422041/image_3.png?ex=6770ed63&is=676f9be3&hm=594634c5e9fc9c561d9205e914f992be2638ec364d92842fbc6ade2cf7c0f33c&" alt="user icon" />
            </picture>
        </div>
        <div className="flex flex-col">
            <div className="flex items-center gap-5">
                <picture>
                    <img src="https://cdn.discordapp.com/attachments/773364102071975976/1322453747594690641/images_1.png?ex=6770ee87&is=676f9d07&hm=2008e74b0d5278af0e48f0d3ed5d1696593b86e981dc6c08f29edb152c4864b1&" alt="order image" />
                </picture>
                <div className="border-b-[1px] border-zinc-300 mt-5 pb-5">
                    <h4>Vegetable Mixups</h4>
                    <p className="text-zinc-500">Vegetable Fritters with Egg</p>
                    <div className="flex justify-between">
                        <p>$5.30</p>
                        <p>Qty: 1</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <picture>
                    <img src="https://cdn.discordapp.com/attachments/773364102071975976/1322453747594690641/images_1.png?ex=6770ee87&is=676f9d07&hm=2008e74b0d5278af0e48f0d3ed5d1696593b86e981dc6c08f29edb152c4864b1&" alt="order image" />
                </picture>
                <div className="mt-5 pb-5">
                    <h4>Vegetable Mixups</h4>
                    <p className="text-zinc-500">Vegetable Fritters with Egg</p>
                    <div className="flex justify-between">
                        <p>$5.30</p>
                        <p>Qty: 1</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between pt-5 border-t-[1px] border-zinc-300">
            <p>2 Items</p>
            <div className="flex gap-4">
                <div className="p-1 border border-red-500 w-10 h-10 rounded-md">
                    <WrongIcon color="red" />
                </div>
                <div className="p-1 border border-green-600 w-10 h-10 rounded-md">
                    <CorrectIcon color="green" />
                </div>
            </div>
        </div>
      </div>
    )
  }