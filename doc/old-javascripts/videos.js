YUI().use('overlay', 'transition', 'panel', 'swf',
function(Y) {
    var yizKaJweSm046 = new Y.Overlay({
        width: "147px",
        height: "100px",
        bodyContent: '<img src="/assets/ziyKaJweSm046.png" alt="Oscar terrassier">',
        zIndex: 99
    }),
    a = Y.WidgetPositionAlign;
    yizKaJweSm046.render("#yizKaJweSm046");
    yizKaJweSm046.set("align", {
        node: "#clap",
        points: [a.LC, a.TL]
    });
    // var ouHaaMBgaXBJW6 = new Y.Overlay({
    //     width: "150px",
    //     height: "150px",
    //     bodyContent: '<img src="/assets/uHaaMBgaXBJW6.png" alt="Je participe au concours">',
    //     zIndex: 2
    // });
    // ouHaaMBgaXBJW6.render("#uHaaMBgaXBJW6");
    // ouHaaMBgaXBJW6.set("align", {
    //     node: "#header H1",
    //     // points: [a.CC, a.TC]
    //     points: [a.CC, a.CC]
    // });
    function showCandidaturePDF() {
        if (candidaturePDF) {
            return candidaturePDF.show();
        }

        candidaturePDF = new Y.Panel({
            bodyContent: '<div class="holder">Complétez <a href="/formulaire-rencontres-villerme.pdf" target="_blank" style="font-size:larger">le formulaire</a> et envoyez-le avec le support CD ou DVD du film à :<address>Rencontres Villermé<br/>Espace Richter<br/>Rue Vendémiaire, Bt E<br/>CS 29 555<br/>34 961 Montpellier cedex 2</address></div>',
            width      : 400,
            zIndex     : 6,
            centered   : true,
            modal      : true,
            render     : '#candidaturesPDF',
            buttons: [
                {
                    value  : 'Fermer',
                    section: Y.WidgetStdMod.FOOTER,
                    action : function (e) {
                        e.preventDefault();
                        candidaturePDF.hide();
                    }
                }
            ]
        });
    }
	candidature = new Y.Panel({
	    srcNode      : '#candidatures',
	    headerContent: 'Vous pouvez compléter ce formulaire en ligne...',
	    width        : 643,
	    zIndex       : 5,
	    centered     : true,
	    modal        : true,
	    visible      : false,
	    render       : true,
	});
    candidature.addButton({
        value  : '...ou sur papier en téléchargeant sa version PDF',
        section: Y.WidgetStdMod.FOOTER,
        action : function (e) {
            e.preventDefault();
            showCandidaturePDF();
        }
    });
	// Y.one('#uHaaMBgaXBJW6').on('click', function (e) {
	//     e.preventDefault();
	//     Y.one('#wBd').setHTML('<iframe src="/candidates/new"></iframe>');
	// 	Y.one('#candidatures').removeClass('yui3-loading');
	//     candidature.show();
	// });
    var params = {
        version: "9.0.115",
        fixedAttributes:
        {
            allowScriptAccess: "always",
            allowNetworking: "all"
        },
        flashVars:
        {
            flv: "OSCAR_TERRASSIER.flv",
            // The URL of the FLV video to be played.
            width: "625",
            // Forces the video width.
            height: "343",
            // Forces the video height.
            autoplay: "1",
            // 1 to auto-play
            // autoload: 1,
            // // 1 to automatically load
            // buffer: 5,
            // // The number of seconds to buffer. By default set to 5.
            playercolor: "AE191E",
            // The background color of the player bar (not the flash)
            loadingcolor: "ffffff",
            // The color of loading bar
            buttoncolor: "ffffff",
            // The color of the buttons
            slidercolor: "ffffff"
            // The color of the player bar
        }
    };
    var myswf = new Y.SWF("#visuel", "/player_flv_mini.swf", params);
});
