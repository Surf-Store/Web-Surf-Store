$(document).ready(function () {
  initializeImageTitle();
});

function initializeImageTitle() {
  let imageUrl = 'assets/images/TitleImage/imageTitlePayment.webp';
  let backgroundImage = 'url(' + imageUrl + ') center / cover';

  $('#titleImage').css('background', backgroundImage);
  $("#titleH1").text('Checkout Page');
}

  function sendOrder(orderData) {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/orders",
    data: orderData,
    success: function (data) {
      console.log("Order sent successfully");
        $("#orderCompleted").show();
      setTimeout(function () {
        window.location.href = './index.html'
      }, 5000);

    },
    error: function (data) {
      console.log("Error sending order");
      $("#orderNotCompleted").show();
      setTimeout(function () {
        $("#orderNotCompleted").hide();
      }, 2500);
    }
  });
  }
  function validateForm() {
    var userName = $("#userName").val();
    var cardNumber = $("#creditCardNumber").val();
    var MM = $("#MM").val();
    var YY = $("#YY").val();
    var CVV = $("#CVV").val();

    // Perform basic validation tests
    if (userName.trim() === "") {
      console.log("wrong details");
      $("#orderNotCompleted").show();
      setTimeout(function () {
        $("#orderNotCompleted").hide();
      }, 2500);
      return false;
    }

    if (cardNumber.trim() === "") {
      console.log("wrong details");
      $("#orderNotCompleted").show();
      setTimeout(function () {
        $("#orderNotCompleted").hide();
      }, 2500);
      return false;
    }

    if (MM.trim() === "" || YY.trim() === "") {
      console.log("wrong details");
      $("#orderNotCompleted").show();
      setTimeout(function () {
        $("#orderNotCompleted").hide();
      }, 2500);
      return false;
    }

    if (CVV.trim() === "") {
      console.log("wrong details");
      $("#orderNotCompleted").show();
      setTimeout(function () {
        $("#orderNotCompleted").hide();
      }, 2500);
      return false;
    }

    return true;
  }


  $("#confirmBtn").click(function() {

    if (validateForm()) {
      var paymentDetails = {
        //get user identification
        user:localStorage.getItem('user.id'),
        products: localStorage.getItem("products"),
        shippingAddress: localStorage.getItem("shippingAddress"),
        paymentMethod: 'Credit Card',
        userName: $("#userName").val(),
        cardNumber: $("#creditCardNumber").val(),
        expirationMonth: $("#MM").val(),
        expirationYear: $("#YY").val(),
        cvv: $("#CVV").val()
      };
      console.log(paymentDetails);
      sendOrder(paymentDetails);
    }
  });
