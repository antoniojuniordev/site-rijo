import Form from "../component/form";
import { ControlledInput } from "../component/form/input";
import { ControlledReCaptcha } from "../component/form/reCaptcha";
import { ControlledTextArea } from "../component/form/textArea";
import yup from "../validates/yup";

const validations = yup.object({
  name: yup.string().required("Preencha o nome para continuar"),
  email: yup.string().email().required("Preencha o email para continuar"),
  phone: yup.string().required("Preencha o telefone para continuar"),
  message: yup.string().optional(),
  captchaToken: yup.string().required("Captcha inválido"),
});

function GetInTouch3() {
  return (
    <>
      {/* <!-- Contact Form --> */}
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dlab-media">
                <img src="images/about/img8.png" className="move-1" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <Form
                validations={validations}
                onSubmit={(e) => console.log("teste", e)}
                render={({ control, watch }) => {
                  const captchaToken = watch("captchaToken");
                  return (
                    <div className="dlab-form style-1 dzForm">
                      <div className="section-head style-3">
                        <h2 className="title m-t10">
                          Entre em contato conosco
                        </h2>
                        <div className="dlab-separator style-2 bg-primary"></div>
                      </div>
                      <div>
                        <ControlledInput
                          control={control}
                          name="name"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Nome completo*"
                          required
                        />
                        <ControlledInput
                          control={control}
                          name="email"
                          type="text"
                          required
                          className="form-control"
                          placeholder="E-mail*"
                        />
                        <ControlledInput
                          control={control}
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Telefone*"
                        />
                        <ControlledTextArea
                          control={control}
                          name="message"
                          type="textarea"
                          className="form-control"
                          placeholder="Mensagem"
                        />
                      </div>
                      <div className="div-group">
                        <ControlledReCaptcha
                          control={control}
                          name="captchaToken"
                        />
                      </div>
                      <div>
                        <button
                          disabled={!captchaToken}
                          className="btn btn-corner gradient btn-block btn-primary"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInTouch3;
