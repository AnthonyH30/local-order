import { OrderCard } from "@/components"


export const Orders = () => {

    const orders = [{
        hash: 111,
        acepted: true,
      },{
        hash: 222,
        acepted: true,
      },{
        hash: 333,
        acepted: false,
      },{
        hash: 444,
        acepted: true,
      },{
        hash: 555,
        acepted: false,
      },{
        hash: 666,
        acepted: false,
    }]

  return (
    <div className="flex gap-5 flex-wrap mt-10">
        {orders.map((order) => (
            <OrderCard key={order.hash} />
        ))}
    </div>
  )
}