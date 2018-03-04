/*################################################################################################################
##################################################################################################################
                                            first section
#################################################################################################################
################################################################################################################*/  



/*################################################################################################################
first step : copy the value of main search box to all serch box of websites
###############################################################################################################*/ document.getElementById("search-box-input").oninput = function () {
    "use strict";
    document.getElementById("udemyBox").value = this.value;
    document.getElementById("courseraBox").value = this.value;
    document.getElementById("alisonBox").value = this.value;
    document.getElementById("edxBox").value = this.value;
    document.getElementById("uwBox").value = this.value;
};
/*############################################################################################################# 		second step : select all function
##############################################################################################################*/
document.getElementById("first-section-select-all").onclick = function () {
    "use strict";
    document.getElementById("udemy-checkbox").setAttribute("checked", "true");
    document.getElementById("coursera-checkbox").setAttribute("checked", "true");
    document.getElementById("alison-checkbox").setAttribute("checked", "true");
    document.getElementById("edx-checkbox").setAttribute("checked", "true");
    document.getElementById("uw-checkbox").setAttribute("checked", "true");
};
/*################################################################################################################
	third step : search on website which the user select it
#################################################################################################################*/
/*===============================================================================================================
    first step : create array to store the value of time on it
================================================================================================================*/  var times = [ 1000, 2000, 3000, 4000, 5000];
 
/*===============================================================================================================
   second step : define the varibles
=================================================================================================================*/
var udemyTime, courseraTime, alisonTime, edxTime, uwTime;
var udemyFlag, courseraFlag, alisonFlag, edxFlag, uwFlag;
/*================================================================
    third step : set flags
=================================================================*/
/*=====================================================
     udemyFlag
=======================================================*/    
    
if (document.getElementById("udemy-checkbox").checked)
    {
        udemyFlag = 1;
    }
else 
    {
        udemyFlag = 0;
    }
/*=====================================================
     courseraFlag
=======================================================*/    
    
if (document.getElementById("coursera-checkbox").checked)
    {
        courseraFlag = 1;
    }
else 
    {
        courseraFlag = 0;
    }
/*=====================================================
     alisonFlag
=======================================================*/    
    
if (document.getElementById("alison-checkbox").checked)
    {
        alisonFlag = 1;
    }
else 
    {
         alisonFlag = 0;
    }
/*=====================================================
     edxFlag
=======================================================*/    
    
if (document.getElementById("edx-checkbox").checked)
    {
        edxFlag = 1;
    }
else 
    {
         edxFlag = 0;
    }
/*=====================================================
     uwFlag
=======================================================*/    
    
if (document.getElementById("uw-checkbox").checked)
    {
        uwFlag = 1;
    }
else 
    {
        uwFlag = 0;
    }

/*================================================================================================================
   four step : all possibles
================================================================================================================*/
/* =========================================
        coursera flag
===========================================*/        
if ( courseraFlag == 1 && udemyFlag == 0)
    {
         courseraTime = times[0];
    }
else if (courseraFlag == 1 && udemyFlag == 1 )
    {
         courseraTime = times[1];
    }
/*==========================================
    alison flag
===========================================*/    
else if (alisonFlag == 1 && courseraFlag == 0 && udemyFlag == 0 )
    {
         alisonTime = times[0];   
    }
else if (alisonFlag == 1 && courseraFlag == 1 && udemyFlag == 0 )
    {
         alisonTime = times[1];   
    }
else if (alisonFlag == 1 && courseraFlag == 1 && udemyFlag == 1 )
    {
         alisonTime = times[2];   
    }
/*===========================================
    edx flag
============================================*/    
else if ( edxFlag == 1 && alisonFlag == 0 && courseraFlag == 0 && udemyFlag == 0 )
    {
        edxTime = times[0];
    }
else if ( edxFlag == 1 && alisonFlag == 1 && courseraFlag == 0 && udemyFlag == 0 )
    {
        edxTime = times[1];
    }
else if ( edxFlag == 1 && alisonFlag == 1 && courseraFlag == 1 && udemyFlag == 0 )
    {
        edxTime = times[2];
    }
else if ( edxFlag == 1 && alisonFlag == 1 && courseraFlag == 1 && udemyFlag == 1 )
    {
        edxTime = times[3];
    }
/*=============================================
    uw flag
==============================================*/    
else if ( uwFlag == 1 && edxFlag == 0 && alisonFlag == 0 && courseraFlag == 0 && udemyFlag == 0 )
    {
        uwTime = times[0];
    }
else if ( uwFlag == 1 && edxFlag == 1 && alisonFlag == 0 && courseraFlag == 0 && udemyFlag == 0 )
    {
        uwTime = times[1];
    }
else if ( uwFlag == 1 && edxFlag == 1 && alisonFlag == 1 && courseraFlag == 0 && udemyFlag == 0 )
    {
        uwTime = times[2];
    }
else if ( uwFlag == 1 && edxFlag == 1 && alisonFlag == 1 && courseraFlag == 1 && udemyFlag == 0 )
    {
        uwTime = times[3];
    }
else if ( uwFlag == 1 && edxFlag == 1 && alisonFlag == 1 && courseraFlag == 1 && udemyFlag == 1 )
    {
        uwTime = times[4];
    }
else
    {
         udemyTime = times[0];
         courseraTime = times[1];
         alisonTime = times[2];
         edxTime = times[3];
         uwTime = times[4];
    }
/*================================================================================================================
   five step : set the function when the user select or not select 
================================================================================================================*/
/*=====================================================
     udemy function
======================================================*/    
function  udemySubmit(){
    if (document.getElementById("udemy-checkbox").checked)
         {
            document.getElementById("udemy").submit(); 
         }
}
/*=====================================================
    coursera function
======================================================*/    
function  courseraSubmit(){
    if (document.getElementById("coursera-checkbox").checked)
         {
            document.getElementById("coursera").submit(); 
         }
}
/*=====================================================
    alison function
======================================================*/    
function  alisonSubmit(){
    if (document.getElementById("alison-checkbox").checked)
         {
            document.getElementById("alison").submit(); 
         }
}
/*=====================================================
    edx function
======================================================*/    
function  edxSubmit(){
    if (document.getElementById("edx-checkbox").checked)
         {
            document.getElementById("edx").submit(); 
         }
}
/*=====================================================
    uw function
======================================================*/    
function  uwSubmit(){
    if (document.getElementById("uw-checkbox").checked)
         {
            document.getElementById("uw").submit(); 
         }
}


/*######################################################################################################################
    FOUR STEP : ALLOW POPUP
######################################################################################################################*/



/*################################################################################################################
   FIVE step : submit
################################################################################################################*/  document.getElementById("first-section-submit").onclick = function () {
    setTimeout( "udemySubmit()",1000);
    setTimeout( "courseraSubmit()", courseraTime);
    setTimeout( "alisonSubmit()", alisonTime);
    setTimeout( "edxSubmit()", edxTime);
    setTimeout( "uwSubmit()", uwTime);    
};