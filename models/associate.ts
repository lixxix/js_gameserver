import * as db from "./"

export async function initTable(){
    try{
        await db.sequelize.sync();
    }
    catch(err){
        console.log(err);
    }
}
