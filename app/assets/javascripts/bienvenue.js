YUI().use('overlay', 'transition', 'panel', 'swf',
function(Y) {
    var uHaaMBgaXBJW6 = new Y.Overlay({
        width: "170px",
        height: "170px",
        bodyContent: '<img src="/z/png/uHaaMBgaXBJW6.png" alt="Candidatures 2014">',
        zIndex: 2
    }),
    a = Y.WidgetPositionAlign, candidate, jury, director;
    uHaaMBgaXBJW6.render("#uHaaMBgaXBJW6");
    uHaaMBgaXBJW6.set("align", {
        node: "#header H1",
        points: [a.CC, a.CC]
    });
    candidate = new Y.Panel({
        srcNode: '#candidates',
        headerContent: 'Vous concourez pour le...',
        width: 643,
        zIndex: 5,
        centered: true,
        modal: true,
        visible: false,
        render: true,
    });
    candidate.addButton({
        value: 'Fermer',
        section: Y.WidgetStdMod.FOOTER,
        action: function(e) {
            e.preventDefault();
            candidate.hide();
        }
    });
    Y.one('#uHaaMBgaXBJW6').on('click',
    function(e) {
        e.preventDefault();
        Y.one('#candidates').removeClass('yui3-loading');
        candidate.show();
    });
    jury = new Y.Panel({
        srcNode: '#jury',
        headerContent: 'Prix du Jury et du Public',
        width: 800,
        height: 600,
        zIndex: 6,
        centered: true,
        modal: true,
        visible: false,
        render: true
    });
    jury.addButton({
        value: 'Fermer',
        section: Y.WidgetStdMod.FOOTER,
        action: function(e) {
            e.preventDefault();
            jury.hide();
        }
    });
    Y.one('#DPqwyTrP4Y2t6').on('click',
    function(e) {
        e.preventDefault();
        Y.one('#jury').removeClass('yui3-loading');
        jury.show();
        candidate.hide();
    });
    director = new Y.Panel({
        srcNode: '#director',
        headerContent: 'Prix Jeunes Réalisateurs',
        width: 800,
        height: 600,
        zIndex: 6,
        centered: true,
        modal: true,
        visible: false,
        render: true
    });
    director.addButton({
        value: 'Fermer',
        section: Y.WidgetStdMod.FOOTER,
        action: function(e) {
            e.preventDefault();
            director.hide();
        }
    });
    Y.one('#DPqwyTrP4Y2t7').on('click',
    function(e) {
        e.preventDefault();
        Y.one('#director').removeClass('yui3-loading');
        director.show();
        candidate.hide();
    });

    var i5001699 = new Y.Overlay({
        width: "112px",
        height: "80px",
        bodyContent: '<a href="/podium"><img alt="Palmarès 2013" id="5001699" src="/z/png/palmares.png"></a>',
        zIndex: 3
    });
    i5001699.render("#di5001699");
    i5001699.set("align", {
        node: "#header h1",
        points: [a.CC, a.RC]
    });

    var oT2tq9Av82QNm6 = new Y.Overlay({
        width: "151px",
        height: "140px",
        bodyContent: '<img src="/z/jpg/T2tq9Av82QNm6.jpg" alt="Fondation Université Montpellier 1">',
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
        bodyContent: '<img src="/z/png/oscar-150.png" alt="Oscar la bricole">',
        zIndex: 2
    });
    yizKaJweSm046.render("#yizKaJweSm046");
    yizKaJweSm046.set("align", {
        node: "#clap",
        points: [a.LC, a.TL]
    });
    Y.one('#yizKaJweSm046').on('click',
    function(e) {
        e.preventDefault();
        var params = {
            version: "9.0.115",
            fixedAttributes: {
                allowScriptAccess: "always",
                allowNetworking: "all"
            },
            flashVars: {
                flv: "a85b49719d8bfb0bde79c03b5b921ac8.flv",
                width: "625",
                height: "343",
                autoplay: "1",
                playercolor: "AE191E",
                loadingcolor: "ffffff",
                buttoncolor: "ffffff",
                slidercolor: "ffffff"
            }
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
        Y.one("#visuel").setHTML('<div style="text-align:center;margin-top:30px"><a href="/z/pdf/rencontres-villerme-03-19.pdf" target="_blank"><img src="/z/jpg/4P_Part2.jpg"/></a>&nbsp;&nbsp;&nbsp;<a href="/z/pdf/rencontres-villerme-03-20.pdf" target="_blank"><img src="/z/jpg/4P_Part3.jpg"/></a></div>');
    });
    programme2.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<h2>Informations pratiques</h2><p><br></p><p>Les journées des 19 et 20 mars ont lieu<br>à la <a href="https://maps.google.fr/maps?q=rue+Vendémiaire+Montpellier&amp;hl=fr" target="_blank">Maison des étudiants Aimé Schoenig</a><br>rue Vendémiaire - Montpellier</p><p><br></p><p>Inscription (gratuite) avant le 10 mars 2014.</p><p><br></p><p>Renseignements : <a href="mailto:fondation@univ-montp1.fr">fondation@univ-montp1.fr</a></p>');
    });
    prix.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<br><h2>Modalités d’attribution <span>des Prix Villermé</span></h2><ul><li>Seront sélectionnés pour le Grand Prix et le Prix du Public les films produits et réalisés dans le cadre des entreprises en vue d’assurer la santé et la sécurité au travail...<br/><br/><a href="/z/pdf/prix-du-public.pdf" target="_blank">Télécharger le règlement d’attribution des prix du Jury et du Public</a></li><br><li>Seront sélectionnés, pour l’édition 2014 du prix du film Jeunes réalisateurs, les films produits et réalisés sur le sujet par des personnes de moins de 26 ans (collégiens, lycéens, étudiants, apprentis). Ces films pourront avoir été réalisés individuellement ou collectivement, sur une initiative personnelle ou dans un cadre pédagogique.<br/><br/><a href="/z/pdf/prix-jeunes-realisateurs.pdf" target="_blank">Télécharger le règlement d’attribution du Prix Jeunes Réalisateurs</a></li></ul>');
    });
    // <h4>Seront sélectionnés, pour l’édition 2013, les films produits et réalisés dans le cadre des entreprises en vue d’assurer la santé et la sécurité au travail.</h4><p>Les candidats auront envoyé leur film à la Fondation, accompagné d’un dossier complété par leurs soins.</p><h4>Le Comité d’organisation sélectionnera les films en tenant compte de :</h4><ul><li>la fourniture du film en temps et en heure,</li><li>l’adéquation du sujet du film,</li><li>la fourniture du dossier d’accompagnement,</li><li>l’autorisation de projection et de diffusion.</li></ul><h4>Un Grand Prix sera attribué par le jury. Le public sera appelé à attribuer un prix spécial. Les prix sont décernés en prenant en compte de :</h4><ul id=\"apave\"><li>la pertinence et l’efficacité du message,</li><li>la qualité cinématographique,</li><li>les efforts de diffusion,</li><li>les améliorations constatées à la suite de la diffusion de ces films,</li><li>les réactions du public visé.</li></ul><h4>La CAPEB décernera un prix spécial TPE Bâtiment.</h4>
    villerme.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML("<h2>Qui est <span>Louis-René Villermé ?</span></h2><p>Louis-René VILLERME (1782-1863), élu à l’Académie de Médecine en 1823 et à l’Académie des Sciences morales et politiques en 1832, est à la fois médecin, statisticien, démographe et l’un de ceux qui introduisent en France l’idée de prévention des accidents du travail.</p><p>Il débute dans les services de santé des armées napoléoniennes. Après son licenciement par la Restauration, il publie de nombreuses études dont, en 1840, le tableau physique et moral des ouvriers employés dans les manufactures de coton, de laine et de soie, son œuvre majeure qui sera l’une des sources de la loi du 22 mars 1841, laquelle, notamment, limite la durée de travail des enfants.</p><p>Il étudie ensuite les accidents produits dans les ateliers industriels par les appareils mécaniques, cinquante ans avant la loi sur les accidents du travail.</p><p>En 1848, il est nommé membre du Conseil Supérieur d’Hygiène, dès la création de celui-ci.</p>");
    });
    partenaires.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML("<br><h2>Comment vous associer à ce projet et dans quel but ?</h2><ul><li>Par le biais d’une subvention</li><li>Par le biais d’un don fléché ouvrant droit à défiscalisation</li></ul><p>Entreprises assujetties à l’IR ou à l’IS : réduction d’impôt de 60% du montant du don, dans la limite de 0,5% du chiffre d’affaires<br>Particuliers : réduction d’impôt de 66% du montant du don (ou de 75% de ce montant s’ils sont assujettis à l’impôt sur la fortune).<br>Par exemple, un don de 5000 euros n’en coûtera en réalité que 2000 à une entreprise et 1700 à un particulier.<br>En nous faisant bénéficier de vos compétences et savoir faire, de votre réseau…</p><div><p>Votre soutien pourra, en fonction de son montant, de ses modalités et de vos souhaits, contribuer à préparer, organiser, faire connaître la manifestation, en organiser et diffuser les retombées, à récompenser les lauréats.<br>Il contribuera à accroître la notoriété de votre établissement, et à le faire figurer parmi ceux qui se soucient de la santé au travail, gage et condition de la santé et de la pérennité de nos entreprises.</p></div><h3>Pour toute information : <a href=\"mailto:fondation@univ-montp1.fr\">fondation@univ-montp1.fr</a></h3>");
    });

});
