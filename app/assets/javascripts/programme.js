YUI().use('overlay', 'transition',
function(Y) {
    var a = Y.WidgetPositionAlign;

    var i5001699 = new Y.Overlay({
        width: "112px",
        height: "80px",
        bodyContent: '<a href="/"><img alt="Accueil" id="5001699" src="/z/png/divHeaderH1.png"></a>',
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


    var program19 = Y.one('#cRNFhOvEQC4bN'),
    program20 = Y.one('#dRNFhOvEQC4bN');

    program19.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<h2>19 Mars : <span>Management de proximité et santé au travail</span></h2><ul><li>9 h : Accueil par Max Ponseillé, Président de la Fondation</li><li>9h 15 : Introduction : Jean Auroux, ancien Ministre du travail</li><li>10h : La chaîne du commandement. M Bel, Caisse des dépôts</li><li>10h 30 : Le management : applications en entreprise et dans le milieu sportif. Représentant d’une entreprise et Olivier Maurelli, ancien international de Handball, préparateur sportif</li><li>11h : Pause</li><li>11h 15 : Hommes et femmes, y a-t-il des différences dans le style de management ? Noëlle Sailly, Club des Femmes chefs d’entreprise</li><li>11h 35 : table ronde. Invités : partenaires sociaux (Alain Alphon Layre, CGT – un représentant d’une organisation patronale), ARACT, Florence Palpacuer, Professeur à l’Université Montpellier 1, responsable du M2 management des organisations et du développement responsable</li><li>12h 30 : déjeuner – buffet</li><li>14h : approche médicale. Les effets du stress sur la santé. Comment identifier ces effets, avec quels marqueurs ? Marqueurs de l’activation cérébrale, Professeur Renard – marqueurs neurologiques, professeur Karen Ritchie. Marqueurs sensorimoteurs professeur Benoit Bardy</li><li>14h 45 : synthèse de l’approche médicale : Docteur Marie-Laure Hemery, Ametra</li><li>15h : bonnes pratiques de management : Docteur Marie-Laure Hemery, à partir d’une étude québécoise</li><li>15h 15 : le coût juridique d’un mauvais management. Cédric Riot, avocat spécialiste du droit du travail</li><li>15h 45 : le coût économique d’un mauvais management vs le retour sur investissement d’un bon management. Interventions de l’OPPBTP (expérience DIMECO) et de Florence Noguera, maître de conférences à l’Université Montpellier 3</li><li>16h 15 : table ronde. Quelles réponses apporter ? Représentants des partenaires sociaux (ORST), de la DIRECCTE, la CARSAT, de l’Apave, un médecin du travail</li><li>17 h : conclusion par Jean Auroux</li></ul><p>Animation Yves Jolis</p>');
    });
    program20.on('click',
    function(e) {
        e.preventDefault();
        Y.one("#visuel").setHTML('<h2> 20 Mars : <span>Festival du film la santé au travail</span> </h2> <ul> <li>8h 30 : Accueil</li> <li>9h : introduction</li> <li>9h 15 : témoignage des lauréats de l’année précédente (Dalkia/MSA)</li> <li>De 9h30 à 11 h : projections</li> <li>11h : pause</li> <li>11h 15 : table ronde sur le thème « le film, outil de prévention ».</li> <li>11h 45 : reprise des projections</li> <li>12h 45 : vote du public/ déjeuner- buffet/ délibération du jury</li> <li>14h 15 : projection de films dans le cadre du prix « jeunes réalisateurs »</li> <li>15h 15 : pause et délibération du jury</li> <li>15h 30 : intervention d’une personnalité du cinéma.</li> <li>16h : remise des prix (prix du public et prix du jury pour les films d’entreprise, prix « jeunes réalisateurs », prix TPE du bâtiment décerné par la CAPEB LR)</li> <li>16h 30 : conclusion</li> </ul> <p>Animation Yves Jolis</p>');
    });

});
