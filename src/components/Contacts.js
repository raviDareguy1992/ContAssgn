import React from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { contactsActions } from './store';
import { BiUserCircle } from 'react-icons/bi';

function Contacts() {
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      selector: row => null,
      cell: (d) => [
        <AiFillDelete onClick={handleClick.bind(this, d.name)} style={{ width: 20, height: 40 }} key={null}></AiFillDelete>
      ]
    }
  ];
  const confetch = useSelector(state => state.contactred.iState);
  const namefetch = useSelector(state => state.nameRed);
  const history = useNavigate();
  const dispConAction = useDispatch();
  const loginHandler = function (event) {
    history('/', { replace: true });
  }

  const handleClick = (tit, title) => {
    let res = confetch.filter(v => v.name !== tit);
    dispConAction(contactsActions.contact(res));
  };

  return (

    <div>
      <div className="topnav">
        <div style={{ position: 'fixed', top: 0, left: 0 }}>
          <div style={{
            margin: -2,
            'paddingLeft': 2
          }}>

            <p style={{
              marginTop: -3,
              marginBottom: '0rem'
            }}><BiUserCircle style={{ width: 50, height: 40 }}></BiUserCircle>{namefetch.name}</p>

          </div>

        </div>
        <p style={{
          position: 'fixed',
          top: 17,
          left: 42
        }}>{namefetch.email}</p>
        <div className="login-container">

          <FiLogOut onClick={loginHandler} style={{ width: 50, height: 40 }} />
        </div>
      </div>
      <DataTable
        title="Contacts"
        columns={columns}
        data={confetch}
        pagination={false}
        highlightOnHover
      />

    </div>
  );
}

export default Contacts;
