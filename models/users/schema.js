import { Types } from '@ascendtis/chidiya';

export default {
  name: "User",
  tableName: "Users",
  validation: true,
  columns: {
    id: {
      type: Types.ID,
      primary: true,
      generated: true
    },
    name: {
      type: Types.String
    },
    age: {
      type: Types.Int
    }
  }
}