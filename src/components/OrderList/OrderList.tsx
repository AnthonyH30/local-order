export const OrderList = () => {

    const orders = [ 1,2,3,4,5,6]


  return (
    <div>
        <h2>Order List</h2>
        <div className="flex gap-4">
            {orders.map((order) => (
                <div key={order}>order</div>
            ))}
        </div>
    </div>
  )
}