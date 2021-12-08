import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik } from "formik";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

// Components
import Toast from "./toast";

// Styles
const ContactForm = styled.div`
  .form-control {
    border: solid var(--gimblet);
    border-radius: 0;
    height: 50px;
  }

  .invalid {
    color: var(--terracotta);
    font-size: 0.875rem;
    margin-top: 10px;
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

// Types
interface IModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface IServerData {
  method: string;
  url: string;
  headers: any;
  data: IModel;
}

interface IServerResponse {
  data: any;
}

export const Contact = () => {
  const { t } = useTranslation();
  const [conf, setConf] = useState({});

  const schema = Yup.object({
    firstName: Yup.string().required(t(`contact.validation.firstNameRequired`)),
    lastName: Yup.string().required(t(`contact.validation.lastNameRequired`)),
    email: Yup.string()
      .required(t(`contact.validation.emailRequired`))
      .email(t(`contact.validation.emailInvalid`)),
    phone: Yup.string().required(t(`contact.validation.phoneRequired`)),
    subject: Yup.string().required(t(`contact.validation.subjectRequired`)),
    message: Yup.string().required(t(`contact.validation.messageRequired`)),
  });

  const handleSubmit = (
    model: IModel,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    const { firstName, lastName, email, phone, subject, message } = model;

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    // DO NOT DELETE:
    // I have used SUCCESFULLY this curl script to send a message from curl:
    // curl -v -X POST \
    // 	--header "Content-Type: application/json" \
    // 	--data '{"firstName":"Alonso","lastName": "Baldioceda","email":"alonsojose09@hotmail.com","phone":"(506) 83274040","subject":"Testing the form","message": "This is just some text to test function"}' \
    // 	https://bvw65o67k8.execute-api.us-east-1.amazonaws.com/production

    axios
      .request<IServerData>({
        method: "post",
        url: `${process.env.GATSBY_AWS_API_GATEWAY}`,
        headers: {
          "Content-Type": "application/json",
        },

        transformRequest: (data = formData) => JSON.stringify(data),
        transformResponse: (response: IServerResponse) => response.data,
      })
      .then((response) => {
        if (response.status === 200) {
          resetForm();
          setConf({
            type: "success",
            error: false,
            heading: t(`contact.validation.successHeader`),
            body: t(`contact.validation.successBody`),
            visible: true,
          });
          setTimeout(() => handleClose(), 5000);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        if (error) {
          setConf({
            type: "alert",
            error: true,
            heading: t(`contact.validation.errorHeader`),
            body: t(`contact.validation.errorBody`),
            visible: true,
          });
          setTimeout(() => handleClose(), 5000);
        }
      });
  };

  const handleClose = () => {
    setConf({ ...conf, visible: false });
  };

  useEffect(() => {
    handleSubmit;
  }, []);

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        isSubmitting,
      }) => (
        <section className="position-relative">
          <Toast handleClose={handleClose} conf={conf} />
          <ContactForm>
            <Form
              noValidate
              onSubmit={handleSubmit}
              action={`${process.env.GATSBY_AWS_API_GATEWAY}`}
              method="POST"
            >
              <Form.Row as={Row}>
                <Form.Group as={Col} md="6" className="mb-3">
                  <Form.Label htmlFor="firstName-input">
                    {t(`contact.firstName`)}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t(`contact.firstName`)}
                    name="firstName"
                    id="firstName-input"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className="invalid">{errors.firstName}</p>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                  <Form.Label htmlFor="lastName-input">
                    {t(`contact.lastName`)}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t(`contact.lastName`)}
                    name="lastName"
                    id="lastName-input"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                  />
                  {errors.lastName && touched.lastName ? (
                    <p className="invalid">{errors.lastName}</p>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                  <Form.Label htmlFor="email-input">
                    {t(`contact.email`)}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={t(`contact.email`)}
                    name="email"
                    id="email-input"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                  {errors.email && touched.email ? (
                    <p className="invalid">{errors.email}</p>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                  <Form.Label htmlFor="phone-input">
                    {t(`contact.phone`)}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t(`contact.phone`)}
                    name="phone"
                    id="phone-input"
                    value={values.phone}
                    onChange={handleChange}
                    isValid={touched.phone && !errors.phone}
                  />
                  {errors.phone && touched.phone ? (
                    <p className="invalid">{errors.phone}</p>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3">
                  <Form.Label htmlFor="subject-input">
                    {t(`contact.subject`)}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t(`contact.subject`)}
                    name="subject"
                    id="subject-input"
                    value={values.subject}
                    onChange={handleChange}
                    isValid={touched.subject && !errors.subject}
                  />
                  {errors.subject && touched.subject ? (
                    <p className="invalid">{errors.subject}</p>
                  ) : null}
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3">
                  <Form.Label htmlFor="message-input">
                    {t(`contact.message`)}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    id="message-input"
                    rows={3}
                    value={values.message}
                    onChange={handleChange}
                    isValid={touched.message && !errors.message}
                  />

                  {errors.message && touched.message ? (
                    <p className="invalid">{errors.message}</p>
                  ) : null}
                </Form.Group>
                <Col>
                  <Button
                    variant="dark"
                    disabled={!isValid || isSubmitting}
                    type="submit"
                  >
                    {isSubmitting
                      ? t(`contact.submitting`)
                      : t(`contact.submit`)}
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </ContactForm>
        </section>
      )}
    </Formik>
  );
};

export default Contact;
