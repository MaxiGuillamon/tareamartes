var pool =require('./bd');




async function getNovedades() {
    var query="select * from novedades";
    var rows= await pool.query(query);
    return rows;
    
}


async function deleteNovedadById(id){
var query ="delete from novedades where id = ?";
var rows= await pool.qery(query, [id]);
return rows;
}
module.exports={getNovedades, deleteNovedadById}

/*
async function insertNovedad(obj) {
  try  {
    var query ="insert into novedades set ?";
    var rows = await pool.query(query,[obj]);
    return rows;
} catch (error){
    console.log(error);
    throw error;
}
}
module.exports = { getNovedades, deleteNovedadById, insertNovedad} */
/*
async function deleteNovedadById(id){
    var query ="selcet * from novedades where id = ?";
    var rows= await pool.qery(query, [id]);
    return rows[0];
    }


    async function modificarNovedadesById(obj, id) {
        try  {
          var query ="update novedades set ? where id=?";
          var rows = await pool.query(query,[obj, id]);
          return rows;
      } catch (error){
          throw error;
      }
      module.exports = { getNovedades,insertNovedad,deleteNovedadById,getNovedadById,modificarNovdedaById }
      }
      */