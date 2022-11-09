import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import '../Home/home.css'

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-primary col-2 mb-5">
          Add
        </Link>
        <div className="col-md-10">
          <table className="table table-hover ">
            <thead className="table-header text-primary ">
              <tr>
                <th scope="col">№</th>
                <th scope="col">Ism</th>
                <th scope="col">Familya</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col"></th>
             

              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-outline-warning mr-1"
                      >
                        OZGARTIRISH
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        OCHIRICH 
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th></th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
