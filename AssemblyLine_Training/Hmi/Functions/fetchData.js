// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var Hmi;
        (function (Hmi) {
            function fetchData(par1) {
                let count = (Math.random() * 10) +2;
                fetch('https://random-data-api.com/api/v2/beers/?size=' + count)
                    .then((response) => response.json())
                    .then((data) => {
                        TcHmi.Symbol.writeEx('%i%Data%/i%', data, function (data) {
                            if (data.error === TcHmi.Errors.NONE) {
                                // Handle success... 
                            } else {
                                // Handle error... 
                            }
                        });
                    });       
            }
            Hmi.fetchData = fetchData;
        })(Hmi = Functions.Hmi || (Functions.Hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('fetchData', 'TcHmi.Functions.Hmi', TcHmi.Functions.Hmi.fetchData);
