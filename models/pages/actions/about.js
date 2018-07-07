export default {
  name: 'about',
  method: 'GET',
  input: {}, //Not using right now
  route: '/about',
  main: (input, {Database, Session, req, res, next}) => {

    const data = [
      {
        id: 1,
        title: "Mohammed Sufyan Shaikh"
      },
      {
        id: 2,
        title: "Juveriya Shaikh"
      }
    ];

    req.data = data;
    next();
  //  return res.status(200).send({status: 'success'});
  }
}