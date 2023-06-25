import { gql } from "@apollo/client";

const GET_PEMESANAN = gql`
  query GetPemesanan {
    pemesanan {
      pemesan
      lokasi
      tglCheckIn
      tglCheckOut
    }
  }
`;

export default GET_PEMESANAN;
