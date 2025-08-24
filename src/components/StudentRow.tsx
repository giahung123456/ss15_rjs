import React, { Component } from "react";

interface Props {
  index: number;
  student: {
    id: string;
    name: string;
    date: string;
    email: string;
    status: string;
  };
}

export default class StudentRow extends Component<Props> {
  render() {
    const { index, student } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.date}</td>
        <td>{student.email}</td>
        <td style={{ color: student.status === "Đang hoạt động" ? "green" : "red" }}>
          {student.status}
        </td>
        <td>
          <button>Sửa</button>
          <button>Xóa</button>          
        </td>
      </tr>
    );
  }
}
