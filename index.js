  // tip amount
  var tipOutput = document.querySelector(".tip-amount-result");
  // tip amount
  var totalOutput = document.querySelector(".total-amount-result");
  // error messages
  var billErrorMessage = document.querySelector(".bill-wrap .error-message");
  var numOfPeopleErrorMessage = document.querySelector(".num-of-people-wrap .error-message");

  // var resetBtn = document.querySelector(".reset-btn").addEventListener("click", clear)


    // button percentage input
    var buttonPercents = document.querySelectorAll('input[name="valueGroup"]');
    Array.from(buttonPercents).forEach((btnPercent) => {
      btnPercent.addEventListener("click", function () { 
        console.log(btnPercent);
      btnPercent.classList.add("selected");
        
        // selected input
          var selectedBtns  = this.value

        //  var  selectBtn = ((selectedBtns.length)* 1)/1;


          var selectBtnError = selectedBtns.length;
          
          console.log(selectedBtns);

            document.querySelector(".calc-btn").addEventListener("click", function () { 
              // convert selected value from "string" to number
              var selectedPercent = (selectedBtns * 1)/1;
              // initial value function set the output to zero
              // to be called when total outputs returns NAN or infinity...
              // ..so it sets its output to the default
              console.log(selectedPercent);

              function initialValue() {
                var initial = "0.00";
                theTipAmount = initial
                theTotalAmount = initial
              }
              // variables
              // bill input
              var billInput = document.querySelector("input.bill")
              var newBillInput = (billInput.value *1)/1;
              // number Of Person input
              var numOfPerson = document.querySelector("input.num-of-people").value
              var newNumOfPerson = Math.floor((numOfPerson * 1)/1);

   
              // validateForm()  function vaildates bill and num of persons inputs
              function validateForm() {
                if(newBillInput<=0){
                  billErrorMessage.classList.add("active-error")
                  billInput.classList.add("error-input")
                  } else {
                    billErrorMessage.classList.remove("active-error")
                    billInput.classList.remove("error-input")
                  }
                if(newNumOfPerson<=0){
                    numOfPeopleErrorMessage.classList.add("active-error")
                    document.querySelector(".num-of-people").classList.add("error-input")
              
                    } else {
                    numOfPeopleErrorMessage.classList.remove("active-error")
                    document.querySelector(".num-of-people").classList.remove("error-input")
                    }
                };
              // custom input
              var customInput = document.querySelector(".custom");
              var newCustomInput = Math.floor((customInput.value * 1)/1);

              // this "if" (newCustomInput) code runs when the value of customInput.value is greater than or equals one
              if (newCustomInput >= 1) {
                validateForm(); 
                // selectBtnError.classList.add("active-error")
                // selectBtnError.style.color = "var(--StrongCyan)"
                // selectBtnError.textContent = '"custom calculation"'
                btnPercent.classList.remove("selected")
                theTipAmount = (((newBillInput * newCustomInput)/100)/newNumOfPerson).toFixed(2);
                theTotalAmount =(((newBillInput * newCustomInput)/100 + newBillInput)/newNumOfPerson).toFixed(2);
              } else  if(selectedBtns.length >= 1 && newCustomInput >= 1){
                initialValue();
              } else {
                  validateForm();
                  theTipAmount =(((newBillInput * selectedPercent)/100)/newNumOfPerson).toFixed(2);
                  theTotalAmount =(((newBillInput * selectedPercent)/100 + newBillInput)/newNumOfPerson).toFixed(2);
                  console.log(theTipAmount);
                }
        
              tipOutput.textContent = "$" + theTipAmount;
              totalOutput.textContent = "$" + theTotalAmount;
              console.log(theTipAmount);
              console.log(theTotalAmount);
            })
          })
        });



        
// // for crew.html
// var crewMembers = document.querySelectorAll(".crew-members")
// const valueInputs = document.querySelectorAll('input[name="valueGroup"]');
// console.log(valueInputs);

//     Array.from(crewInputs).forEach((crew) => {
//         crew.addEventListener("click", function (e) {
//             // console.log(crewInputs); 
//             if (e.target.tagName == "INPUT") {
//                 // console.log(crewMembers);
//                 const targetCrewMember = document.querySelector(e.target.dataset.crew);
//                 console.log(targetCrewMember);
//                 crewMembers.forEach((crewMember) => {
//                     // console.log(crewMembers);

//                     if (crewMember == targetCrewMember) {
//                         crewMember.classList.add("active-crew");
//                         } else {
//                             crewMember.classList.remove("active-crew");
//                         }
//                 })
                
//             }
//         })
//     });