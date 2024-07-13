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
        <div className="flex flex-col justify-center text-center">
          <LocationOnIcon
            fontSize="large"
            
            sx={{
              fill: primaryColor,
              marginX: "auto",

                
            }}
          />
          <p className="font-bold my-2 border-b-2 border-primary w-[40%] mx-auto"><span className="text-nowrap">Registered Office</span></p>
          <p className="px-20">
            C/o Mr. SK Chanda<br/>
            Near ICICI Bank<br/>
            P.O Duliajan<br/>
            District : Dirbrugarh<br/>
            Assam, 786602<br/>
          </p>
        </div>

        <div className="flex flex-col justify-center text-center">
          <LocationOnIcon
            fontSize="large"
            
            sx={{
              fill: primaryColor,
              marginX: "auto",

                
            }}
          />
          <p className="font-bold my-2 border-b-2 border-primary w-[40%] mx-auto">R&D facility</p>
          <p className="px-20">
            Tissue Culture Lab, 4th Floor<br/>
            BioNEST<br/>
            Research Park<br/>
            IIT Guwahati Campus<br/>
            Amingaon, Assam, 781039<br/>
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
          <a className="px-20 text-nowrap"  href="tel:+918812016167" >
+91{" "}88120{" "}16167
          </a>
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
          <a className="px-20" href="mailto:office@btpbharat.com">
            office@btpbharat.com
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
