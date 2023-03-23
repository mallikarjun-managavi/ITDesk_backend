var express = require("express");
var router = express.Router();
const { getCodeByMasterId , addMasterRecord , deleteMasterbyId , updateMasterData } = require('../Controllers/ListDataMasterController')

router.post('/getCode',getCodeByMasterId);

router.post('/add',addMasterRecord);

router.post('/update',updateMasterData);

router.delete('/deletebyid',deleteMasterbyId);

module.exports=router;