const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_ARRAY;

async function fun(){
    let con;

    try{
        con = await oracledb.getConnection({
            user : "system",
            password: "orcl",
            connectionString: "localhost/orcl"
        });
       console.log(connected);
    }
    catch(err){
        console.log(err);
    }
}
fun();