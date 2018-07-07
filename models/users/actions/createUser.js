export default {
  name: 'createUser',
  method: 'POST',
  input: {}, //Not using right now
  main: async (input, {Database, Session, req, res, next}) => {
    console.log("createUser called.");


    // const resp = await Database.create('User',{
    //   input: {
    //     name: "Mohammed Sufyan Shaikh",
    //     age: 23
    //   }
    // }).catch(err => {
    //   console.log("ERROR: ", err);
    // })
    
    // console.log("RESPONSE: ", resp);

    const resp2 = await Database.query('User', {
      where: {
        "age $gt": 18
      }
    }).catch(err => {
      console.log("ERROR: ", err);
    })
    
    Session.set(req, 'hello', 'sufyan');
    if (Session.exists(req, 'foo')) {
      Session.set(req, 'foo', 'World');
    } else {
      Session.set(req, 'foo', 'AWesome WORLD.!');      
    }
    console.log("BEFORE DELETE SESSION: ", Session.get(req, 'hello'));
    Session.delete(req, 'hello');
    console.log("AFTER DELETE SESSION: ", Session.get(req, 'hello'));
    console.log("SESSION_FOO: ", Session.get(req, 'foo'));
    // Session.setSession(req, 'Hello', 'world');
    console.log("REsPONSE 2: ", resp2);
    return res.sendStatus(200);
  }
}