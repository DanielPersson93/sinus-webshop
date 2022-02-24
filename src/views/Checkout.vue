<template>
  <div class="checkout">
    <ul class="your-products">
      <h1>YOUR PRODUCTS</h1>
      <!-- for each product in cart -->
      <li>Board</li>
      <h5>Total price:</h5>
    </ul>

    <form class="checkout-form">
      <div>
        <label for="contry">Country</label>
        <input type="text" id="country" name="contry" />
      </div>
      <div>
        <label for="email">E-mail</label>
        <input type="mail" id="email" name="email" />
      </div>
      <div>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname" />
      </div>
      <div>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname" />
      </div>
      <div>
        <label for="adress">Adress</label>
        <input type="text" id="adress" name="adress" />
      </div>
      <div>
        <label for="mobile">Mobile no.</label>
        <input type="number" id="mobile" name="mobile" />
      </div>
      <div>
        <label for="city">City</label>
        <input type="text" id="city" name="city" />
      </div>
      <div>
        <label for="zipcode">Zip Code</label>
        <input type="text" id="zipcode" name="zipcode" />
      </div>
    </form>
    <form class="card-info">
      <div>
        <label for="cardnumber">Card Number</label>
        <input type="number" id="cardnumber" name="card number" />
      </div>
      <div>
        <label for="MM/YY">MM/YY</label>
        <input type="text" id="MM/YY" name="Month and year" />
      </div>
      <div>
        <label for="CVC"> CVC</label>
        <input type="number" id="CVC" name="CVC" />
      </div>
    </form>
    <button @click="placeOrder">Place Order</button>
  </div>
</template>

<script>
export default {
  methods: {
    placeOrder(){
        this.$store.dispatch("placeOrder")
      },
  } 
};
</script>

<style lang="scss" scoped>
.checkout {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    h1 {
      text-align: center;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
    }
    h5 {
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
  }
  display: grid;
  grid-gap: 1.5rem 10rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    "your-products your-products card-form card-form card-form card-form "
    "your-products your-products card-form card-form card-form card-form "
    "your-products your-products card-form card-form card-form card-form "
    "your-products your-products card-form card-form card-form card-form "
    "your-products your-products card-form card-form card-form card-form "
    "your-products your-products card-info card-info card-info button "
    "your-products your-products card-info card-info card-info button "
    "your-products your-products card-info card-info card-info button ";
  // "your-products your-products  . . . . ";

  .your-products {
    grid-area: your-products;
  }
  .card-info {
    grid-area: card-info;
  }
  button {
    grid-area: button;
    width: 172px;
    height: 71px;
    background: #003827;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    text-align: center;
    margin-top: 2.5rem;
    margin-left: -180px;
  }

  .checkout-form {
    width: 787px;
    height: 410px;
    grid-area: card-form;
    border: 5px solid black;
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "country country"
      "email email"
      "firstname lastname"
      "adress mobile"
      "city zipcode";

    p {
      font-family: "Mukta Malar", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: -0.02em;
    }
    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border: 1px solid black;
      label {
        height: 30%;
      }
      input {
        text-transform: capitalize;
        width: calc(100% - 2.5rem);
        height: 70%;
        margin-top: -20px;
        border: none;
        padding-left: 1rem;
      }
      input:focus {
        outline-color: transparent;
        outline-style: none;
      }
      //   border: 1px solid black;
      padding: 0.1rem 0 0 0.2rem;
      margin: 0;
    }
    div:nth-of-type(1) {
      grid-area: country;
    }
    div:nth-of-type(2) {
      grid-area: email;
    }
    div:nth-of-type(3) {
      grid-area: firstname;
    }
    div:nth-of-type(4) {
      grid-area: lastname;
    }
    div:nth-of-type(5) {
      grid-area: adress;
    }
    div:nth-of-type(6) {
      grid-area: mobile;
    }
    div:nth-of-type(7) {
      grid-area: city;
    }
    div:nth-of-type(8) {
      grid-area: zipcode;
    }
  }
  .card-info {
    margin-top: 0;
    width: 570px;
    height: 164px;
    border: 5px solid black;
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "cardnumber cardnumber"
      "mmyy cvc ";
  }
  div:nth-of-type(1) {
    grid-area: cardnumber;
  }
  div:nth-of-type(2) {
    grid-area: mmyy;
  }
  div:nth-of-type(3) {
    grid-area: cvc;
  }
  div {
    padding: 0.1rem 0 0 0.2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid black;
    label {
      height: 30%;
    }
    input {
      text-transform: capitalize;
      width: calc(100% - 2.5rem);
      height: 70%;
      margin-top: -20px;
      border: none;
      padding-left: 1rem;
    }
    input:focus {
      outline-color: transparent;
      outline-style: none;
    }
  }
}
</style>
