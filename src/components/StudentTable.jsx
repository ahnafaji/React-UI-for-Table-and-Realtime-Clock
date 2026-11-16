function StudentTable({ students }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama Mahasiswa</th>
            <th>No. HP</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>Program Studi</th>
            <th>Tahun Masuk</th>
          </tr>
        </thead>
        <tbody>
          {/* .map() untuk looping data, key unik = nim */}
          {students.map((student) => (
            <tr key={student.nim}>
              <td>{student.nim}</td>
              <td>{student.nama}</td>
              <td>{student.noHp}</td>
              <td>{student.email}</td>
              <td>{student.alamat}</td>
              <td>{student.prodi}</td>
              <td>{student.tahun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;