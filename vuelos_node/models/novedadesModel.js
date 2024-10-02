var pool =require('./bd');




async function getNovedades() {
    var query="selec * from novedades";
    var rows= await pool.query(query);
    return rows;
    
}


async function deleteNovedadById(id){
var query ="delete from novedades where id = ?";
var rows= await pool.qery(query, [id]);
return rows;
}
module.exports={getNovedades, deleteNovedadById}