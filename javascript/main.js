/*################################################################################################################
###################################################################################################################

                                            first section

#########################################################################################################################################################################################################################################*/  



/*###############################################################################################################
first step : copy the value of main search box to all serch box of websites
###############################################################################################################*/ document.getElementById("search-box-input").oninput = function () {
    "use strict";
    document.getElementById("googleBox").value = this.value;
    document.getElementById("bingBox").value = this.value;
    document.getElementById("duckduckgoBox").value = this.value;
    document.getElementById("askBox").value = this.value;
    document.getElementById("aolBox").value = this.value;
    
    
    document.getElementById("wowBox").value = this.value;
    document.getElementById("infospaceBox").value = this.value;
    document.getElementById("contenkoeBox").value = this.value;
    document.getElementById("alheaBox").value = this.value;
    document.getElementById("yahooBox").value = this.value;
};
/*################################################################################################################# second step : select all function
###############################################################################################################*/
document.getElementById("first-section-select-all").onclick = function () {
    "use strict";
    document.getElementById("google-checkbox").setAttribute("checked", "true");
    document.getElementById("bing-checkbox").setAttribute("checked", "true");
    document.getElementById("duckduckgo-checkbox").setAttribute("checked", "true");
    document.getElementById("ask-checkbox").setAttribute("checked", "true");
    document.getElementById("aol-checkbox").setAttribute("checked", "true");
};
/*##############################################################################################################
third step : search on website which the user select it
##############################################################################################################*/
/*===============================================================================================================
    first step : create array to store the value of time on it
===============================================================================================================*/  var times = [ 1000, 2000, 3000, 4000, 5000];
 
/*================================================================================================================
   second step : define the varibles
================================================================================================================*/
var googleTime, bingTime, duckduckgoTime, askTime, aolTime;
var googleFlag,  bingFlag,  duckduckgoFlag, askFlag, aolFlag;
/*================================================================
    third step : set flags
=================================================================*/
/*=====================================================
    googleFlag
=======================================================*/    
    
if (document.getElementById("google-checkbox").checked)
    {
        googleFlag = 1;
    }
else 
    {
        googleFlag = 0;
    }
/*=====================================================
    bingFlag
=======================================================*/    
    
if (document.getElementById("bing-checkbox").checked)
    {
        bingFlag = 1;
    }
else 
    {
       bingFlag = 0;
    }
/*=====================================================
    duckduckgo Flag
=======================================================*/    
    
if (document.getElementById("duckduckgo-checkbox").checked)
    {
       duckduckgoFlag = 1;
    }
else 
    {
        duckduckgoFlag = 0;
    }
/*=====================================================
    ask Flag
=======================================================*/    
    
if (document.getElementById("ask-checkbox").checked)
    {
        dogpileFlag = 1;
    }
else 
    {
        dogpileFlag = 0;
    }
/*=====================================================
   udmyFlag
=======================================================*/    
    
if (document.getElementById("aol-checkbox").checked)
    {
        aolFlag = 1;
    }
else 
    {
        aolFlag = 0;
    }
/*==============================================================================================================
   four step : all possibles
==============================================================================================================*/
/* =========================================
        bing flag
===========================================*/        
if ( bingFlag == 1 && googleFlag == 0)
    {
         bingTime = times[0];
    }
else if (bingFlag == 1 && googleFlag == 1 )
    {
         bingTime = times[1];
    }
/*==========================================
    duckduckgo flag
===========================================*/    
else if (duckduckgoFlag == 1 && bingFlag == 0 && googleFlag == 0 )
    {
         duckduckgoTime = times[0];   
    }
else if (duckduckgoFlag == 1 && bingFlag == 1 && googleFlag == 0 )
    {
         duckduckgoTime = times[1];   
    }
else if (duckduckgoFlag == 1 && bingFlag == 1 && googleFlag == 1 )
    {
         duckduckgoTime = times[2];   
    }
/*===========================================
    ask flag
============================================*/    
else if ( askFlag == 1 && duckduckgoFlag == 0 && bingFlag == 0 && googleFlag == 0 )
    {
        askTime = times[0];
    }
else if ( askFlag == 1 && duckduckgoFlag == 1 && bingFlag == 0 && googleFlag == 0 )
    {
        askTime = times[1];
    }
else if ( askFlag == 1 && duckduckgoFlag == 1 && bingFlag == 1 && googleFlag == 0 )
    {
        askTime = times[2];
    }
else if ( askFlag == 1 && duckduckgoFlag == 1 && bingFlag == 1 && googleFlag == 1 )
    {
        askTime = times[3];
    }
/*=============================================
    aol flag
==============================================*/    
else if ( aolFlag == 1 && askFlag == 0 && duckduckgoFlag == 0 && bingFlag == 0 && googleFlag == 0 )
    {
        aolTime = times[0];
    }
