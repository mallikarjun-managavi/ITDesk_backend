const { fileNanme, logger } = require('../log4');
const DB = require('../DataBase/db')

var fname;

fileNanme(__filename).then((data)=>{
    fname = data;
});

exports.getCodeByMasterId = async(data,dbConnection) => {
    try {
        logger.info(`file: ${fname} getCodeByMasterId is called`);
        const result = DB.ExecuteQuery(dbConnection,`select listcode from listdatamaster where listmstid=${data.listmstid};`);
        return result;
    }
    catch(err){
        console.log(err);
        logger.fatal(`file: ${fname},error: ${err}`);
        throw err; 
    }
}

exports.addMasterData = async(data,dbConnection) => {
    try {
        logger.info(`file: ${fname} addMasterData is called`);
        const query = `INSERT INTO itdesk.listdatamaster (\`listcode\`, \`listdesc\`) VALUES ('${data.listcode}','${data.listdesc}');`
        const result = DB.ExecuteQuery(dbConnection,query);
        return result;
    }
    catch(err){
        console.log(err);
        logger.fatal(`file: ${fname},error: ${err}`); 
        throw err;
    }
}

exports.updateMasterData = async(data,dbConnection) => {
    try {
        logger.info(`file: ${fname} updateListDesc is called`);
        const query = `UPDATE itdesk.listdatamaster SET listcode = '${data.listcode}', listdesc = '${data.listdesc}' WHERE listmstid = '${data.listmstid}';`
        const result = DB.ExecuteQuery(dbConnection,query);
        return result;
    }
    catch(err){
        console.log(err);
        logger.fatal(`file: ${fname},error: ${err}`); 
        throw err;
    }
}

exports.deleteMasterbyId = async(data,dbConnection) => {
    try {
        logger.info(`file: ${fname} deleteMasterbyId is called`);
        const query = `delete from listdatamaster where listdatamaster.listmstid = '${data.listmstid}';`;
        const result = DB.ExecuteQuery(dbConnection,query);
        return result;
    }
    catch(err){
        console.log(err);
        logger.fatal(`file: ${fname},error: ${err}`); 
        throw err;
    }
}

exports.getdescbyMasterCode = async(data,dbConnection) => {
    try {
        logger.info(`file: ${fname} getdescbyMasterCode is called`);
        const result = DB.ExecuteQuery(dbConnection,`select listdesc from listdatamaster where  listcode ='${data.listcode}'`);
        return result;
    }
    catch(err){
        console.log(err);
        logger.fatal(`file: ${fname},error: ${err}`);
        throw err; 
    }
}

