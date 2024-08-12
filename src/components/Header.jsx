import React from "react";

export const Header = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="row p-3">
        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
          <h3 className="fs-4 fw-bold">Academia de danza</h3>
        </div>
        <div className="col-md-1 d-flex align-items-center justify-content-end">
          <a href="#" className="text-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 33"
            >
              <path d="M11 0C7.875 0 5.3125 1.11458 3.3125 3.34375C1.3125 5.57292 0.3125 8.45833 0.3125 12C0.3125 15.9583 3.52083 22.4375 9.9375 31.4375L11 32.9375L12.0625 31.4375C18.4792 22.4375 21.6875 15.9583 21.6875 12C21.6875 8.45833 20.6875 5.57292 18.6875 3.34375C16.6875 1.11458 14.125 0 11 0ZM11 28.375C9.04167 25.5417 7.21875 22.5312 5.53125 19.3438C3.84375 16.1562 3 13.7083 3 12C3 9.45833 3.69792 7.27083 5.09375 5.4375C6.48958 3.60417 8.45833 2.6875 11 2.6875C13.5417 2.6875 15.5104 3.60417 16.9062 5.4375C18.3021 7.27083 19 9.45833 19 12C19 13.7083 18.1562 16.1562 16.4688 19.3438C14.7812 22.5312 12.9583 25.5417 11 28.375ZM11 5.3125C9.54167 5.3125 8.29167 5.84375 7.25 6.90625C6.20833 7.96875 5.6875 9.22917 5.6875 10.6875C5.6875 12.1458 6.20833 13.3958 7.25 14.4375C8.29167 15.4792 9.54167 16 11 16C12.4583 16 13.7083 15.4792 14.75 14.4375C15.7917 13.3958 16.3125 12.1458 16.3125 10.6875C16.3125 9.22917 15.7917 7.96875 14.75 6.90625C13.7083 5.84375 12.4583 5.3125 11 5.3125ZM11 13.3125C10.2917 13.3125 9.66667 13.0521 9.125 12.5312C8.58333 12.0104 8.3125 11.3958 8.3125 10.6875C8.3125 9.9375 8.58333 9.30208 9.125 8.78125C9.66667 8.26042 10.2917 8 11 8C11.7083 8 12.3333 8.26042 12.875 8.78125C13.4167 9.30208 13.6875 9.9375 13.6875 10.6875C13.6875 11.3958 13.4167 12.0104 12.875 12.5312C12.3333 13.0521 11.7083 13.3125 11 13.3125Z"></path>
            </svg>
          </a>
        </div>
        <div className="col-md-2 d-flex flex-column align-items-start justify-content-center">
          <p className="fs-extra fw-bold">Dirección</p>
          <p className="fs-extra-small">
            Av. Jose Manuel Infante #1981, Ñuñoa, Santiago de Chile
          </p>
        </div>
        <div className="col-md-1 d-flex align-items-center justify-content-end">
          <a href="#" className="text-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="black"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </a>
        </div>
        <div className="col-md-2 d-flex flex-column align-items-start justify-content-center">
          <p className="fs-extra fw-bold">Comunícate con nosotros</p>
          <p className="fs-extra-small">+569 6660666</p>
        </div>
        <div className="col-md-1 d-flex align-items-center justify-content-end">
          <a href="#" className="text-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="black"
              className="bi bi-stopwatch-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
            </svg>
          </a>
        </div>
        <div className="col-md-2 d-flex flex-column align-items-start justify-content-center">
          <p className="fs-extra fw-bold">
            <span>Horario de atención</span>
          </p>
          <p className="fs-extra-small">Lunes a Sábado: 10:00 a 21:00 hrs</p>
        </div>
      </div>
    </div>
  );
};
