import { gql } from "@apollo/client";

const CREATE_TODO = gql`
  mutation CreateTodo($nama: String, $Tempat: String) {
    insert_todo(objects: { nama: $nama, tempat: $tempat }) {
      returning {
        nama
        tempat
      }
    }
  }
`;

export default CREATE_TODO;
