$(document).ready(function(){
  $(initViz);
  $("#test").on("click",function(){
    selectParam("QB Selection","Brees, Drew");
  })
  topEPA.forEach(function(v){
    var b = $('<button type="button" class="btn btn-primary" data="'+v+'">'+v+'</button>');
    $("#topEPAList").append(b)
  });

  topPCT.forEach(function(v){
    var b = $('<button type="button" class="btn btn-primary" data="'+v+'">'+v+'</button>');
    $("#topPctList").append(b)
  });

  abcList.forEach(function(v){
    var b = $('<button type="button" class="btn btn-secondary" data="'+v+'">'+v+'</button>');
    $("#abcList").append(b)
  })

  $(".btn").on("click",function(){
    var d=$(this).attr("data");
    selectParam("QB Selection",d);

    $(".btn").removeClass("active");
    $(this).addClass("active");
  })
});
var viz;
function initViz(){
  var c = document.getElementById('tab'),
  u="https://public.tableau.com/shared/8TTQWGJ5Y";
  var h=(c.offsetWidth<800) ? "100%" : (c.offsetWidth*0.6)+"px";
  var o={
    hideTabs:true,
    width:c.offsetWidth,
    height:h
    };


  viz= new tableau.Viz(c,u,o);
};


function selectParam(p,v){
  viz.getWorkbook().changeParameterValueAsync(p,v);
};
