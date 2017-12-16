/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.airhacks;
import java.util.stream.Stream;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 *
 * @author D.Robin
 */
@Path("numbers")
public class NumbersResources {
    @GET
    public JsonArray numbers(){
        JsonArrayBuilder array = Json.createArrayBuilder();
        Stream<String> numberStream = Stream.generate(System::currentTimeMillis).
                map(String::valueOf).limit(10);
        numberStream.forEach(array::add);
        return array.build();
        /*
        JsonObject value = Json.createObjectBuilder()
     .add("firstName", "John")
     .add("lastName", "Smith")
     .add("age", 25)
     .add("address", Json.createObjectBuilder()
         .add("streetAddress", "21 2nd Street")
         .add("city", "New York")
         .add("state", "NY")
         .add("postalCode", "10021"))
     .add("phoneNumber", Json.createArrayBuilder()
         .add(Json.createObjectBuilder()
             .add("type", "home")
             .add("number", "212 555-1234"))
         .add(Json.createObjectBuilder()
             .add("type", "fax")
             .add("number", "646 555-4567")))
     .build();
        */
    }
}