else if ( aolFlag == 1 && askFlag == 1 && duckduckgoFlag == 0 && bingFlag == 0 && googleFlag == 0 )
    {
        aolTime = times[1];
    }
else if ( aolFlag == 1 && askFlag == 1 && duckduckgoFlag == 1 && bingFlag == 0 && googleFlag == 0 )
    {
        aolTime = times[2];
    }
else if ( aolFlag == 1 && askFlag == 1 && duckduckgoFlag == 1 && bingFlag == 1 && googleFlag == 0 )
    {
        aolTime = times[3];
    }
else if ( aolFlag == 1 && askFlag == 1 && duckduckgoFlag == 1 && bingFlag == 1 && googleFlag == 1 )
    {
        aolTime = times[4];
    }
else
    {
         googleTime = times[0];
         bingTime = times[1];
         duckduckgoTime = times[2];
         askTime = times[3];
         aolTime = times[4];
    }
/*==============================================================================================================
   five step : set the function when the user select or not select 
==============================================================================================================*/
/*=====================================================
    google function
======================================================*/    
function googleSubmit(){
    if (document.getElementById("google-checkbox").checked)
         {
            document.getElementById("google").submit(); 
         }
}

/*=====================================================
    bing function
======================================================*/    
function bingSubmit(){
    if (document.getElementById("bing-checkbox").checked)
        {
            document.getElementById("bing").submit(); 
        }
}
/*=====================================================
    duckduckgo function
======================================================*/    
function duckduckgoSubmit(){
    if (document.getElementById("duckduckgo-checkbox").checked)
        {
            document.getElementById("duckduckgo").submit(); 
        }
}
/*=====================================================
   ask function
======================================================*/    
function askSubmit(){
    if (document.getElementById("ask-checkbox").checked)
        {
            document.getElementById("ask").submit(); 
        }
}
/*=====================================================
  udmy function
======================================================*/    
function aolSubmit(){
    if (document.getElementById("aol-checkbox").checked)
        {
            document.getElementById("aol").submit(); 
        }
}
/*###############################################################################################################
    FOUR STEP : ALLOW POPUP
###############################################################################################################*/



/*###############################################################################################################
   FIVE step : submit
################################################################################################################*/  document.getElementById("first-section-submit").onclick = function () {
    setTimeout( "googleSubmit()",1000);
    setTimeout( "bingSubmit()", bingTime);
    setTimeout( "duckduckgoSubmit()", duckduckgoTime);
    setTimeout( "askSubmit()", askTime);
    setTimeout( "aolSubmit()", aolTime);
};



/*########################################################################################################################################################################################################################################

                                           second section

###################################################################################################################
#################################################################################################################*/  



/*#################################################################################################################
first step : copy the value of main search box to all serch box of websites
################################################################################################################*/ 
    
    

/*################################################################################################################ second step : select all function
##################################################################################################################*/
document.getElementById("second-section-select-all").onclick = function () {
    "use strict";
    document.getElementById("wow-checkbox").setAttribute("checked", "true");
    document.getElementById("infospace-checkbox").setAttribute("checked", "true");
    document.getElementById("contenko-checkbox").setAttribute("checked", "true");
    document.getElementById("alhea-checkbox").setAttribute("checked", "true");
    document.getElementById("yahoo-checkbox").setAttribute("checked", "true");
    
};
/*############################################################################################################
third step : search on website which the user select it
############################################################################################################*/
/*===============================================================================================================
    first step : create array to store the value of time on it
===============================================================================================================*/  
 
/*=================================================================================================================
   second step : define the varibles
=================================================================================================================*/
var wowTime, infospaceTime, contenkoTime, alheaTime, yahooTime ;
var wowFlag,  infospaceFlag, contenkoFlag, alheaFlag, yahooTime ;
/*================================================================
    third step : set flags
=================================================================*/
/*=====================================================
    wowFlag
=======================================================*/    
    
if (document.getElementById("wow-checkbox").checked)
    {
        wowFlag = 1;
    }
else 
    {
        wowFlag = 0;
    }
/*=====================================================
   infospaceFlag
=======================================================*/    
    
if (document.getElementById("infospace-checkbox").checked)
    {
        infospaceFlag = 1;
    }
else 
    {
       infospaceFlag = 0;
    }
/*=====================================================
   contenkoFlag
=======================================================*/    
    
if (document.getElementById("contenko-checkbox").checked)
    {
        contenkoFlag = 1;
    }
else 
    {
       contenkoFlag = 0;
    }
/*=====================================================
   alheaFlag
=======================================================*/    
    
