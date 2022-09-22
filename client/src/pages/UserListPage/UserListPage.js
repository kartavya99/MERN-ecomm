import React, { useReducer } from "react";
import { Table, Button } from "react-bootstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";
import Loader from "../../components/Loader/Loader";

const UserListPage = () => {
  const [state, dispatch] = useStoreContext();
  const { user } = state;

  const { data, loading } = useQuery(QUERY_USERS);
  console.log(data);

  return (
    <>
      <h1>Users</h1>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <th>ID</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>ADMIN</th>
          <th></th>
        </thead>
        <tbody>
          {loading ? (
            <Loader />
          ) : (
            data.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user._id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <a herf={`mailto:${user.eamill}`}>{user.email}</a>
                  </td>
                  <td>{user.isAdmin ? `✅` : `❌`}</td>
                  <td>
                    <Button variant="light" className="btn-sms ">
                      Edit
                    </Button>
                    <Button variant="light" className="btn-sms">
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </>
  );
};

export default UserListPage;
