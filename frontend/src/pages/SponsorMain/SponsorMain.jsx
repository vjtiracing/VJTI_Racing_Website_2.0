import React from "react";
import { Link } from 'react-router-dom';
import brochure from "./files/Brochure2022.pdf";
import "./SponsorMain.css";
import logo from "./images/VJTI_RACING_LOGO_w-01_cut.png";
import DarksMachinoX from "./images/CurrentSponsors/DarksMachinoX.png";
import JSRC from "./images/CurrentSponsors/JSRC.png";
import IndoTherm from "./images/CurrentSponsors/IndoTherm.jfif";
import OpTech from "./images/CurrentSponsors/OpTech.png";
import VJTIAlumni from "./images/CurrentSponsors/VJTIAlumni.jpg";
import RampraNew from "./images/CurrentSponsors/Rampra.jpg";
import Circlips from "./images/CurrentSponsors/Circlips.jpg";
import DMC from "./images/CurrentSponsors/DMC.jpg";
import Idea3 from "./images/CurrentSponsors/Idea3.png";
import Spartan from "./images/CurrentSponsors/Spartan.png";
import SEW from "./images/CurrentSponsors/SEW.jpeg";
import KumarProcesses from "./images/CurrentSponsors/KumarProcesses.jpg";
import PSP_Current from "./images/CurrentSponsors/PSP.png";
import Igus_Current from "./images/CurrentSponsors/igus.png";
import ReenaEnterprise from "./images/CurrentSponsors/ReenaEnterprise.png";
import HardwinFasteners_Current from "./images/CurrentSponsors/HardwinFasteners.png";
import KriaTech from "./images/CurrentSponsors/KriaTech.jpg";
import VSM from "./images/CurrentSponsors/VSM.jpg";

import PrintWorld from "./images/PastSponsors/3DPrintWorld.jfif";
import ALF from "./images/PastSponsors/ALF.PNG";
import Alicat from "./images/PastSponsors/Alicat.png";
import ANS from "./images/PastSponsors/ANS.jpeg";
import Arbes from "./images/PastSponsors/Arbes.PNG";
import PSP_Laser from "./images/PastSponsors/PSP_Laser.png";
import Burnout from "./images/PastSponsors/Burnout.png";
import CityPackers from "./images/PastSponsors/CityPackers.png";
import CrestaPaints from "./images/PastSponsors/CrestaPaints2.jpg";
import CrownRelocations from "./images/PastSponsors/CrownRelocations.png";
import DivineEnterprises from "./images/PastSponsors/DivineEnterprises.PNG";
import dna from "./images/PastSponsors/dna.png";
import EchaarEquipment from "./images/PastSponsors/EchaarEquipment.PNG";
import FederalBank from "./images/PastSponsors/FederalBank.png";
import FundTonic from "./images/PastSponsors/FundTonic.PNG";
import EnggBazaar from "./images/PastSponsors/EngineeringBazar.png";
import Greenway from "./images/PastSponsors/Greenway.jfif";
import GRMetalloys from "./images/PastSponsors/GRMetalloys.jfif";
import HardwinFasteners from "./images/PastSponsors/HardwinFastners.png";
import HFSI from "./images/PastSponsors/HFSI.PNG";
import Igus from "./images/PastSponsors/Igus.png";
import IndianOil from "./images/PastSponsors/IndianOil.png";
import InnovativeTech from "./images/PastSponsors/InnovativeTech.PNG";
import IndoThermPast from "./images/PastSponsors/IndoTherm.jfif";
import Jindal from "./images/PastSponsors/Jindal.png";
import LandT from "./images/PastSponsors/LandT.png";
import MalkarIndustries from "./images/PastSponsors/MalkarIndustries.PNG";
import Marvel from "./images/PastSponsors/Marvel.png";
import Metallurgical from "./images/PastSponsors/Metallurgical.jpeg";
import Magnes from "./images/PastSponsors/MagnesMotors.jpg";
import MistriTurnTech from "./images/PastSponsors/MistryTurnTech.jpg";
import NeetaBellows from "./images/PastSponsors/NeetaBellows.png";
import parleElizabeth from "./images/PastSponsors/parleElizabeth.png";
import Parshva from "./images/PastSponsors/ParshvaIndia.PNG";
import Polycab from "./images/PastSponsors/Polycab.png";
import PratibhaIndustries from "./images/PastSponsors/PratibhaIndustries.jpg";
import PreciseFasteners from "./images/PastSponsors/PreciseFasteners.png";
import PrecisionCut from "./images/PastSponsors/PrecisionCut.PNG";
import PrintoMake from "./images/PastSponsors/Printomake.png";
import ProspectGears from "./images/PastSponsors/ProspectGears.jfif";
import Rampra from "./images/PastSponsors/Rampra.jpg";
import Radheya from "./images/PastSponsors/radheya.jpg";
import Raymond from "./images/PastSponsors/Raymond.png";
import RCI from "./images/PastSponsors/RCI.PNG";
import RevtiIndustries from "./images/PastSponsors/RevtiIndustries.png";
import Shreenath from "./images/PastSponsors/Shreenath.png";
import SN_Engg from "./images/PastSponsors/SN_Engg.PNG";
import ScaleMinds from "./images/PastSponsors/ScaleMinds.jpg";
import SDI from "./images/PastSponsors/SDI.jpg";
import Super from "./images/PastSponsors/Super.PNG";
import SJI from "./images/PastSponsors/SJI.jfif";
import TU from "./images/PastSponsors/ToolsUnlimited.PNG";
import TopGear from "./images/PastSponsors/TopGear.PNG";
import VJTIAlumniPast from "./images/PastSponsors/VJTIAlumni.jpg";
import VictoriaDigital from "./images/PastSponsors/VictoriaDigital.jpg";

