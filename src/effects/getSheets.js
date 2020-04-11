import Papa from "papaparse";
import { SHEETS_URL } from "../components/constants";

const getSheets = () => {
  return new Promise((resolve, reject) => {
    Papa.parse(SHEETS_URL, {
      download: true,
      header: true,
      complete: (results, file) => {
        const formattedData = results.data.map(row => {
          return {
            work: row["Where do you work?"],
            role: row["What do you do there?"],
            name: row["First & last name"],
            app: row["What's the best way to tip you?"],
            handle: row["What's your handle or username?"],
            support_others: row["Do you financially support others?"],
            healthcare: row["Do you have health care?"],
          }
        });
        resolve(formattedData);
      },
      error: (error, file) => {
        reject(error);
      },
    });
  });
};

export default getSheets;
