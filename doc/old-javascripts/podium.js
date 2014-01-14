YUI().use('overlay', 'transition', 'panel', // 'swf'
function(Y) {

var aHeaderH1 = new Y.Overlay({
    width: "170px",
    height: "170px",
    bodyContent: '<a href="#"><img src="/assets/podium/aHeaderH1.png" alt="Accueil"></a>',
    zIndex: 1000
}),
a = Y.WidgetPositionAlign;
aHeaderH1.render("#oHeaderH1");
aHeaderH1.set("align", {
    node: "#header H1",
    points: [a.CC, a.CC]
});

var divHeaderH1 = new Y.Overlay({
        width: "112px",
        height: "80px",
        bodyContent: '<a href="/bienvenue" target="_top"><img alt="Accueil" src="/assets/podium/divHeaderH1.png"></a>',
        zIndex: 3
    });
divHeaderH1.render("#divHeaderH1");
divHeaderH1.set("align", {
    node: "#header h1",
    points: [a.TC, a.RC]
});

var aContentSouth = new Y.Overlay({
    width: "151px",
    height: "140px",
    bodyContent: '<img src="/assets/podium/fondation.jpg" alt="Fondation Université Montpellier 1">',
    zIndex: 2
});
aContentSouth.render("#aContentSouth");
aContentSouth.set("align", {
    node: "#contentSouth",
    points: [a.BR, a.BR]
});

//     step3 = Y.one('#step3'),
//     step4 = Y.one('#step4'),
//     step5 = Y.one('#step5'),
var video1 = Y.one('#video1'),
    video3 = Y.one('#video3'),
    oediv1 = Y.one('#oediv1'),
    oediv2 = Y.one('#oediv2'),
    oediv3 = Y.one('#oediv3');

    // step1.on('click',
    // function(e) {
    //     e.preventDefault();
    //     Y.one("#visuel").setHTML('<img src="/assets/podium/palmares.jpg" usemap="#palmares" alt="Cliquez sur son logo pour accéder au site partenaire."><map name="palmares"><area coords="30,30,203,160" href="#" alt="Grand Prix" id="grandPrix"><area coords="192,107,433,237" href="#" alt="CAPEB" id="capeb"><area coords="422,183,595,313" href="#" alt="Prix du public" id="public"></map>');
    // });
    // step3.on('click',
    // function(e) {
    //     e.preventDefault();
    //     Y.one("#visuel").setHTML("<h2>Modalités d’attribution <span>du Prix Villermé</span></h2><h4>Seront sélectionnés, pour l’édition 2013, les films produits et réalisés dans le cadre des entreprises en vue d’assurer la santé et la sécurité au travail.</h4><p>Les candidats auront envoyé leur film à la Fondation, accompagné d’un dossier complété par leurs soins.</p><h4>Le Comité d’organisation sélectionnera les films en tenant compte de :</h4><ul><li>la fourniture du film en temps et en heure,</li><li>l’adéquation du sujet du film,</li><li>la fourniture du dossier d’accompagnement,</li><li>l’autorisation de projection et de diffusion.</li></ul><h4>Un Grand Prix sera attribué par le jury. Le public sera appelé à attribuer un prix spécial. Les prix sont décernés en prenant en compte de :</h4><ul id=\"apave\"><li>la pertinence et l’efficacité du message,</li><li>la qualité cinématographique,</li><li>les efforts de diffusion,</li><li>les améliorations de la santé et la sécurité au travail constatées à la suite de la diffusion de ces films,</li><li>les réactions du public visé.</li></ul><h4>La CAPEB décernera un prix spécial TPE Bâtiment.</h4>");
    // });
    // step4.on('click',
    // function(e) {
    //     e.preventDefault();
    //     Y.one("#visuel").setHTML("<h2>Qui est <span>Louis-René Villermé ?</span></h2><p>Louis-René VILLERME (1782-1863), élu à l’Académie de Médecine en 1823 et à l’Académie des Sciences morales et politiques en 1832, est à la fois médecin, statisticien, démographe et l’un de ceux qui introduisent en France l’idée de prévention des accidents du travail.</p><p>Il débute dans les services de santé des armées napoléoniennes. Après son licenciement par la Restauration, il publie de nombreuses études dont, en 1840, le tableau physique et moral des ouvriers employés dans les manufactures de coton, de laine et de soie, son œuvre majeure qui sera l’une des sources de la loi du 22 mars 1841, laquelle, notamment, limite la durée de travail des enfants.</p><p>Il étudie ensuite les accidents produits dans les ateliers industriels par les appareils mécaniques, cinquante ans avant la loi sur les accidents du travail.</p><p>En 1848, il est nommé membre du Conseil Supérieur d’Hygiène, dès la création de celui-ci.</p>");
    // });
    // step5.on('click',
    // function(e) {
    //     e.preventDefault();
    //     Y.one("#visuel").setHTML("<h2>Comment vous associer à ce projet et dans quel but ?</h2><ul><li>Par le biais d’une subvention</li><li>Par le biais d’un don fléché ouvrant droit à défiscalisation</li></ul><p>Entreprises assujetties à l’IR ou à l’IS : réduction d’impôt de 60% du montant du don, dans la limite de 0,5% du chiffre d’affaires</p><p>Particuliers : réduction d’impôt de 66% du montant du don (ou de 75% de ce montant s’ils sont assujettis à l’impôt sur la fortune).</p><p>Par exemple, un don de 5000 euros n’en coûtera en réalité que 2000 à une entreprise et 1700 à un particulier.</p><p>En nous faisant bénéficier de vos compétences et savoir faire, de votre réseau…</p><div><p>Votre soutien pourra, en fonction de son montant, de ses modalités et de vos souhaits, contribuer à préparer, organiser, faire connaître la manifestation, en organiser et diffuser les retombées, à récompenser les lauréats.</p><p>Il contribuera à accroître la notoriété de votre établissement, et à le faire figurer parmi ceux qui se soucient de la santé au travail, gage et condition de la santé et de la pérennité de nos entreprises.</p></div><h3>Pour toute information : <a href=\"mailto:fondation@univ-montp1.fr\">fondation@univ-montp1.fr</a></h3>");
    // });

	// Y.one('#grandPrix').on('click', function (e) {
	//   e.preventDefault();
	//   // Y.one("#visuel").setHTML('<div style="width:420px;height:315px;margin: 20px auto 0px" id="vObject"></div>');
	//   var params = {
	//       version: "9.0.115",
	//       fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" },
	//       flashVars: { flv: "http://www.youtube.com/v/yF9_Ul0f51g?hl=fr_FR&amp;version=3", width: "420", height: "315", autoplay: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" }
	//   };
	//   var myswf = new Y.SWF("#visual", "/player_flv_mini.swf", params);
	// });
	// 
	// Y.one('#capeb').on('click', function (e) {
	//   e.preventDefault();
	//   // Y.one("#visuel").setHTML('<div style="width:420px;height:315px;margin: 20px auto 0px" id="vObject"></div>');
	//   var params = {
	//       version: "9.0.115",
	//       fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" },
	//       flashVars: { flv: "prix_capeb.flv", width: "420", height: "315", autoplay: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" }
	//   };
	//   var myswf = new Y.SWF("#visual", "/player_flv_mini.swf", params);
	// });
	// 
	// Y.one('#public').on('click', function (e) {
	//   e.preventDefault();
	//   // Y.one("#visuel").setHTML('<div style="width:420px;height:315px;margin: 20px auto 0px" id="vObject"></div>');
	//   var params = {
	//       version: "9.0.115",
	//       fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" },
	//       flashVars: { flv: "prix_public.flv", width: "420", height: "315", autoplay: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" }
	//   };
	//   var myswf = new Y.SWF("#visual", "/player_flv_mini.swf", params);
	// });

    video1.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/yF9_Ul0f51g" frameborder="0" allowfullscreen></iframe>');
    });
    
    // video2.on('click',
    // function(e) {
    //     e.preventDefault();
    //     Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/Snrjz_MtOnI" frameborder="0" allowfullscreen></iframe>');
    // });
    
    video3.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/nqrwix0MKik" frameborder="0" allowfullscreen></iframe>');
    });

    oediv1.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/yF9_Ul0f51g" frameborder="0" allowfullscreen></iframe>');
    });

    oediv2.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/Snrjz_MtOnI" frameborder="0" allowfullscreen></iframe>');
    });

    oediv3.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<iframe width="625" height="343" style="width:625px;height:343px;margin:auto" src="http://www.youtube.com/embed/nqrwix0MKik" frameborder="0" allowfullscreen></iframe>');
    });

    var feedback = new Y.Panel({
      srcNode      : '#feedbacks',
      headerContent: 'Aidez-nous à améliorer les Rencontres Villermé...',
      width        : 643,
      zIndex       : 5,
      centered     : true,
      modal        : true,
      visible      : false,
      render       : true,
    });
    aHeaderH1.on('click', function (e) {
      e.preventDefault();
      Y.one('#fContainer').setHTML('<iframe src="/feedbacks/new"></iframe>');
      Y.one('#feedbacks').removeClass('yui3-loading');
      feedback.show();
    });
});