const SponsorMain = (props) => {

  function menuToggler() {
    console.log("testing");
    const thepath = document.getElementById("forfancymenu");
    const checkbox = document.getElementById("menu-toggle");
    if (checkbox.checked === true)
    {
      thepath.setAttribute("d", "M0 3 h4 l6 6 l6 -6 h4 l-8 8 l8 8 h-4 l-6 -6 l-6 6 h-4 l8 -8 z;");
    }
    else
    {
      thepath.setAttribute("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z;");
    }
  }

	return (
		<>
		<div>

<body class="antialiased font-sans text-gray-900">

  <main class="w-full">

  <header class="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64  bg-gray-900">

<div class="flex flex-wrap items-center justify-between py-6 border-b">
  <div class="w-1/2 md:w-auto transition duration-500 hover:scale-110">
  <Link to="/" class="">
      <img src={logo} width="175" alt="VJTI Racing Logo"/>
    </Link>
  </div>

  <label for="menu-toggle" class="cursor-pointer md:hidden block"><svg class="menu-mobile fill-current text-white"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>Menu</title>
            <path id="forfancymenu" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg></label>

        <input class="hidden menutogglecheck" type="checkbox" id="menu-toggle" onClick={menuToggler}/>

  <div class="hidden md:block w-full md:w-auto" id="menu">
    <nav
      class="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
      <ul class="md:flex items-center">
        <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold border-b-8 border-transparent hover:border-white"
            to="/team">Our Team</Link></li>
        <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold border-b-8 border-transparent hover:border-white"
            to="/competitions">Competitions</Link></li>
        <li class="md:ml-4 md:hidden lg:block"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold border-b-8 border-transparent hover:border-white"
            to="/merch">Merch</Link></li>
        <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold border-b-8 border-transparent hover:border-white" to="/contact">Contact
            Us</Link></li>
        <li class="md:ml-6 mt-3 md:mt-0">
          <Link class="text-xl inline-block font-semibold px-6 py-4 text-white bg-red-600 md:bg-transparent md:text-white border border-white rounded mb-2 hover:text-black hover:bg-white"
            to="/sponsor">Sponsor Us</Link>
        </li>
      </ul>
    </nav>
  </div>
</div>
</header>

    <br></br>

    <section class="relative bg-gray-900 text-center text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w lg:px-8">
          <h2 class="text-4xl leading-tight font-bold mt-4 pt-10">Sponsorship</h2>
          <br/>
          <p class="mt-2 leading-relaxed text-white pb-0 mb-0 text-xl">Our sponsors help us accomplish great things by bringing our vision
          into reality!</p>
        </div>
      </div>
    </section>

    <section
      class="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
      <div class="md:flex md:items-center md:justify-center">
        <h2 class="text-xl font-bold text-white">View and Download our Sponsorship Brochure.</h2>
        <a href={brochure} target="_blank" rel="noreferrer noopener"
          class="px-8 py-4 bg-white text-red-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0">View the file!</a>
      </div>
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-8 lg:pt-16">
      <div class="flex flex-col lg:flex-row lg:-mx-8 ">
        <div class="w-full">
          <h2 class="text-3xl leading-tight font-bold mt-4">Our Sponsors This Year</h2>
          <div class="container mx-auto">
    <div class="grid-cols-3 place-items-center p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2 justify-items-center items-center">
        <div class="w-full col-span-2 row-span-1 rounded">
        <a href="mailto:info@jsrchemicals.com" target="_blank" rel="noreferrer noopener">
            <img src={JSRC}
                alt="JSR" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
        <div class="w-full rounded">
        <a href="https://vjtialumni.com/" target="_blank" rel="noreferrer noopener">
            <img src={VJTIAlumni}
                alt="VJTI Alumni Association"  class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
        
        <div class="w-full rounded col-span-2 row-span-1">
        <a href="https://spartanindia.com/" target="_blank" rel="noreferrer noopener">
            <img src={Spartan}
                alt="Spartan" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
        
        <div class="w-full rounded">
        <a href="http://www.darksmachinox.com/" target="_blank" rel="noreferrer noopener">
            <img src={DarksMachinoX}
                alt="DarksMachinoX" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
         </a>
        </div>
       
        
        <div class="w-full rounded">
        <a href="https://www.indothermengrs.com/" target="_blank" rel="noreferrer noopener">
            <img src={IndoTherm}
                alt="IndoTherm Engineers Pvt. Ltd." class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
        <div class="w-full rounded">
        <a href="https://www.optechengineering.com/" target="_blank" rel="noreferrer noopener">
            <img src={OpTech}
                alt="OpTech" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
        <div class="w-full rounded">
        <a href="https://www.ramprasteel.com/" target="_blank" rel="noreferrer noopener">
            <img src={RampraNew}
                alt="Rampra" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
        <div class="w-full rounded">
        <a href="https://www.circlipsindia.com/" target="_blank" rel="noreferrer noopener">
            <img src={Circlips}
                alt="Circlips Technologie" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        <div class="w-full rounded">
        <a href="https://www.linkedin.com/company/das-mobility-company//" target="_blank" rel="noreferrer noopener">
            <img src={DMC}
                alt="DMC - Das Mobile Company" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
        <div class="w-full rounded">
        <a href="https://www.3idea.in/" target="_blank" rel="noreferrer noopener">
            <img src={Idea3}
                alt="3 Idea" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
        <div class="w-full rounded">
        <a href="http://www.sainathengworks.com/" target="_blank" rel="noreferrer noopener">
            <img src={SEW}
                alt="SEW" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>

        

        <div class="w-full rounded col-span-2 row-span-1">
        <a href="https://psplasertech.in/" target="_blank" rel="noreferrer noopener">
            <img src={PSP_Current}
                alt="PSP Laser Tech Pvt. Ltd." class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>

        <div class="w-full rounded">
        <a href="https://www.kumarfilter.com/" target="_blank" rel="noreferrer noopener">
            <img src={KumarProcesses}
                alt="Kumar Processes" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>

        <div class="w-full rounded col-span-2 row-span-1">
        <a href="https://www.igus.in/" target="_blank" rel="noreferrer noopener">
            <img src={Igus_Current}
                alt="igus - Plastics for longer life" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>

        <div class="w-full rounded">
        <a href="mailto:reenaenterprise100@gmail.com" target="_blank" rel="noreferrer noopener">
            <img src={ReenaEnterprise}
                alt="Reena Enterprise" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>

        <div class="w-full rounded">
        <a href="https://www.hardwin.in/" target="_blank" rel="noreferrer noopener">
            <img src={HardwinFasteners_Current}
                alt="Hardwin Fasteners" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>

        <div class="w-full rounded">
        <a href="mailto:jiten@kriatech.com" target="_blank" rel="noreferrer noopener">
            <img src={KriaTech}
                alt="Kria Tech" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>

        <div class="w-full rounded">
        <a href="https://vsmthane.org/" target="_blank" rel="noreferrer noopener">
            <img src={VSM}
                alt="VSM - Transformation Through Mentoring" class="drop-shadow-none hover:drop-shadow-md border-none hover:border hover:border-solid"/>
        </a>
        </div>
        
    </div>
</div>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pb-8 lg:pb-16">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full">
          <h2 class="text-3xl leading-tight font-bold mt-4">Our Past Sponsors</h2>
          <div class="container mx-auto ">
    <div class="grid-cols-3 place-items-center p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3  justify-items-center items-center">
        <div class="w-full rounded">
            <img src={PrintWorld}
                alt="3D PrintWorld Pvt. Ltd."/>
        </div>
        <div class="w-full rounded">
            <img src={ALF}
                alt="ALF Engineering Pvt. Ltd."/>
        </div>
        <div class="w-full rounded">
            <img src={Alicat}
                alt="Alicat Scientific"/>
        </div>
        <div class="w-full rounded">
            <img src={ANS}
                alt="ANS Tracknology"/>
        </div>
        <div class="w-full rounded">
            <img src={Arbes}
                alt="Arbes"/>
        </div>
        <div class="w-full rounded">
            <img src={PSP_Laser}
                alt="PSP Lasertech Pvt. Ltd."/>
        </div>
        <div class="w-full rounded">
            <img src={Burnout}
                alt="Burnout by 3 Brothers"/>
        </div>
        <div class="w-full rounded">
            <img src={CrestaPaints}
                alt="Cresta Paints"/>
        </div>
        <div class="w-full rounded">
            <img src={CrownRelocations}
                alt="Crown Relocations"/>
        </div>
        <div class="w-full rounded">
            <img src={DivineEnterprises}
                alt="Divine Enterprises"/>
        </div>
        <div class="w-full rounded">
            <img src={dna}
                alt="dna"/>
        </div>
        <div class="w-full rounded">
            <img src={EchaarEquipment}
                alt="Echaar Equipment Pvt. Ltd."/>
        </div>
        <div class="w-full rounded">
            <img src={FederalBank}
                alt="Federal Bank"/>
        </div>
        <div class="w-full rounded">
            <img src={FundTonic}
                alt="FundTonic.com"/>
        </div>
        <div class="w-full rounded">
            <img src={EnggBazaar}
                alt="Engineering Bazaar"/>
        </div>
        <div class="w-full rounded">
            <img src={Greenway}
                alt="Greenway"/>
        </div>
        <div class="w-full rounded">
            <img src={GRMetalloys}
                alt="GR Metalloys"/>
        </div>
        <div class="w-full rounded">
            <img src={HardwinFasteners}
                alt="Hardwin Fasteners"/>
        </div>
        <div class="w-full rounded">
            <img src={Igus}
                alt="Igus"/>
        </div>
        <div class="w-full rounded">
            <img src={IndianOil}
                alt="Indian Oil"/>
        </div>
        <div class="w-full rounded">
            <img src={IndoThermPast}
                alt="IndoTherm Engineers Pvt. Ltd."/>
        </div>
        <div class="w-full rounded">
            <img src={Jindal}
                alt="Jindal"/>
        </div>
        <div class="w-full rounded">
            <img src={LandT}
                alt="L and T"/>
        </div>
        <div class="w-full rounded">
            <img src={MalkarIndustries}
                alt="Malkar Industries"/>
        </div>
        <div class="w-full rounded">
            <img src={Marvel}
                alt="Marvel"/>
        </div>
        <div class="w-full rounded">
            <img src={MistriTurnTech}
                alt="Mistri Turn Tech"/>
        </div>
        <div class="w-full rounded">
            <img src={NeetaBellows}
                alt="NeetaBellows"/>
        </div>
        <div class="w-full rounded">
            <img src={parleElizabeth}
                alt="parleElizabeth"/>
        </div>
        <div class="w-full rounded">
            <img src={Polycab}
                alt="Polycab"/>
        </div>
        <div class="w-full rounded">
            <img src={PratibhaIndustries}
                alt="Pratibha Industries Limited"/>
        </div>
        <div class="w-full rounded">
            <img src={PreciseFasteners}
                alt="Precise Fasteners Pvt. Ltd."/>
        </div>
        <div class="w-full rounded">
            <img src={ProspectGears}
                alt="Prospect Gears"/>
        </div>
        <div class="w-full rounded">
            <img src={VJTIAlumniPast}
                alt="VJTI Alumni Association"/>
        </div>
        <div class="w-full rounded">
            <img src={Shreenath}
                alt="Shreenath Engineering Works"/>
        </div>
        <div class="w-full rounded">
            <img src={Rampra}
                alt="Rampra"/>
        </div>
        <div class="w-full rounded">
            <img src={RevtiIndustries}
                alt="Revti Industries"/>
        </div>
        <div class="w-full rounded">
            <img src={SJI}
                alt="Shri Jagannath Industries"/>
        </div>
        <div class="w-full rounded">
            <img src={Raymond}
                alt="Raymond"/>
        </div>
        <div class="w-full rounded">
            <img src={ScaleMinds}
                alt="Scale Minds"/>
        </div>
        <div class="w-full rounded">
            <img src={Super}
                alt="Super Design and Manufacture"/>
        </div>
        <div class="w-full rounded">
            <img src={VictoriaDigital}
                alt="Victoria Digital"/>
        </div>
        <div class="w-full rounded">
            <img src={SN_Engg}
                alt="S. N. Engineering"/>
        </div>
        <div class="w-full rounded">
            <img src={TU}
                alt="Tools Unlimited"/>
        </div>
        <div class="w-full rounded">
            <img src={TopGear}
                alt="Top Gear Transmissions"/>
        </div>
        <div class="w-full rounded">
            <img src={InnovativeTech}
                alt="Innovative Technologies"/>
        </div>
        <div class="w-full rounded">
            <img src={Parshva}
                alt="Parshva India"/>
        </div>
        <div class="w-full rounded">
            <img src={PrecisionCut}
                alt="Precision Cut Industries"/>
        </div>
        <div class="w-full rounded">
            <img src={HFSI}
                alt="Hindustan Forging and Steel Industries"/>
        </div>
        <div class="w-full rounded">
            <img src={RCI}
                alt="RCI"/>
        </div>
        <div class="w-full rounded">
            <img src={SDI}
                alt="S. D. Industries"/>
        </div>
        <div class="w-full rounded">
            <img src={CityPackers}
                alt="City Packers and Movers"/>
        </div>
        <div class="w-full rounded">
            <img src={Metallurgical}
                alt="Metallurgical Processes and Equipments"/>
        </div>
        <div class="w-full rounded">
            <img src={Magnes}
                alt="Magnes"/>
        </div>
        <div class="w-full rounded">
            <img src={PrintoMake}
                alt="PrintOMake"/>
        </div>
        <div class="w-full rounded">
            <img src={Radheya}
                alt="RML - Radheya"/>
        </div>
    </div>
</div>
        </div>
      </div>
    </section>

    <section
      class="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
      <div class="md:flex md:items-center md:justify-center">
        <h2 class="text-xl font-bold text-white">Help bring our vehicles to life! <br class="block md:hidden"/>Sponsor Us!</h2>
        <a href="https://forms.gle/WxYMfB1QTn17TZaW9" target="_blank" rel="noreferrer noopener"
          class="px-8 py-4 bg-white text-red-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0">Fill the form!</a>
      </div>
    </section>

    <footer class="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24 ">
      <div class="flex flex-col fixfoot:flex-row">
        <div class="w-full lg:w-5/12 lg:mx-2 lg:pr-8">
          <h3 class="font-bold text-2xl -pt-10 -mt-5">VJTI Racing</h3>
          <p class="text-gray-400 pb-5">The club for VJTI's automobile enthusiasts.</p>
          <iframe title="VJTI Racing Location Map" class="hidden sm:block" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30175.274755364262!2d72.856547!3d19.023716000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73c94d19d1c0e616!2sVJTI%20Racing!5e0!3m2!1sen!2sin!4v1644694110011!5m2!1sen!2sin" width="400" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
          <iframe title="VJTI Racing Location Mobile Map" class="block sm:hidden" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30175.274755364262!2d72.856547!3d19.023716000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73c94d19d1c0e616!2sVJTI%20Racing!5e0!3m2!1sen!2sin!4v1644694110011!5m2!1sen!2sin" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
        
        <div class="w-full fixfoot:w-1/6 mt-8 fixfoot:mt-0 lg:mx-4">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">Quick Links</h5>
          <ul class="mt-4">
            <li class="mt-2"><Link to="/team" title="" class="opacity-75 hover:opacity-100">Our Team</Link></li>
            <li class="mt-2"><Link to="/competitions" title="" class="opacity-75 hover:opacity-100">Competitions</Link></li>
            <li class="mt-2"><Link to="/merch" title="" class="opacity-75 hover:opacity-100">Merch</Link></li>
            <li class="mt-2"><Link to="/contact" title="" class="opacity-75 hover:opacity-100">Contact</Link></li>
            <li class="mt-2"><Link to="/sponsor" title="" class="opacity-75 hover:opacity-100">Sponsorship</Link></li>
            <li class="mt-2"><Link to="/gallery" title="" class="opacity-75 hover:opacity-100">Gallery</Link></li>
          </ul>
        </div>

        <div class="w-full fixfoot:w-2/6 mt-8 fixfoot:mt-0 fixfoot:mx-4 lg:pr-8">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">Contact Details</h5>
          <ul class="mt-4">
            <li>
              <a href="https://www.google.com/maps?ll=19.023716,72.856547&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=8343284557969155606" title="" target="_blank" rel="noreferrer noopener" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                  </svg>
                </span>
                <span class="ml-3">
                VJTI Racing-167, Nathalal Parekh Marg, Wadla Village, Wadala, Mumbai, Maharashtra 400031
                </span>
              </a>
            </li>
            
            <li class="mt-4">
              <a href="tel:8828186508" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                  </svg>
                </span>
    
                <span class="ml-3">
                  Captain: +91 8828186508
                </span>
              </a>
            </li>
            <li class="mt-4">
              <a href="mailto:vjtiracingindia@me.vjti.ac.in" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                  </svg>
                </span>
                <span class="ml-3">
                vjtiracingindia@me.vjti.ac.in
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="w-full md:w-1/2 fixfoot:w-1/4 mt-8 fixfoot:mt-0 fixfoot:mx-4">
        
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">We're Social!</h5>
          <ul class="mt-4 flex">
            <li>
              <a href="https://www.facebook.com/vjtiracing" target="_blank" rel="noreferrer noopener" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="https://twitter.com/vjtiracing" target="_blank" rel="noreferrer noopener" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="https://www.instagram.com/vjtiracing" target="_blank" rel="noreferrer noopener" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                  <circle cx="11.994" cy="11.979" r="3.003" /></svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="https://www.youtube.com/channel/UCdqmWHqW6GZqXEOaTpTbJ7A" target="_blank" rel="noreferrer noopener" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="https://in.linkedin.com/company/vjti-racing" target="_blank" rel="noreferrer noopener" title="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </li>

          </ul>

          <a class="mt-8 inline-block font-semibold text-white md:bg-transparent md:text-white opacity-75 hover:text-red-500 hover:opacity-100"
                  href={brochure} target="_blank" rel="noreferrer noopener">View and Download our Sponsorship Brochure!</a>

          <p class="text-sm text-gray-400 mt-12">© VJTI Racing 2022<br class="hidden lg:block"/> All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>


  </main>

  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131505823-4"></script>

</body>

			</div>
		</>
	);
};

export default SponsorMain;