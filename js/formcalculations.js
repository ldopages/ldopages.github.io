var InspectionFee_Prices = new Array();
InspectionFee_Prices["InspYes"] = 25;
InspectionFee_Prices["InspNo"] = 0;

var DemolitionFee_Prices = new Array();
DemolitionFee_Prices["ResStruct4UnitsMax"] = 125;
DemolitionFee_Prices["NonResApartments"] = 400;
DemolitionFee_Prices["NonResStructOver10k"] = 250;



var PlansReview_Percentages = new Array();
PlansReview_Percentages ["None"]=0;
PlansReview_Percentages ["20 Percent"]=20;
PlansReview_Percentages ["30 Percent"]=30;
PlansReview_Percentages ["40 Percent"]=40;
PlansReview_Percentages ["50 Percent"]=50;

function getInspectionFee_Prices() {
  var cakeSizePrice = 0;

  var theForm = document.forms["cakeform"];

  var InspYesOrNO = theForm.elements["InspYesOrNO"];

  for (var i = 0; i < InspYesOrNO.length; i++) {

    if (InspYesOrNO[i].checked) {

      cakeSizePrice = InspectionFee_Prices[InspYesOrNO[i].value];

      break;
    }
  }

  return cakeSizePrice;
}

function getDemolitionFee_Prices() {
  var DemoFeePrice = 0;

  var theForm = document.forms["cakeform"];

  var ChooseDemoType = theForm.elements["ChooseDemoType"];

  for (var i = 0; i < ChooseDemoType.length; i++) {

    if (ChooseDemoType[i].checked) {

      DemoFeePrice = DemolitionFee_Prices[ChooseDemoType[i].value];

      break;
    }
  }
  return DemoFeePrice;
}

function GetMovingFee_Price() {
  var candlePrice = 0;
  var theForm = document.forms["cakeform"];
  var includeMovingFee = theForm.elements["includeMovingFee"];

  //If they checked the box set candlePrice to 5
  if (includeMovingFee.checked == true) {
    candlePrice = 125;
  }
  //finally we return the candlePrice
  return candlePrice;
}

function GetPermit_Price() {

  var PermitCost = 0
  var theForm = document.forms["cakeform"];
  var Valuation = theForm.elements["ValuationChoice"].value;


  if (Valuation > 0 && Valuation <= 1000) {
    var PermitCost = 0;

  }

  if (Valuation > 1001 && Valuation <= 50000) {
    var PermitCost = (((Valuation - 1000) / 1000) * 5.50) + 25;

  }

  if (Valuation > 50001 && Valuation <= 100000) {
    var PermitCost = (((Valuation - 50000) / 1000) * 4.50) + 294.50;

  }

  if (Valuation > 100001 && Valuation <= 500000) {
    var PermitCost = (((Valuation - 100000) / 1000) * 3.50) + 519.50;

  }

  if (Valuation > 500001) {
    var PermitCost = (((Valuation - 500000) / 1000) * 2.25) + 1919.50;

  }

  return PermitCost;

}

function GetPlansReviwFee_Price() {
  var plansReviewFee_Price = 0;
  var theForm = document.forms["cakeform"];
  var SelectedPercentage = theForm.elements["plansReviewPercentage"];
  plansReviewFee_Price = PlansReview_Percentages[SelectedPercentage.value];
  return plansReviewFee_Price;
}

function calculateTotal() {

  var TotalPermitPrice = getInspectionFee_Prices() + getDemolitionFee_Prices() + GetMovingFee_Price() +  GetPermit_Price() + ((GetPlansReviwFee_Price()/100) * GetPermit_Price()) + 5 + 10;

  //display the result
  var divobj = document.getElementById('totalPrice');
  divobj.style.display = 'block';
  divobj.innerHTML = "Total Price For the Permit $" + TotalPermitPrice;

  var divobj2 = document.getElementById('techFee');
  divobj2.style.display = 'block';
  divobj2.innerHTML = "Tech Fee: " + "$10";

  var divobj3 = document.getElementById('inspectionFee');
  divobj3.style.display = 'block';
  divobj3.innerHTML = "Inspection Fee: $" + getInspectionFee_Prices();

  var divobj4 = document.getElementById('demoFee');
  divobj4.style.display = 'block';
  divobj4.innerHTML = "Demolition Fee: $" + getDemolitionFee_Prices();

  var divobj5 = document.getElementById('movingFee');
  divobj5.style.display = 'block';
  divobj5.innerHTML = "Moving Fee: $" + GetMovingFee_Price();

  var divobj6 = document.getElementById('adminFee');
  divobj6.style.display = 'block';
  divobj6.innerHTML = "Admin: $" + 5;

  var divobj7 = document.getElementById('permitFee');
  divobj7.style.display = 'block';
  divobj7.innerHTML = "Permit Fee: $" + GetPermit_Price();
  
  var divobj8 = document.getElementById('plansreviewFee');
  divobj8.style.display = 'block';
  divobj8.innerHTML = "Plans Review Fee: $" + ((GetPlansReviwFee_Price()/100) * GetPermit_Price());
//divobj8.innerHTML = "Plans Review Fee: $" + ((GetPlansReviwFee_Price()/100) * GetPermit_Price());


}

function clearForm() {
  var theForm = document.forms["cakeform"];
  document.getElementById("cakeform").reset();
  hideTotal();
}

function hideTotal() {
  var divobj = document.getElementById('totalPrice');
  divobj.style.display = 'none';
  
  var divobj2 = document.getElementById('techFee');
  divobj2.style.display = 'none';
  
  var divobj3 = document.getElementById('inspectionFee');
  divobj3.style.display = 'none';
  
  var divobj4 = document.getElementById('demoFee');
  divobj4.style.display = 'none';
  
  var divobj5 = document.getElementById('movingFee');
  divobj5.style.display = 'none';
  
  var divobj6 = document.getElementById('adminFee');
  divobj6.style.display = 'none';
  
  var divobj7 = document.getElementById('permitFee');
  divobj7.style.display = 'none';
  
  var divobj8 = document.getElementById('plansreviewFee');
  divobj8.style.display = 'none';
}