if (document.getElementById("alhea-checkbox").checked)
    {
        alheaFlag = 1;
    }
else 
    {
       alheaFlag = 0;
    }
/*=====================================================
   yahooFlag
=======================================================*/    
    
if (document.getElementById("yahoo-checkbox").checked)
    {
        yahooFlag = 1;
    }
else 
    {
       yahooFlag = 0;
    }

/*==============================================================================================================
   four step : all possibles
==============================================================================================================*/
/* =========================================
        bing flag
===========================================*/        
if ( infospaceFlag == 1 && wowFlag == 0)
    {
         infospaceTime = times[0];
    }
else if (infospaceFlag == 1 && wowFlag == 1 )
    {
         infospaceTime = times[1];
    }
/*==========================================
    duckduckgo flag
===========================================*/    
else if (contenkoFlag == 1 && infospaceFlag == 0 && wowFlag == 0 )
    {
        contenkoTime = times[0];   
    }
else if (contenkoFlag == 1 && infospaceFlag == 1 && wowFlag == 0 )
    {
         contenkoTime = times[1];   
    }
else if (contenkoFlag == 1 && bingFlag == 1 && wowFlag == 1 )
    {
         contenkoTime = times[2];   
    }
/*===========================================
    ask flag
============================================*/    
else if ( alheaFlag == 1 && contenkoFlag == 0 && infospaceFlag == 0 && wowFlag == 0 )
    {
        alheaTime = times[0];
    }
else if ( alheaFlag == 1 && contenkoFlag == 1 && infospaceFlag == 0 && wowFlag == 0 )
    {
        alheaTime = times[1];
    }
else if ( alheaFlag == 1 && contenkoFlag == 1 && infospaceFlag == 1 && wowFlag == 0 )
    {
        alheaTime = times[2];
    }
else if ( alheaFlag == 1 && contenkoFlag == 1 && infospaceFlag == 1 && wowFlag == 1 )
    {
        alheaTime = times[3];
    }
/*=============================================
    aol flag
==============================================*/    
else if ( yahooFlag == 1 && alheaFlag == 0 && contenkoFlag == 0 && infospaceFlag == 0 && wowFlag == 0 )
    {
        yahooTime = times[0];
    }
else if ( yahooFlag == 1 && alheaFlag == 1 && contenkoFlag == 0 && infospaceFlag == 0 && wowFlag == 0 )
    {
        yahooTime = times[1];
    }
else if ( yahooFlag == 1 && alheaFlag == 1 && contenkoFlag == 1 && infospaceFlag == 0 && wowFlag == 0 )
    {
        yahooTime = times[2];
    }
else if ( yahooFlag == 1 && alheaFlag == 1 && contenkoFlag == 1 && infospaceFlag == 1 && wowFlag == 0 )
    {
        yahooTime = times[3];
    }
else if ( yahooFlag == 1 && alheaFlag == 1 && contenkoFlag == 1 && infospaceFlag == 1 && wowFlag == 1 )
    {
        yahooTime = times[4];
    }
else
    {
         wowTime = times[0];
         infospaceTime = times[1];
         contenkoTime = times[2];
         alheaTime = times[3];
         aolTime = times[4];
    }

/*==============================================================================================================
   five step : set the function when the user select or not select 
===============================================================================================================*/
/*=====================================================
    wow function
======================================================*/    
function wowSubmit(){
    if (document.getElementById("wow-checkbox").checked)
         {
            document.getElementById("wow").submit(); 
         }
}

/*=====================================================
    infospace function
======================================================*/    
function infospaceSubmit(){
    if (document.getElementById("infospace-checkbox").checked)
        {
            document.getElementById("infospace").submit(); 
        }
}
/*=====================================================
    contenko function
======================================================*/    
function contenkoSubmit(){
    if (document.getElementById("contenko-checkbox").checked)
        {
            document.getElementById("contenko").submit(); 
        }
}
/*=====================================================
    alhea function
======================================================*/    
function alheaSubmit(){
    if (document.getElementById("alhea-checkbox").checked)
        {
            document.getElementById("alhea").submit(); 
        }
}
/*=====================================================
    yahoo function
======================================================*/    
function yahooSubmit(){
    if (document.getElementById("yahoo-checkbox").checked)
        {
            document.getElementById("yahoo").submit(); 
        }
}



/*###############################################################################################################
   FIVE step : submit
################################################################################################################*/  document.getElementById("second-section-submit").onclick = function () {
    setTimeout( "wowSubmit()",1000);
    setTimeout( "infospaceSubmit()", infospaceTime);
    setTimeout( "contenkoSubmit()", contenkoTime);
    setTimeout( "alheaSubmit()", alheaTime);
    setTimeout( "yahooSubmit()", yahooTime);
    
};
