import { gql } from "@apollo/client";

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: Int!) {
    update_todo_by_pk(pk_columns: { id: $id }, _set: { completed: true }) {
      pemesan
      lokasi
      tglCheckIn
      tglCheckOut
    }
  }
`;

export default UPDATE_TODO;
