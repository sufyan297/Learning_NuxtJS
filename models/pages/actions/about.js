export default {
  name: 'about',
  method: 'GET',
  input: {}, //Not using right now
  route: '/about',
  main: (input, {Database, Session, req, res, next}) => {

    const data = [
      {
        id: 1,
        title: "Mohammed Sufyan Shaikh",
        body: "<b>Lorem ipsum</b>"
      },
      {
        id: 2,
        title: "Juveriya Shaikh"
      },
      {
        id: 3,
        title: "Nazma Shaikh"
      },
      {
        id: 4,
        title: "Mustak Shaikh"
      },
      {
        id: 5,
        title: "Nabila Shaikh"
      }
    ];

    req.data = data;
    Session.set(req, 'posts', data);
    next();
  //  return res.status(200).send({status: 'success'});
  }
}