import { OrderHash } from "../OrderHash/OrderHash"

export const OrderList = () => {

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
    <div>
        <h2 className="text-xl mb-4">Order List</h2>
        <div className="flex gap-4">
            {orders.map((order) => (
                <OrderHash key={order.hash} hash={order.hash} acepted={order.acepted}/>
            ))}
        </div>
    </div>
  )
}