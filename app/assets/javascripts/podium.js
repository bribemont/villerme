YUI().use('overlay', 'transition', 'swf', 'scrollview', 'scrollview-paginator', // , 'panel'
function(Y) {
  var aHeaderH1 = new Y.Overlay({ width: "170px", height: "170px", bodyContent: '<a href="/"><img src="/z/png/r214.png" alt="Accueil"></a>', zIndex: 1000 }), a = Y.WidgetPositionAlign;
  aHeaderH1.render("#oHeaderH1");
  aHeaderH1.set("align", { node: "#header H1", points: [a.CC, a.CC] });
  // var divHeaderH1 = new Y.Overlay({ width: "112px", height: "80px", bodyContent: '<a href="/bienvenue" target="_top"><img alt="Accueil" src="/z/png/divHeaderH1.png"></a>', zIndex: 3 });
  // divHeaderH1.render("#divHeaderH1");
  // divHeaderH1.set("align", { node: "#header h1", points: [a.TC, a.RC] });
  var aContentSouth = new Y.Overlay({ width: "94px", height: "87px", bodyContent: '<img src="/z/jpg/fondation.jpg" alt="Fondation Université Montpellier 1" style="width:94px;height:87px;">', zIndex: 2 });
  aContentSouth.render("#aContentSouth");
  aContentSouth.set("align", { node: "#contentSouth", points: [a.BR, a.BR] });
  var video1 = Y.one('#video1'), video3 = Y.one('#video3'), oediv1 = Y.one('#oediv1'), oediv2 = Y.one('#oediv2'), oediv3 = Y.one('#oediv3');
video1.on('click', function(e) { e.preventDefault(); var params = { version: "9.0.115", fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" }, flashVars: { flv: "2013-06-26-779784-prix-du-jury-2013_-cmsa_-la-taille-de-la-vigne_vts_01_1.flv", autoload: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" } }; var myswf = new Y.SWF("#visuel", "/player_flv_mini.swf", params); });
video3.on('click', function(e) { e.preventDefault(); var params = { version: "9.0.115", fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" }, flashVars: { flv: "2013-06-26-779693-prix_capeb.flv", width: "625", height: "343", autoload: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" } }; var myswf = new Y.SWF("#visuel", "/player_flv_mini.swf", params); });
oediv1.on('click', function(e) { e.preventDefault(); var params = { version: "9.0.115", fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" }, flashVars: { flv: "2013-06-26-779784-prix-du-jury-2013_-cmsa_-la-taille-de-la-vigne_vts_01_1.flv", width: "625", height: "343", autoload: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" } }; var myswf = new Y.SWF("#visuel", "/player_flv_mini.swf", params); });
oediv2.on('click', function(e) { e.preventDefault(); var params = { version: "9.0.115", fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" }, flashVars: { flv: "2013-06-26-779695-prix_public.flv", width: "625", height: "343", autoload: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" } }; var myswf = new Y.SWF("#visuel", "/player_flv_mini.swf", params); });
oediv3.on('click', function(e) { e.preventDefault(); var params = { version: "9.0.115", fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" }, flashVars: { flv: "2013-06-26-779693-prix_capeb.flv", width: "625", height: "343", autoload: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" } }; var myswf = new Y.SWF("#visuel", "/player_flv_mini.swf", params); });
  // var feedback = new Y.Panel({ srcNode : '#feedbacks', headerContent: 'Aidez-nous à améliorer les Rencontres Villermé...', width : 643, zIndex : 5, centered : true, modal : true, visible : false, render : true, });
  // aHeaderH1.on('click', function (e) { e.preventDefault(); Y.one('#fContainer').setHTML('<iframe src="/feedbacks/new"></iframe>'); Y.one('#feedbacks').removeClass('yui3-loading'); feedback.show(); });
 var scrollView = new Y.ScrollView({
     id: "scrollview",
     srcNode : '#scrollview-content',
     width : 323,
     flick: {
         minDistance:10,
         minVelocity:0.3,
         axis: "x"
     }
 });

 scrollView.plug(Y.Plugin.ScrollViewPaginator, {
     selector: 'li'
 });

 scrollView.render();

 var content = scrollView.get("contentBox");

 content.delegate("click", function(e) {
     if (Math.abs(scrollView.lastScrolledAmt) < 2) {
         alert(e.currentTarget.getAttribute("alt"));
     }
 }, "img");

 content.delegate("mousedown", function(e) {
     e.preventDefault();
 }, "img");

 Y.one('#scrollview-next').on('click', Y.bind(scrollView.pages.next, scrollView.pages));
 Y.one('#scrollview-prev').on('click', Y.bind(scrollView.pages.prev, scrollView.pages));
});
// video1.on('click', function(e) { e.preventDefault(); Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/yF9_Ul0f51g" frameborder="0" allowfullscreen></iframe>'); });
// video3.on('click', function(e) { e.preventDefault(); Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/nqrwix0MKik" frameborder="0" allowfullscreen></iframe>'); });
// oediv1.on('click', function(e) { e.preventDefault(); Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/yF9_Ul0f51g" frameborder="0" allowfullscreen></iframe>'); });
// oediv2.on('click', function(e) { e.preventDefault(); Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/Snrjz_MtOnI" frameborder="0" allowfullscreen></iframe>'); });
// oediv3.on('click', function(e) { e.preventDefault(); Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/nqrwix0MKik" frameborder="0" allowfullscreen></iframe>'); });
