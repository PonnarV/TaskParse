module.exports = (function createModule() {

        function getParseData(data, version) 
        {
    
                        let name1 = data.split("0000");
                        let name2 = name1[1].split("000");

                                let res1 = name1[0]+"0000";
                                let res2 = name2[0]+"000";
                                let res3 = name2[1];

                                if (version === "v2") {
                                    res1 = res1.replace("0000", '');
                                    res2 = res2.replace("000", '');
                                    let clientId = res3;
                                    clientId = clientId.substring(0, 3) + '-' + clientId.substr(-4);
                                    res3 = clientId;
                               }

                        return {
                          firstName: res1,
                          lastName: res2,
                          clientId: res3
                        }
            }

 
    const methodReturn = {
      getParseData
    }

    return {
      ...methodReturn,

    }

})()