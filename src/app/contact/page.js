import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { EmailRounded } from "@mui/icons-material";

const Contact = () => {
  const primaryColor = "#65A47A";
  return (
    <main className="flex flex-col p-10">
      <h1 className="font-inter font-extrabold text-black text-3xl mb-10 lg:mb-10 text-center">
        Contact
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row xl:gap-0 justify-around">
        <div className=" flex flex-col justify-center text-center">
          <LocationOnIcon
            fontSize="large"
            
            sx={{
              fill: primaryColor,
              marginX: "auto",

                
            }}
          />
          <p className="font-bold my-2 border-b-2 border-primary w-[40%] mx-auto">Address</p>
          <p className="px-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center text-center">
          <CallIcon
            fontSize="large"
            sx={{
              fill: primaryColor,
              marginX: "auto",

            }}
          />
          <p className="font-bold my-2 border-b-2 border-primary w-[40%] mx-auto ">Phone</p>
          <p className="px-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type{" "}
          </p>
        </div>
        <div className=" flex flex-col justify-center text-center">
          <EmailRounded
            fontSize="large"
            sx={{
              fill: primaryColor,
              marginX: "auto",

            }}
          />
          <p className="font-bold my-2 border-b-2 border-primary w-[40%] mx-auto">Mail</p>{" "}
          <p className="px-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
