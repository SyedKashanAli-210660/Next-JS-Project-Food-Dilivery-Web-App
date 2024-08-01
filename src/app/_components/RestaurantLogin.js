const RestaurantLogin = () => {
  return (
    <>
      <h2>Login</h2>
      <div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter Email id" className="input-feild" />
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="Enter Password" className="input-feild"/>
        </div>
        <div className="input-wrapper">
          <button className="button">Login</button>
        </div>
      </div>
    </>
  )
}

export default RestaurantLogin