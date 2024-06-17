import "./Form.css";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="form-section">
      <button className="free-try">
        <span>Try it free 7 days </span>then $20/mo. thereafter
      </button>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          className={`${errors.firstName ? "error" : "focused"}`}
          type="text"
          placeholder="First Name"
          {...register("firstName", {
            required: "First Name cannot be empty",
            minLength: {
              value: 3,
              message: "First Name must be at least 3 characters",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "First Name must only contain alphabetic characters",
            },
          })}
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}
        <input
          className={`${errors.lastName ? "error" : "focused"}`}
          type="text"
          placeholder="Last Name"
          {...register("lastName", {
            required: "Last Name cannot be empty",
            minLength: {
              value: 3,
              message: "Last Name must be at least 3 characters",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name must only contain alphabetic characters",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-message">{errors.lastName?.message}</p>
        )}
        <input
          className={`${errors.emailAddress ? "error" : "focused"}`}
          type="email"
          placeholder="Email Address"
          {...register("emailAddress", {
            required: "Email address cannot be empty",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Looks like this is not an email",
            },
          })}
        />
        {errors.emailAddress && (
          <p className="error-message">{errors.emailAddress.message}</p>
        )}
        <input
          className={`${errors.password ? "error" : "focused"}`}
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password cannot be empty",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
        <input type="submit" value="CLAIM YOUR FREE TRIAL" />
        <p className="service">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
export default Form;
