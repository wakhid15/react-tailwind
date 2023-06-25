import { useQuery } from "@apollo/client";
import Navigation from "../components/Navigation";
import GET_PEMESANAN from "../api/GetToDo";

const Data = () => {
  const {loading, error, data} = useQuery(GET_PEMESANAN, {
    variables: {
    }
  });

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navigation></Navigation>
      <h2 class="text-4xl font-bold leading-tight pt-12 pl-12 pr-12 pb-2">
        Data Pemesan
      </h2>
      <hr class="mt-4 mb-8 ml-12 mr-12"></hr>
      <ol class="pl-16 pr-16">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            pemesan
                        </th>
                        <th scope="col" class="px-6 py-3">
                            lokasi
                        </th>
                        <th scope="col" class="px-6 py-3">
                            tanggal Checkin
                        </th>
                        <th scope="col" class="px-6 py-3">
                            tanggal Checkout
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {data.pemesanan.map((pemesan) => (
                    <tr key={pemesan.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="border px-4 py-2">{pemesan.pemesan}</td>
                      <td className="border px-4 py-2">{pemesan.lokasi}</td>
                      <td className="border px-4 py-2">{pemesan.tglCheckin}</td>
                      <td className="border px-4 py-2">{pemesan.tglCheckout}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
      </ol>
    </div>
  );
}

export default Data;