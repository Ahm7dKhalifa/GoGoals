/*##############################################################################################################
    first section
################################################################################################################*/  /*###############################################################################################################
first step : copy the value of main search box to all serch box of websites
################################################################################################################*/ document.getElementById("search-box-input").oninput = function () {
    "use strict";
    document.getElementById("facebookBox").value = this.value;
    document.getElementById("twitterBox").value = this.value;
    document.getElementById("linkedinBox").value = this.value;
   
};
/*################################################################################################################ 		second step : select all function
################################################################################################################*/
document.getElementById("first-section-select-all").onclick = function () {
    "use strict";
    document.getElementById("facebook-checkbox").setAttribute("checked", "true");
    document.getElementById("twitter-checkbox").setAttribute("checked", "true");
    document.getElementById("linkedin-checkbox").setAttribute("checked", "true");
    
};
/*###############################################################################################################
third step : search on website which the user select it
###############################################################################################################*/
/*===============================================================================================================
    first step : create array to store the value of time on it
===============================================================================================================*/  var times = [ 1000, 2000, 3000, 4000, 5000];
 
/*================================================================================================================
   second step : define the varibles
=================================================================================================================*/
var facebookTime, twitterTime, linkedinTime;
var facebookFlag, twitterFlag, linkedinFlag;
/*================================================================
    third step : set flags
=================================================================*/
/*=====================================================
    facebookFlag
=======================================================*/    
    
if (document.getElementById("facebook-checkbox").checked)
    {
        facebookFlag = 1;
    }
else 
    {
        facebookFlag = 0;
    }
/*=====================================================
    twitterFlag
=======================================================*/    
    
if (document.getElementById("twitter-checkbox").checked)
    {
        twitterFlag = 1;
    }
else 
    {
        twitterFlag = 0;
    }
/*=====================================================
    linkedinFlag
=======================================================*/    
    
if (document.getElementById("linkedin-checkbox").checked)
    {
        linkedinFlag = 1;
    }
else 
    {
        linkedinFlag = 0;
    }

/*===============================================================================================================
   four step : all possibles
================================================================================================================*/

/*================================================================================================================
   five step : set the function when the user select or not select 
================================================================================================================*/
/*=====================================================
    facebook function
======================================================*/    
function facebookSubmit(){
    if (document.getElementById("facebook-checkbox").checked)
         {
            document.getElementById("facebook").submit(); 
         }
}
/*=====================================================
    twitter function
======================================================*/    
function twitterSubmit(){
    if (document.getElementById("twitter-checkbox").checked)
         {
            document.getElementById("twitter").submit(); 
         }
}
/*=====================================================
    linkedin function
======================================================*/    
function linkedinSubmit(){
    if (document.getElementById("linkedin-checkbox").checked)
         {
            document.getElementById("linkedin").submit(); 
         }
}


/*##############################################################################################################
    four step : submit
###############################################################################################################*/  document.getElementById("first-section-submit").onclick = function () {
    setTimeout( "facebookSubmit()",1000);
    setTimeout( "twitterSubmit()",2000);
    setTimeout( "linkedinSubmit()",3000);
    
};
