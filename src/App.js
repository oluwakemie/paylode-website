import React from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";

const App = () => {
  // const { register, handleSubmit } = useForm<Inputs>();
  const { register, handleSubmit } = useForm();

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:ogundelecaleb14@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`}

  const onSubmit = (formData) => {
    window.location.href = `mailto:ogundelecaleb14@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div>
      <Header />
      <div className="">
        <div>
          <section
            id="#"
            className="gap-y-8 py-8 bg-slate-100 px-[30px] md:px-[80px] lg:px-[130px] flex flex-col md:flex-row items-center w-full "
          >
            <div>
              <m.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="lg:pl-10 pt-5"
              >
                <h2 className="text-[29px] lg:text-[48px] font-bold text-gray-500 tracking-wide  ">
                  ADVANCED PAYMENT GATEWAY SOLUTION FOR{" "}
                  <span className="text-[#90c841]">AFRICA</span>{" "}
                </h2>

                <p className="text-[#124072]  tracking-wider mt-3 ">
                  Payments, Collection and Fintech...
                </p>
                <m.div
                  initial={{ x: -500, opacity: 0, scale: 0.5 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 2.0,
                  }}
                  className=" mt-2"
                >
                  <button className="px-2 py-1 bg-[#124072] rounded-lg text-gray-200">
                  <a href="#contact">Contact Us</a>  
                  </button>
                </m.div>
              </m.div>
            </div>
            <div className="object-contain w-full flex justify-center">
              <img
                src="/heroImageremovebg.png"
                alt=""
                className="h-[360px] lg:h-[420px] lg:w-[580px] "
              />
            </div>
          </section>
          {/* partners company */}
          <section className="text-gray-400 py-7 bg-slate-50  tracking-[] text-center px-[30px] md:px-[80px] lg:px-[130px]">
            <h4 className="text-gray-500 tracking-widest font-bold mb-10">
              Our Major Partners
            </h4>

            <div className="marquee">
              <div className="flex flex-row  justify-center gap-5 track">
                <img
                  src="/palmpay-logo.png"
                  alt="palmpay logo"
                  className="h-10"
                />
                <img
                  src="/macroel-logo.png"
                  alt="macroel logo"
                  className="h-10"
                />
                <img
                  src="/cloud-interactive-logo.png"
                  alt="cloud interactive logo"
                  className="h-10"
                />
                <img
                  src="/joslogo.jpeg"
                  alt="jos disco logo"
                  className="h-10"
                />
                <img src="/nibosslogo.png" alt="niboss logo" className="h-10" />
                <img src="/easypay.png" alt="easypay logo" className="h-10" />
              </div>
            </div>
          </section>
          {/* services */}
          <section
            id="services"
            className="bg-[#90c841] opacity-90 py-10 px-3 md:px-[80px] lg:px-[130px] "
          >
            <h2 className="text-[28px] text-[#124072de] font-bold mb-4 text-center">
              Products
            </h2>
            <div className="bg-[#fafafa] p-2 shadow rounded-lg">
              <p className="text-[#718096] text-sm text-justify mb-8">
                we're committed to providing you with only the best products
                that efficiently serve your needs. That's why we use the latest
                technologies to ensure that our products are always up to date
                and of the highest quality. We believe that technology plays a
                crucial role in the development and delivery of exceptional
                products, and we're constantly seeking new ways to leverage the
                latest tools and techniques to improve our offerings.
                <br />
                <br />
                From cutting-edge software to advanced hardware, we're always on
                the lookout for the latest innovations that can help us deliver
                products that exceed your expectations. And with our team of
                expert engineers and designers, you can be sure that every
                product we deliver is crafted with the utmost care and attention
                to detail.
              </p>
            </div>

            <div>
              <div className=" flex flex-col md:flex-row items-center w-full gap-8 mt-6">
                <div className="relative">
                <div className="w-full absolute top-[10%] bg-[#90d62f] left-0 h-[400px] skew-y-12 -z-20"></div>
                  <h2 className="text-[28px] text-[#124072de] font-bold mb-2 ">
                    Bill Vending
                  </h2>
                  {/* <div className="bg-[#fafafa] p-2 shadow rounded-lg"> */}
                  <p className="text-[#718096] text-sm text-justify mb-8">
                    Our platform is designed to make bill payments a breeze, so
                    you can spend less time worrying about bills and more time
                    enjoying life. Plus, with our secure and reliable payment
                    system, you can rest assured that your transactions are
                    always safe and secure.
                  </p>
                  {/* </div> */}
                  <h3 className="text-[20px] text-[#124072de] font-bold mb-2 ">
                    features
                  </h3>
                  <ul>
                    <li className="text-lg tracking-widest text-[#124072de] ">
                      <span className="text-lg text-gray-100 font-bold  ">
                        *
                      </span>{" "}
                      Airtime/Data Bills
                    </li>
                    <li className="text-lg tracking-widest text-[#124072de] ">
                      {" "}
                      <span className="text-lg text-gray-100 font-bold  ">
                        *
                      </span>{" "}
                      Electricity
                    </li>
                  </ul>
                </div>
                <img
                  src="/electricity.png"
                  alt="electricity"
                  className="h-[240px] w-full md:h-[400px] md:w-[480px] lg:h-[420px] lg:w-[580px] object-center"
                />
              </div>

              <div className=" flex flex-col  md:flex-row-reverse items-center w-full gap-8">
                <div className="relative">
                <div className="w-full absolute top-[10%] bg-[#90d62f] left-0 h-[400px] -skew-y-12 -z-20"></div>
                  <h2 className="text-[28px] text-[#124072de] font-bold mb-2 ">
                    Payment Gateway
                  </h2>
                  <p className="text-[#718096] text-sm text-justify">
                    Our platform is designed to be user-friendly and intuitive,
                    making it easy for your customers to navigate and complete
                    transactions.
                    <br />
                    <br />
                    Plus, with our secure and reliable payment processing
                    system, you can accept payments and receive funds seamlessly
                    from anyone, anywhere in the world. Whether you're running a
                    small business or a large enterprise, our payment platform
                    is designed to meet your needs and help you grow your
                    business.
                    <br />
                    <br />
                    So why wait? Sign up for our payment platform today and
                    start accepting payments from customers all over the world.
                    With our easy and seamless channel, you'll be able to
                    provide your customers with the payment experience they
                    deserve, while growing your business and expanding your
                    reach.
                  </p>
                  <h3 className="text-[20px] text-[#124072de] font-bold mb-2 ">
                    features
                  </h3>
                  <ul>
                    <li className="text-lg tracking-widest text-[#124072de]">
                      <span className="text-lg text-gray-100 font-bold  ">
                        *
                      </span>{" "}
                      QR Code
                    </li>
                    <li className="text-lg tracking-widest text-[#124072de] ">
                      {" "}
                      <span className="text-lg text-gray-100 font-bold  ">
                        *
                      </span>{" "}
                      USSD Code
                    </li>
                    <li className="text-lg tracking-widest text-[#124072de] ">
                      {" "}
                      <span className="text-lg text-gray-100 font-bold  ">
                        *
                      </span>{" "}
                      Debit Card
                    </li>
                    <li className="text-lg tracking-widest text-[#124072de] ">
                      {" "}
                      <span className="text-lg text-gray-100 font-bold  ">
                        *
                      </span>{" "}
                      POS
                    </li>
                    <li className="text-lg tracking-widest text-[#124072de] ">
                      {" "}
                      <span className="text-lg text-gray-100 font-bold  ">
                        *
                      </span>{" "}
                      Tranfer
                    </li>
                  </ul>
                </div>
                <img
                  src="/restaurant.jpg"
                  alt="man smiling in a resturant"
                  loading="lazy"
                  className="h-[360px] md:h-[400px] md:w-[480px]  lg:h-[420px] lg:w-[580px] object-cover "
                />
              </div>
            </div>
          </section>
          {/* Features */}
          <section className="bg-slate-100 py-6 px-[30px] md:px-[80px] lg:px-[130px] ">
            <h2 className="text-[28px] text-[#124072de] font-bold mb-4">
              WHY YOU SHOULD USE PAYLODE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
              <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
                <img
                  src="/heroImageremovebg.png"
                  alt=""
                  className="h-10 rounded-full mx-auto mb-3"
                />
                <h2 className="text-[20px] text-[#124072de] font-bold">
                  Accessible Dashboard
                </h2>
                <p className="text-gray-500">
                  Paylode makes transaction easy by creating a user-friendly
                  transaction dashboard for every day business track and to
                  optimize user data
                </p>
              </div>
              <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
                <img
                  src="/heroImageremovebg.png"
                  alt=""
                  className="h-10 rounded-full mx-auto mb-3"
                />
                <h2 className="text-[20px] text-[#124072de] font-bold">
                  Easy Payment
                </h2>
                <p className="text-gray-500">
                  We allow your customers make payment easily at anytime and
                  anywhere in the world through our seamless channels.
                </p>
              </div>
              <div className="shadow rounded-lg bg-slate-100 text-center py-4 px-3">
                <img
                  src="/heroImageremovebg.png"
                  alt=""
                  className="h-10 rounded-full mx-auto mb-3"
                />
                <h2 className="text-[20px] text-[#124072de] font-bold">
                  Secured Payment
                </h2>
                <p className="text-gray-500">
                  Our online payment system uses advanced security measures
                  including multi-factor authentication to ensure the safety of
                  user account.
                </p>
              </div>
            </div>
          </section>
          {/* FAQs */}
          <section></section>

          {/* contact us */}
          <section id="contact" className="bg-[#90c841] py-9 px-[30px] md:px-[80px] lg:px-[130px] ">
            <div>
              <h2 className="text-[28px] text-[#124072de] font-bold mb-4 text-center">
                CONTACT US
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="flex flex-col space-y-2  "
              >
                <div className="flex gap-2   flex-col md:flex-row md:space-x-2 md:justify-between">
                  <input
                    {...register("name")}
                    placeholder="Name"
                    type="text"
                    className="contactInput w-full"
                  />
                  <input
                    {...register("email")}
                    placeholder="Email"
                    type="email"
                    className="contactInput w-full"
                  />
                </div>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  type="text"
                  className="contactInput"
                />
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className="contactInput"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#124072] py-5 px-10 rounded-md text-gray-50 font-bold text-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
