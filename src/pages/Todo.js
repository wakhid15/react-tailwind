import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import GET_PEMESANAN from '../api/GetToDo';
import { gql } from "@apollo/client";
import Navigation from '../components/Navigation';

const INSERT_PEMESANAN = gql`
  mutation InsertPemesanan(
    $pemesan: String!
    $lokasi: String!
    $tglCheckin: String!
    $tglCheckout: String!
  ) {
    insert_pemesanan_one(
      object: {
        pemesan: $pemesan
        lokasi: $lokasi
        tglCheckin: $tglCheckin
        tglCheckout: $tglCheckout
      }
    ) {        
      pemesan
      lokasi
      tglCheckin
      tglCheckout
    }
  }
`;

const App = () => {
  const [pemesan, setpemesan] = useState('');
  const [lokasi, setlokasi] = useState('');
  const [tglCheckin, settglCheckin] = useState('');
  const [tglCheckout, settglCheckout] = useState('');
  
  const {refetch} = useQuery(GET_PEMESANAN);

  const [addPemesanan] = useMutation(INSERT_PEMESANAN, {
    onCompleted: () => {
      refetch();
    }
  })

  const handleAdd = () => {
    if (pemesan && lokasi && tglCheckin && tglCheckout)
    // Logika pemrosesan form, misalnya mengirim data ke server
    addPemesanan({
      variables: {
        pemesan,
        lokasi,
        tglCheckin,
        tglCheckout,
      },
    });
    setpemesan('');
    setlokasi('');
    settglCheckin('');
    settglCheckout('');
  };

  return (
    <div >
      <Navigation/>
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Booking</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            pemesan
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            placeholder="Masukkan pemesanan"
            value={pemesan}
            onChange={(e) => setpemesan(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pemesan">
            lokasi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pemesan"
            type="text"
            placeholder="Masukkan Nama lokasi"
            value={lokasi}
            onChange={(e) => setlokasi(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggal Checkin">
            Tanggal Checkin
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tglCheckin"
            type="text"
            value={tglCheckin}
            onChange={(e) => settglCheckin(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggal-Checkout">
            Tanggal Checkout
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tanggal-Checkout"
            type="text"
            value={tglCheckout}
            onChange={(e) => settglCheckout(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAdd}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;