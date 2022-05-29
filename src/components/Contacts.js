import React from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { contactsActions } from './store';





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

        <div className="login-container">
          <div style={{ display: 'inline-flex', position: 'fixed', top: 0, left: 0 }}>
            <div style={{
              margin: 15,
              'paddingLeft': 2
            }}>
              <p>{namefetch.name}</p>
            </div>
            <div style={{
              margin: 14,
              'transform': 'translate(-17, 0)'
            }}>
              <p>{namefetch.email}</p>
            </div>
          </div>
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
