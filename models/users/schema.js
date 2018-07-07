import { Types } from '@sufyan/chidiya';

export default {
  name: "User",
  tableName: "Users",
  validation: true,
  fields: {
    id: {
      type: Types.ID
    },
    name: {
      type: Types.String
    },
    age: {
      type: Types.Int
    }
  },
  beforeCreate: (record) => {
    return new Promise ((resolve, reject) => {
      console.log("");
      console.log("beforeCreate: METHOD: ");
      console.log(record);
      console.log("");
      resolve(record);
    })
  },
  beforeUpdate: (record) => {
    return new Promise ((resolve, reject) => {

      console.log("[beforeUpdate] RECORD: ", record);
      resolve(record);
    })
  }
}