/*###########################################################################################################
    first section
##############################################################################################################*/  /*################################################################################################################
first step : copy the value of main search box to all serch box of websites
################################################################################################################*/ document.getElementById("search-box-input").oninput = function () {
    "use strict";
    document.getElementById("googleScholarBox").value = this.value;
    document.getElementById("citeseerxBox").value = this.value;
    document.getElementById("howstuffworksBox").value = this.value;
    document.getElementById("nasaBox").value = this.value;
    document.getElementById("discoveryBox").value = this.value;
};
/*############################################################################################################### 		second step : select all function
###############################################################################################################*/
document.getElementById("first-section-select-all").onclick = function () {
    "use strict";
    document.getElementById("googleScholar-checkbox").setAttribute("checked", "true");
    document.getElementById("citeseerx-checkbox").setAttribute("checked", "true");
    document.getElementById("howstuffworks-checkbox").setAttribute("checked", "true");
    document.getElementById("nasa-checkbox").setAttribute("checked", "true");
    document.getElementById("discovery-checkbox").setAttribute("checked", "true");
};
/*###############################################################################################################
third step : search on website which the user select it
################################################################################################################*/
/*==============================================================================================================
    first step : create array to store the value of time on it
===============================================================================================================*/  var times = [ 1000, 2000, 3000, 4000, 5000];
 
/*================================================================================================================
   second step : define the varibles
================================================================================================================*/
var googleScholarTime, citeseerxTime, howstuffworksTime, nasaTime, discoveryTime;
var googleScholarFlag, citeseerxFlag, howstuffworksFlag, nasaFlag, discoveryFlag;
/*================================================================
    third step : set flags
=================================================================*/
/*=====================================================
    googleScholarFlag
=======================================================*/    
    
if (document.getElementById("googleScholar-checkbox").checked)
    {
        googleScholarFlag = 1;
    }
else 
    {
        googleScholarFlag = 0;
    }
/*=====================================================
    citeseerxFlag
=======================================================*/    
    
if (document.getElementById("citeseerx-checkbox").checked)
    {
        citeseerxFlag = 1;
    }
else 
    {
        citeseerxFlag = 0;
    }
/*=====================================================
    howstuffworksFlag
=======================================================*/    
    
if (document.getElementById("howstuffworks-checkbox").checked)
    {
        howstuffworksFlag = 1;
    }
else 
    {
        howstuffworksFlag = 0;
    }
/*=====================================================
    nasaFlag
=======================================================*/    
    
if (document.getElementById("nasa-checkbox").checked)
    {
        nasaFlag = 1;
    }
else 
    {
        nasaFlag = 0;
    }
/*=====================================================
    discoveryFlag
=======================================================*/    
    
if (document.getElementById("discovery-checkbox").checked)
    {
        discoveryFlag = 1;
    }
else 
    {
        discoveryFlag = 0;
    }

/*=============================================================================================================
   four step : all possibles
============================================================================================================*/

/*============================================================================================================
   five step : set the function when the user select or not select 
=============================================================================================================*/
/*=====================================================
    googleScholar function
======================================================*/    
function googleScholarSubmit() {
    if (document.getElementById("googleScholar-checkbox").checked)
         {
            document.getElementById("googleScholar").submit(); 
         }
}
/*=====================================================
    citeseerx function
======================================================*/    
function citeseerxSubmit() {
    if (document.getElementById("citeseerx-checkbox").checked)
         {
            document.getElementById("citeseerx").submit(); 
         }
}
/*=====================================================
    howstuffworks function
======================================================*/    
function howstuffworksSubmit() {
    if (document.getElementById("howstuffworks-checkbox").checked)
         {
            document.getElementById("howstuffworks").submit(); 
         }
}
/*=====================================================
   nasa function
======================================================*/    
function nasaSubmit() {
    if (document.getElementById("nasa-checkbox").checked)
         {
            document.getElementById("nasa").submit(); 
         }
}
/*=====================================================
   discovery function
======================================================*/    
function discoverySubmit() {
    if (document.getElementById("discovery-checkbox").checked)
         {
            document.getElementById("discovery").submit(); 
         }
}


/*###############################################################################################################
    four step : submit
###############################################################################################################*/  document.getElementById("first-section-submit").onclick = function () {
    setTimeout("googleScholarSubmit()", 1000);
    setTimeout("citeseerxSubmit()", 2000);
    setTimeout("howstuffworksSubmit()", 3000);
    setTimeout("nasaSubmit()", 4000);
    setTimeout("discoverySubmit()", 5000);
};
