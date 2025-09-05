window.addEventListener("load", function () {
  const check = this.document.querySelector("#shippingInfo");
  const submit = this.document.querySelector(".order");

//   체크의 정보를 받아 옴
  check.addEventListener("change", function () {
    if (check.checked) {
      // console.log("check");
      // 앞뒤 순서에 주의!
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAddr").value =
        document.querySelector("#billingAddr").value;

      // name 값으로 데려오는 방법
    //   document.order.billingName.value
    }
  });

  submit.addEventListener("click", function (e) {
    e.preventDefault(); // log를 확인하는데 번쩍거리면 이 코드를 넣는다.
    // console.log("제출");
    // 체크박스 상태에 따라 배송 정보를 업데이트
    if (check.checked) {
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAddr").value =
        document.querySelector("#billingAddr").value;
    }

    // 확인할 정보 문자열 생성
    // const billingName = document.querySelector("#billingName").value;
    // // console.log(billingName);
    // const billingTel = document.querySelector("#billingTel").value;
    // // console.log(billingTel);
    // const billingAddr = document.querySelector("#billingAddr").value;
    // // console.log(billingAddr);
    // const shippingName = document.querySelector("#shippingName").value;
    // // console.log(shippingName);
    // const shippingTel = document.querySelector("#shippingTel").value;
    // // console.log(shippingTel);
    // const shippingAddr = document.querySelector("#shippingAddr").value;
    // // console.log(shippingAddr);

    // name 값으로 접근하는 방법
    let billingName = order.billingName.value
    console.log(billingName)
    let billingTel = order.billingTel.value
    console.log(billingTel)
    let billingAddr = order.billingAddr.value
    console.log(billingAddr)
    let shippingName = ship.shippingName.value
    console.log(shippingName)
    let shippingTel = ship.shippingTel.value
    console.log(shippingTel)
    let shippingAddr = ship.shippingAddr.value
    console.log(shippingAddr)

    let confirmMessage = `
        [ 주문정보 ]
        이름 : ${billingName}
        연락처 : ${billingTel}
        주소 : ${billingAddr}

        [ 배송정보 ]
        이름 : ${shippingName}
        연락처 : ${shippingTel}
        주소 : ${shippingAddr}

        이 정보가 정확합니까?
        `;

        // 사용자에게 정보 확인 대화상자 표시
        let userconfirmed = confirm(confirmMessage)
        console.log(userconfirmed);
        if(userconfirmed){
            alert("결제가 완료되었습니다. 감사합니다.🥰")
            document.querySelector("#billingName").value = ""
            document.querySelector("#billingTel").value = ""
            document.querySelector("#billingAddr").value = ""
            document.querySelector("#shippingName").value = ""
            document.querySelector("#shippingTel").value = ""
            document.querySelector("#shippingAddr").value = ""
            check.checked = false
        }else{
            alert("정보를 다시 입력해 주세요.😥")
        }
  });
});
