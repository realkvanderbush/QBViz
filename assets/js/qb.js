$(document).ready(function(){
  $(initViz);

  topEPA.forEach(function(v){
    var p = (v=="Wilson, Russell")? " active":"";
    var b = $('<button type="button" class="btn btn-primary btn-qb'+p+'" data="'+v+'">'+v+'</button>');
    $("#topEPAList").append(b)
  });

  topPCT.forEach(function(v){
    var b = $('<button type="button" class="btn btn-primary btn-qb" data="'+v+'">'+v+'</button>');
    $("#topPctList").append(b)
  });

  bottomEPA.forEach(function(v){
    var b = $('<button type="button" class="btn btn-danger btn-qb" data="'+v+'">'+v+'</button>');
    $("#bottomEPAList").append(b)
  });

  bottomPCT.forEach(function(v){
    var b = $('<button type="button" class="btn btn-danger btn-qb" data="'+v+'">'+v+'</button>');
    $("#bottomPctList").append(b)
  });

var i=0;
  abcList.forEach(function(v){
    var b = $('<button type="button" class="btn btn-secondary btn-qb" data="'+v+'">'+v+'</button>');
    if(i%2==0){
      $("#abcList_e").append(b);
    } else{
      $("#abcList_o").append(b);
    }
    i+=1;
  });

  $(".btn-qb").on("click",function(){
    var d=$(this).attr("data");
    selectParam("QB Selection",d);

    $(".btn-qb").removeClass("active");
    $(this).addClass("active");
  })

  $("#hlpBtn").on("click",function(){
    $("#hlpModal").modal();
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
