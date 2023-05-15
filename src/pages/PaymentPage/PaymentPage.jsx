import React from "react";
import "./PaymentPage.css";
import { useSelector } from "react-redux";
const PaymentPage = () => {
	const basketData = useSelector((state) => state.basket.data)
	const totalAmount = basketData.reduce((total, current) => total + current.amount,0)

	const total = Object.keys(basketData).reduce((acc, crr) => {
		if (basketData[crr].amount > 1) {
			return acc + basketData[crr].price * basketData[crr].amount;
		}
		return acc + basketData[crr].price;
	}, 0);


	return (
		<div className="container" style={{padding: "80px 0"}}>
			<div class="row">
				<div class="col-75">
					<div class="container-form">
						<form action="/action_page.php">
							<div class="row">
								<div class="col-50">
									<h3>Billing Address</h3>
									<label for="fname">
										<i class="fa fa-user"></i> Full Name
									</label>
									<input
										required
										type="text"
										id="fname"
										name="firstname"
										placeholder="John M. Doe"
									/>
									<label for="email">
										<i class="fa fa-envelope"></i> Email
									</label>
									<input
										required
										type="text"
										id="email"
										name="email"
										placeholder="john@example.com"
									/>
									<label for="adr">
										<i class="fa fa-address-card-o"></i> Address
									</label>
									<input
										required
										type="text"
										id="adr"
										name="address"
										placeholder="542 W. 15th Street"
									/>
									<label for="city">
										<i class="fa fa-institution"></i> City
									</label>
									<input
										required
										type="text"
										id="city"
										name="city"
										placeholder="Bishkek"
									/>

									<div class="row">
										<div class="col-50">
											<label for="state">район</label>
											<input
												required
												type="text"
												id="state"
												name="район"
												placeholder="NY"
											/>
										</div>
										<div class="col-50">
											<label for="zip">Zip</label>
											<input
												required
												type="text"
												id="zip"
												name="zip"
												placeholder="10001"
											/>
										</div>
									</div>
								</div>

								<div class="col-50">
									<h3>Payment</h3>
									<label for="fname">Accepted Cards</label>
									<div class="icon-container-form">
										<i class="fa fa-cc-visa" style={{ width: "20px", height: "20px" ,marginRight: "20px" , color: "navy" }}></i>
										<i class="fa fa-cc-amex" style={{ width: "20px", height: "20px" ,marginRight: "20px" , color: "blue" }}></i>
										<i class="fa fa-cc-mastercard" style={{ width: "20px", height: "20px" ,marginRight: "20px" , color: "red" }}></i>
										<i
											class="fa fa-cc-discover"
											style={{ width: "20px", height: "20px" ,marginRight: "20px" , color: "orange" }}></i>
									</div>
									<label for="cname">Name on Card</label>
									<input
										required
										type="text"
										id="cname"
										name="cardname"
										placeholder="John More Doe"
									/>
									<label for="ccnum">Credit card number</label>
									<input
										required
										type="text"
										id="ccnum"
										name="cardnumber"
										placeholder="1111-2222-3333-4444"
									/>
									<label for="expmonth">Exp Month</label>
									<input
										required
										type="text"
										id="expmonth"
										name="expmonth"
										placeholder="September"
									/>
									<div class="row">
										<div class="col-50">
											<label for="expyear">Exp Year</label>
											<input
												required
												type="text"
												id="expyear"
												name="expyear"
												placeholder="2018"
											/>
										</div>
										<div class="col-50">
											<label for="cvv">CVV</label>
											<input
												required
												type="text"
												id="cvv"
												name="cvv"
												placeholder="352"
											/>
										</div>
									</div>
								</div>
							</div>
							<label>
								<input
									type="checkbox"
									checked="checked"
									name="sameadr"
								/>{" "}
								Shipping address same as billing
							</label>
							<input
								required
								type="submit"
								value="Continue to checkout"
								class="btn"
							/>
						</form>
					</div>
				</div>
				<div class="col-25">
					<div class="container-form">
						<h4>
							Cart
							<span class="price" style={{ color: "black" }}>
								<i class="fa fa-shopping-cart"></i> <b>{totalAmount}</b>
							</span>
						</h4>

						<div>
							{basketData.map((elem) => {
								return (
									<p style={{padding: "12px 0"}}>
										<a style={{ textDecoration: "none"}} href="#">{`${elem.amount} | ${elem.name}`}</a> <span class="price">{elem.amount * elem.price}</span>
									</p>
								);
							})}
						</div>
						<hr />
						<p>
							Total
							<span class="price" style={{ color: "black" }}>
								<b>{total}</b>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
