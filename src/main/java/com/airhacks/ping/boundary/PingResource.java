package com.airhacks.ping.boundary;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.json.JsonArray;
import javax.json.Json;

/**
 *
 * @author D.Robin
 */
@Path("birds")
public class PingResource {

    @GET
    public JsonArray getBirds() {
      JsonArray value = Json.createArrayBuilder()
     .add(Json.createObjectBuilder()
         .add("nombreComun", "Azulito de Senegal")
         .add("nombreCientifico", "Uraeginthus bengalus"))
     .add(Json.createObjectBuilder()
         .add("nombreComun", "Canario")
         .add("nombreCientifico", "Serinus canarius"))
     .add(Json.createObjectBuilder()
         .add("nombreComun", "Carita naranja")
         .add("nombreCientifico", "Estrilda melpoda"))
     .add(Json.createObjectBuilder()
         .add("nombreComun", "Codorniz china")
         .add("nombreCientifico", "Excalfactoria chinensis"))
     .add(Json.createObjectBuilder()
         .add("nombreComun", "Amaranta flameada")
         .add("nombreCientifico", "Hypardos niveoguttatus"))
     .build();

      return value;
    }
    
    /*@POST
    public Json showpost(Json req){
      return req;  
    }*/

}
