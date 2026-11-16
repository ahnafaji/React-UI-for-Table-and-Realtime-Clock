import { useState } from "react";
import Clock from "./components/Clock.jsx";
import StudentTable from "./components/StudentTable.jsx";

function App() {
  const [students] = useState([
    {
      nim: "9901001",
      nama: "Yudhistira",
      noHp: "088813139876",
      email: "yudhis@gmail.com",
      alamat: "Karanganyar",
      prodi: "Pendidikan PPKN",
      tahun: 1999,
    },
    {
      nim: "9801001",
      nama: "Haryanti",
      noHp: "089913220989",
      email: "yanti@gmail.com",
      alamat: "Jakarta Pusat",
      prodi: "Psikologi",
      tahun: 1998,
    },
    {
      nim: "9801002",
      nama: "Joko Kristanto",
      noHp: "087813430923",
      email: "jokris@gmail.com",
      alamat: "Banjarmasin",
      prodi: "Pendidikan Matematika",
      tahun: 1998,
    },
    {
      nim: "9701001",
      nama: "Soebaidjah",
      noHp: "081245549088",
      email: "idjah@gmail.com",
      alamat: "lhokseumawe",
      prodi: "Sastra Jawa",
      tahun: 1997,
    },
    {
      nim: "6501001",
      nama: "Pramoedya",
      noHp: "087832931909",
      email: "pram@gmail.com",
      alamat: "Blora",
      prodi: "Filsafat, Sisiologi, dan Sejarah",
      tahun: 1965,
    },
  ]);

  return (
    <div className="container">
      <header>
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </header>

      <div className="info-bar">
        <p className="student-count">
          Jumlah Mahasiswa: <strong>{students.length}</strong>
        </p>
        <Clock />
      </div>

      <StudentTable students={students} />
    </div>
  );
}

export default App;
