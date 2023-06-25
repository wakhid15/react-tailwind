import { gql } from "@apollo/client";

const UPDATE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    delete_todo_by_pk(id: $id) {
      pemesan
      lokasi
      tglCheckIn
      tglCheckOut
    }
  }
`;

export default UPDATE_TODO;
