import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

const Sidebar = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className="container-sidebar-item">
            <div>
              <ListGroup.Item action href="/dashboard/agenda">
                Agenda
              </ListGroup.Item>
            </div>
            <div>
              <ListGroup.Item action href="/dashboard/artikel">
                Artikel
              </ListGroup.Item>
            </div>
            <div>
              <ListGroup.Item action href="/dashboard/stok">
                Stok Vaksin
              </ListGroup.Item>
            </div>
            <div>
              <ListGroup.Item action href="/dashboard/jadwal">
                Jadwal Vaksinasi
              </ListGroup.Item>
            </div>
            <div>
              <ListGroup.Item action href="/dashboard/warga">
                Data Warga
              </ListGroup.Item>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
