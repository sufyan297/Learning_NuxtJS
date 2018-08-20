import { Types } from '@ascendtis/chidiya';

export default {
  name: "Page",
  tableName: "Pages",
  validation: false,
  columns: {
    id: {
      type: Types.ID,
      primary: true,
      generated: true
    }
  }
}