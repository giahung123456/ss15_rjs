import React, { Component } from "react";
import StudentRow from "./StudentRow";

interface Student {
  id: string;
  name: string;
  date: string;
  email: string;
  status: string;
}

interface State {
  students: Student[];
}

export default class StudentTable extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      students: [
        { id: "SV001", name: "Nguyen Van A", date: "21/12/2023", email: "nva@gmail.com", status: "Đang hoạt động" },
        { id: "SV002", name: "Nguyen Thi B", date: "21/11/2022", email: "ntb@gmail.com", status: "Ngừng hoạt động" },
      ],
    };
  }

  render() {
    return (
      <table border={1} cellPadding={8} style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {this.state.students.map((student, index) => (
            <StudentRow key={student.id} index={index + 1} student={student} />
          ))}
        </tbody>
      </table>
    );
  }
}
