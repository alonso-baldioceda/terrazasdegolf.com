import React from "react";
// import DatePicker from "react-datepicker";
import styled from "styled-components";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import "react-datepicker/dist/react-datepicker.css";

const ReservationsContainer = styled.div`
  @media (min-width: 992px) {
  }

  .react-datepicker {
    .react-datepicker__triangle {
      &:before,
      &:after {
        border-bottom-color: var(--gimblet);
      }
    }
    .react-datepicker__navigation {
      .react-datepicker__navigation-icon {
        &::before {
          border-color: var(--black) !important;
          top: 12px;
        }
      }
    }

    .react-datepicker__header {
      background-color: var(--gimblet);

      .react-datepicker__current-month {
        font-size: 14px;
      }

      .react-datepicker__day-names {
        .react-datepicker__day-name {
          font-size: 14px;
        }
      }
    }

    .react-datepicker__day {
      font-size: 14px !important;
    }
  }

  form {
    @media (min-width: 992px) {
      display: flex;
    }

    > div {
      @media (min-width: 992px) {
        width: 16.666667%;
      }

      p {
        line-height: 1.25;
      }
    }

    input[type="text"] {
      border: solid var(--gimblet);
      border-radius: 0;
      height: 50px;

      &.input-1 {
        border-width: 4px 4px 2px 4px;

        @media (min-width: 992px) {
          border-width: 4px 2px 4px 4px;
        }
      }

      &.input-2,
      &.input-3 {
        border-width: 2px 4px;

        @media (min-width: 992px) {
          border-width: 4px 2px 4px 2px;
        }
      }

      &.input-4 {
        border-width: 2px 4px 4px 4px;

        @media (min-width: 992px) {
          border-width: 4px 4px 4px 2px;
        }
      }
    }
  }

  .btn {
    background: var(--lunar-green);
    border-radius: 0;
    color: var(--white);
    height: 50px;
    padding: 0.25rem 2rem;

    &:hover {
      color: var(--salomie);
    }
  }
`;

// interface Props {
//   title: string;
// }

const Reservations = () => {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <ReservationsContainer>
      <form>
        <div className="d-flex align-items-center">
          <p className="text-black fw-normal mb-3 mb-lg-0">
            Consultar reservaciones
          </p>
        </div>
        <div>
          <input
            type="text"
            className="form-control input-1"
            id="inputAdults"
            placeholder="Adultos"
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control input-2"
            id="inputChuldren"
            placeholder="Children"
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control input-3"
            id="inputFrom"
            placeholder="Desde"
          />
          {/* <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            className="form-control input-3"
            id="inputFrom"
          /> */}
        </div>
        <div className="mb-3 mb-lg-0">
          <input
            type="text"
            className="form-control input-4 me-3"
            id="inputTo"
            placeholder="Hasta"
          />
        </div>
        <div className="d-flex justify-content-end ">
          <button type="submit" className="btn text-nowrap">
            Sign in
          </button>
        </div>
      </form>
    </ReservationsContainer>
  );
};

export default Reservations;
