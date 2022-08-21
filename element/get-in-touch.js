import Form from "../component/form";
import { ControlledInput } from "../component/form/input";
import yup from "../validates/yup";

const validations = yup.object({ dzName: yup.string().required() });
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
                render={({ control }) => (
                  <div className="dlab-form style-1 dzForm">
                    <div className="section-head style-3">
                      <h2 className="title m-t10">Entre em contato conosco</h2>
                      <div className="dlab-separator style-2 bg-primary"></div>
                    </div>
                    <div className="dzFormMsg"></div>
                    <ControlledInput
                      control={control}
                      name="dzName"
                      type="text"
                      required
                      className="form-control"
                      placeholder="Full Name"
                    />
                    <ControlledInput
                      control={control}
                      name="dzEmail"
                      type="text"
                      required
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <ControlledInput
                      control={control}
                      name="dzOther[phone]"
                      type="text"
                      required
                      className="form-control"
                      placeholder="Phone No."
                    />{" "}
                    <ControlledInput
                      control={control}
                      name="dzOther[project_title]"
                      type="text"
                      required
                      className="form-control"
                      placeholder="Project Title"
                    />
                    <ControlledInput
                      control={control}
                      variant="textarea"
                      className="form-control"
                      required
                      placeholder="Message"
                    />
                    <button>Submit Now</button>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInTouch3;
