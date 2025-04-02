import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import tailwindConfig from "../../vite.config";
console.log(tailwindConfig)

function Home() {
  return (
    <div className="bg-secondary w-full rounded-[66px] h-auto min-h-[500px] px-20 flex relative max-md:flex-col max-md:justify-center max-md:items-center max-md:py-10 max-sm:px-6 md:mb-40">
      <div className="w-[50%] font-bold max-lg:w-[55%] max-md:w-[100%] max-md:justify-center max-md:items-center max-md:flex max-md:flex-col" >
        <h1 className="text-[74px] color-primary mt-30  max-xl:text-[62px] max-lg:text-[44px] max-lg:mt-40 max-md:mt-0 max-md:mb-3">Lucas Benicio</h1>
        <div className="bg-primary text-white px-4 py-2 rounded-2xl text-[30px] inline-block max-xl:text-[25px] max-lg:text-[20px] ">
          Desenvolvedor Front-end
        </div>
        <div className="flex gap-7 absolute bottom-5 max-md:static max-md:mt-10 ">
          <a className="" href="/curriculo_lucas_2025.pdf" download>
            <div className="w-[35px] h-[35px]  bg-primary text-white rounded-[100%] flex justify-center items-center gap-0.5   shadow-xl ">
              <FontAwesomeIcon
                icon={faDownload}
                className="text-[12px] shadow-xl"
              />
            </div>
          </a>


          <a
            href="https://www.linkedin.com/in/lucas-benicio-4a6770233/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className=" text-[#111B89] text-[35px]   shadow-xl rounded-4xl "
            />
          </a>
          <a href="https://github.com/Beniciodeveloper" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className=" text-[#111B89]  text-[35px]  shadow-xl rounded-4xl "
            />
          </a>
          <a href="https://wa.me/71991017313" target="_blank">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className=" text-[#111B89] text-[35px]  shadow-xl rounded-4xl "
            />
          </a>

        </div>
      </div>



      <div className="w-[50%] max-lg:w-[45%] flex justify-center relative items-center max-md:w-[100%] max-md:mt-10 ">
        <img
          className="h-[410px] w-[330px]  rounded-[178px]  max-xl:w-[300px] max-xl:h-[390px] max-lg:w-[280px] max-lg:h-[350px] "
          src="/foto-portfolio-1.png"
          alt=""
        />


      </div>
    </div>
  );
}

export default Home;
