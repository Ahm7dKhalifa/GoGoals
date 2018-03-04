/*#################################################################################################################
###################################################################################################################

                                            first section

#################################################################################################################
##################################################################################################################*/  



/*################################################################################################################
first step : copy the value of main search box to all serch box of websites
################################################################################################################*/ document.getElementById("search-box-input").oninput = function () {
    "use strict";
    document.getElementById("youm7Box").value = this.value;
    document.getElementById("masrawyBox").value = this.value;
    document.getElementById("elbaladBox").value = this.value;
    document.getElementById("aljazeeraBox").value = this.value;
    document.getElementById("alwafdBox").value = this.value;
    document.getElementById("ikhwanBox").value = this.value;
};
/*################################################################################################################
	second step : select all function
##############################################################################################################*/
document.getElementById("first-section-select-all").onclick = function () {
    "use strict";
    document.getElementById("youm7-checkbox").setAttribute("checked", "true");
    document.getElementById("masrawy-checkbox").setAttribute("checked", "true");
    document.getElementById("elbalad-checkbox").setAttribute("checked", "true");
    document.getElementById("aljazeera-checkbox").setAttribute("checked", "true");
    document.getElementById("alwafd-checkbox").setAttribute("checked", "true");
    document.getElementById("ikhwan-checkbox").setAttribute("checked", "true");
};
/*################################################################################################################
	third step : search on website which the user select it
################################################################################################################*/
/*==============================================================================================================
    first step : create array to store the value of time on it
===============================================================================================================*/  var times = [ 1000, 2000, 3000, 4000, 5000];
 
/*===============================================================================================================
   second step : define the varibles
================================================================================================================*/

/*================================================================
    third step : set flags
=================================================================*/

/*=============================================================================================================
   four step : all possibles
==============================================================================================================*/

/*==============================================================================================================
   five step : set the function when the user select or not select 
==============================================================================================================*/
/*=====================================================
     youm7 function
======================================================*/    
function  youm7Submit(){
    if (document.getElementById("youm7-checkbox").checked)
         {
            document.getElementById("youm7").submit(); 
         }
}
/*=====================================================
     masrawy function
======================================================*/    
function  masrawySubmit(){
    if (document.getElementById("masrawy-checkbox").checked)
         {
            document.getElementById("masrawy").submit(); 
         }
}
/*=====================================================
     elbalad function
======================================================*/    
function  elbaladSubmit(){
    if (document.getElementById("elbalad-checkbox").checked)
         {
            document.getElementById("elbalad").submit(); 
         }
}
/*=====================================================
     aljazeera function
======================================================*/    
function  aljazeeraSubmit(){
    if (document.getElementById("aljazeera-checkbox").checked)
         {
            document.getElementById("aljazeera").submit(); 
         }
}
/*=====================================================
     alwafd function
======================================================*/    
function  alwafdSubmit(){
    if (document.getElementById("alwafd-checkbox").checked)
         {
            document.getElementById("alwafd").submit(); 
         }
}
/*=====================================================
     ikhwan function
======================================================*/    
function  ikhwanSubmit(){
    if (document.getElementById("ikhwan-checkbox").checked)
         {
            document.getElementById("ikhwan").submit(); 
         }
}


/*###############################################################################################################
    FOUR STEP : ALLOW POPUP
##############################################################################################################*/



/*#############################################################################################################
   FIVE step : submit
#############################################################################################################*/  document.getElementById("first-section-submit").onclick = function () {
    setTimeout( "youm7Submit()",1000);
    setTimeout( "masrawySubmit()",2000);
    setTimeout( "elbaladSubmit()",3000);
    setTimeout( "aljazeeraSubmit()",4000);
    setTimeout( "alwafdSubmit()",5000);
    setTimeout( "ikhwanSubmit()",6000);
};