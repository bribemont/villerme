YUI().use('overlay', 'transition', 'panel', 'swf',
function(Y) {
    var ouHaaMBgaXBJW7 = new Y.Overlay({
        width: "170px",
        height: "170px",
        bodyContent: '<img src="/assets/uHaaMBgaXBJW7.png" alt="Palmarès 2013">',
        zIndex: 2
    }),
	a = Y.WidgetPositionAlign, inscription, freeRegistration;
    ouHaaMBgaXBJW7.render("#uHaaMBgaXBJW7");
    ouHaaMBgaXBJW7.set("align", {
        node: "#header H1",
        points: [a.CC, a.CC]
    });
    function showFreeRegistration() {
        if (freeRegistration) {
            return freeRegistration.show();
        }
        freeRegistration = new Y.Panel({
            bodyContent: '<iframe src="/registrations/new?guest=true"></iframe>',
            width      : 643,
            zIndex     : 6,
            centered   : true,
            modal      : true,
            render     : '#personnesInvitees',
            buttons: [
                {
                    value  : 'Fermer',
                    section: Y.WidgetStdMod.FOOTER,
                    action : function (e) {
                        e.preventDefault();
                        freeRegistration.hide();
                    }
                }
            ]
        });
    }
	inscription = new Y.Panel({
	    srcNode      : '#inscriptions',
	    headerContent: 'Bulletin à compléter avant le 13 mars',
	    width        : 800, // 643
	    zIndex       : 5,
	    centered     : true,
	    modal        : true,
	    visible      : false,
	    render       : true,
	});
    inscription.addButton({
        value  : 'Partenaires de la Fondation et des Rencontres Villermé, étudiants, entreprises candidates au prix...',
        section: Y.WidgetStdMod.FOOTER,
        action : function (e) {
            e.preventDefault();
            showFreeRegistration();
		    inscription.hide();
        }
    });
	// Y.one('#uHaaMBgaXBJW7').on('click', function (e) {
	//     e.preventDefault();
	//     Y.one('#dBw').setHTML('<iframe src="/registrations/new"></iframe>');
	// 	Y.one('#inscriptions').removeClass('yui3-loading');
	//     inscription.show();
	// });

	var i5001699 = new Y.Overlay({
	        width: "112px",
	        height: "80px",
	        bodyContent: '<a href="/rencontres-villerme.pdf" target="_blank"><img alt="Dépliant" id="5001699" src="/assets/depliant.png"></a>',
	        zIndex: 3
	    });
	i5001699.render("#di5001699");
	i5001699.set("align", {
	    node: "#header h1",
	    points: [a.TC, a.RC]
	});

    var oT2tq9Av82QNm6 = new Y.Overlay({
        width: "151px",
        height: "140px",
        bodyContent: '<img src="/assets/T2tq9Av82QNm6.jpg" alt="Fondation Université Montpellier 1">',
        zIndex: 2
    });
    oT2tq9Av82QNm6.render("#T2tq9Av82QNm6");
    oT2tq9Av82QNm6.set("align", {
        node: "#contentSouth",
        points: [a.BR, a.BR]
    });

    var yizKaJweSm046 = new Y.Overlay({
        width: "147px",
        height: "100px",
        bodyContent: '<img src="/assets/ziyKaJweSm046.png" alt="Oscar terrassier">',
        zIndex: 2
    });
    yizKaJweSm046.render("#yizKaJweSm046");
    yizKaJweSm046.set("align", {
        node: "#clap",
        points: [a.LC, a.TL]
    });
	Y.one('#yizKaJweSm046').on('click', function (e) {
	  e.preventDefault();
	  var params = {
	      version: "9.0.115",
	      fixedAttributes: { allowScriptAccess: "always", allowNetworking: "all" },
	      flashVars: { flv: "OSCAR_TERRASSIER.flv", width: "625", height: "343", autoplay: "1", playercolor: "AE191E", loadingcolor: "ffffff", buttoncolor: "ffffff", slidercolor: "ffffff" }
	  };
	  var myswf = new Y.SWF("#visuel", "/player_flv_mini.swf", params);
	});

    var programme1 = Y.one('#vRNFhOvEQC4bN'),
    programme2 = Y.one('#wRNFhOvEQC4bN'),
    prix = Y.one('#xRNFhOvEQC4bN'),
    villerme = Y.one('#yRNFhOvEQC4bN'),
    partenaires = Y.one('#aRNFhOvEQC4bN');

    // i5001699.on('click',
    // function(e) {
    //     // e.preventDefault();
    //     Y.one("#visuel").setHTML('<h2>Informations pratiques</h2><p>Les journées des 20 et 22 mars ont lieu à la <a href="http://maps.google.fr/maps?q=rue%20Marcel%20Dassault%20Castelnau%20le%20Lez" target="_blank">Maison de l’hospitalisation privée</a><br />288, rue Hélène Boucher - 34170 Castelnau le Lez</p><br/><p>La rencontre dédicace avec Jean Auroux, le 20 mars à 18h, a lieu à l’auditorium du Musée Fabre,<br />Esplanade Charles de Gaulle, à Montpellier (arrêt des lignes 1 et 2 : Comédie)</p><br/><p>Frais de participation : 20 euros (gratuit pour les étudiants)</p><br/><p>Renseignements : conference-fondation@fondation.univ-montp1.fr</p>');
    // });
    programme1.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<div style="text-align:center;margin-top:30px"><a href="/rencontres-villerme-03-20.pdf" target="_blank"><img src="/assets/4P_Part2.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="/rencontres-villerme-03-22.pdf" target="_blank"><img src="/assets/4P_Part3.jpg"/></a></div>');
    });
    programme2.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<h2>Informations pratiques</h2><p>Les journées des 20 et 22 mars ont lieu à la <a href="/assets/4P_Part4.jpg" target="_blank">Maison de l’hospitalisation privée</a><br />288, rue Hélène Boucher - 34170 Castelnau le Lez</p><br/><p>La rencontre dédicace avec Jean Auroux, le 20 mars à 18h, a lieu à l’auditorium du <a href="http://maps.google.fr/maps?q=musée+fabre+montpellier" target="_blank">Musée Fabre</a>,<br />Esplanade Charles de Gaulle, à Montpellier (arrêt des lignes 1 et 2 : Comédie)</p><br/><p>Frais de participation : 20 euros (gratuit pour les étudiants)</p><br/><p>Renseignements : <a href="mailto:conference-fondation@fondation.univ-montp1.fr">conference-fondation@fondation.univ-montp1.fr</a></p>');
    });
    prix.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML("<h2>Modalités d’attribution <span>du Prix Villermé</span></h2><h4>Seront sélectionnés, pour l’édition 2013, les films produits et réalisés dans le cadre des entreprises en vue d’assurer la santé et la sécurité au travail.</h4><p>Les candidats auront envoyé leur film à la Fondation, accompagné d’un dossier complété par leurs soins.</p><h4>Le Comité d’organisation sélectionnera les films en tenant compte de :</h4><ul><li>la fourniture du film en temps et en heure,</li><li>l’adéquation du sujet du film,</li><li>la fourniture du dossier d’accompagnement,</li><li>l’autorisation de projection et de diffusion.</li></ul><h4>Un Grand Prix sera attribué par le jury. Le public sera appelé à attribuer un prix spécial. Les prix sont décernés en prenant en compte de :</h4><ul id=\"apave\"><li>la pertinence et l’efficacité du message,</li><li>la qualité cinématographique,</li><li>les efforts de diffusion,</li><li>les améliorations de la santé et la sécurité au travail constatées à la suite de la diffusion de ces films,</li><li>les réactions du public visé.</li></ul><h4>La CAPEB décernera un prix spécial TPE Bâtiment.</h4>");
    });
    villerme.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML("<h2>Qui est <span>Louis-René Villermé ?</span></h2><p>Louis-René VILLERME (1782-1863), élu à l’Académie de Médecine en 1823 et à l’Académie des Sciences morales et politiques en 1832, est à la fois médecin, statisticien, démographe et l’un de ceux qui introduisent en France l’idée de prévention des accidents du travail.</p><p>Il débute dans les services de santé des armées napoléoniennes. Après son licenciement par la Restauration, il publie de nombreuses études dont, en 1840, le tableau physique et moral des ouvriers employés dans les manufactures de coton, de laine et de soie, son œuvre majeure qui sera l’une des sources de la loi du 22 mars 1841, laquelle, notamment, limite la durée de travail des enfants.</p><p>Il étudie ensuite les accidents produits dans les ateliers industriels par les appareils mécaniques, cinquante ans avant la loi sur les accidents du travail.</p><p>En 1848, il est nommé membre du Conseil Supérieur d’Hygiène, dès la création de celui-ci.</p>");
    });
    partenaires.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML("<h2>Comment vous associer à ce projet et dans quel but ?</h2><ul><li>Par le biais d’une subvention</li><li>Par le biais d’un don fléché ouvrant droit à défiscalisation</li></ul><p>Entreprises assujetties à l’IR ou à l’IS : réduction d’impôt de 60% du montant du don, dans la limite de 0,5% du chiffre d’affaires</p><p>Particuliers : réduction d’impôt de 66% du montant du don (ou de 75% de ce montant s’ils sont assujettis à l’impôt sur la fortune).</p><p>Par exemple, un don de 5000 euros n’en coûtera en réalité que 2000 à une entreprise et 1700 à un particulier.</p><p>En nous faisant bénéficier de vos compétences et savoir faire, de votre réseau…</p><div><p>Votre soutien pourra, en fonction de son montant, de ses modalités et de vos souhaits, contribuer à préparer, organiser, faire connaître la manifestation, en organiser et diffuser les retombées, à récompenser les lauréats.</p><p>Il contribuera à accroître la notoriété de votre établissement, et à le faire figurer parmi ceux qui se soucient de la santé au travail, gage et condition de la santé et de la pérennité de nos entreprises.</p></div><h3>Pour toute information : <a href=\"mailto:fondation@univ-montp1.fr\">fondation@univ-montp1.fr</a></h3>");
    });

});
