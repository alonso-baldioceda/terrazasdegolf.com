import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ReservationsContainer = styled.div`
  @media (min-width: 992px) {
  }

  .btn {
    background: var(--lunar-green);
    border-radius: 40px;
    color: var(--white);
    padding: 0.25rem 2rem;
    width: auto;

    &:hover {
      color: var(--salomie);
    }
  }
`;

// interface Props {
//   title: string;
// }

const Reservations = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <ReservationsContainer>
      <form>
        <Container>
          <Row>
            <Col xs={12} className="mb-3">
              <h3 className="text-black">Consultar reservaciones</h3>
            </Col>
            <Col md={6} className="mb-3">
              <label
                className="mb-2 fw-normal text-black"
                htmlFor="inputAdults"
              >
                Adultos
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAdults"
                placeholder="Adultos"
              />
            </Col>
            <Col md={6} className="mb-3">
              <label
                className="mb-2 fw-normal text-black"
                htmlFor="inputChuldren"
              >
                Niños
              </label>
              <input
                type="text"
                className="form-control"
                id="inputChuldren"
                placeholder="Children"
              />
            </Col>
            <Col md={6} className="mb-3">
              <label className="mb-2 fw-normal text-black" htmlFor="inputFrom">
                Desde
              </label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control"
                id="inputFrom"
              />
              {/* <input
                type="text"
                className="form-control"
                id="inputFrom"
                placeholder="Desde"
              /> */}
            </Col>
            <Col md={6} className="mb-3">
              <label className="mb-2 fw-normal text-black" htmlFor="inputTo">
                Hasta
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTo"
                placeholder="Hasta"
              />
            </Col>
          </Row>
          <button type="submit" className="btn">
            Sign in
          </button>
        </Container>
      </form>
    </ReservationsContainer>
  );
};

export default Reservations;
