import { useState } from "react";
import "primeicons/primeicons.css";
import {
  LocalHospitalOutlined,
  ChildCareOutlined,
  BloodtypeOutlined,
  AccountCircleOutlined,
  LocationOnOutlined,
  Battery5BarOutlined,
  SignalCellularAltOutlined,
} from "@mui/icons-material";
function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-[#d7f0f7] ">
      <div className="flex flex-col min-[448px]:h-[860px] min-[448px]:w-[448px] min-[448px]:aspect-[9/16] w-[100%] h-[100%] bg-gradient-to-t  from-[#b52e24] from-1% via-[#ff6257] via-100%  min-[448px]:rounded-[3rem] min-[448px]:border-[0.7rem] min-[448px]:border-black font-main shadow-2xl">
        <div className="flex flex-row  items-center justify-between min-[448px]:py-[0.5rem] max-[448px]:hidden rounded-t-[3rem] z-[0] relative">
          <div className="absolute self-center z-[1] flex w-[100%] justify-center ">
            <div className="w-[1.25rem] aspect-[1/1] bg-[black] rounded-full "></div>
          </div>
          <div className="w-[100%] flex justify-between px-[1rem]">
            <span className="self-start text-[14pt] text-[white] font-semibold">
              09.45
            </span>

            <div className="flex flex-row gap-1">
              <Battery5BarOutlined style={{ fontSize: 20, color: "#ffffff" }} />
              <SignalCellularAltOutlined
                style={{ fontSize: 20, color: "#ffffff" }}
              />
              <SignalCellularAltOutlined
                style={{ fontSize: 20, color: "#ffffff" }}
              />
              <i className="pi pi-wifi selef-center text-[white] font-semibold text-[14pt]"></i>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100%] rounded-b-[2.5rem] flex flex-col p-4 text-[14pt] gap-4">
          <div className="self-start font-bold text-[24pt] text-[white]">
            Selamat Datang !
          </div>
          <div className="w-[100%] px-2 py-4 rounded-xl bg-white/100 shadow-sm flex flex-row gap-2 w-[100%] justify-between">
            <div className="flex gap-2">
              <AccountCircleOutlined style={{ fontSize: 30 }} />
              <span className="font-bold text-[14pt] self-end">Genta</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-[14pt] self-end">
                Sleman, DIY
              </span>
              <LocationOnOutlined style={{ fontSize: 30 }} />
            </div>
          </div>
          <Card />
          <CarouselImage />
          <div className="flex flex-row w-[100%] gap-2">
            {/* <div className="w-[100%] aspect-[1/1] bg-[blue] rounded-xl"></div> */}
            {/* <div className="w-[100%] aspect-[1/1] bg-[blue] rounded-xl"></div> */}
          </div>
        </div>
        <div className="w-[200px] bg-[white] self-center h-[5px] mb-2 rounded-full"></div>
      </div>
    </div>
  );
}
function Card() {
  const Item = ({ icon, text }) => {
    return (
      <div className="flex flex-col w-[80px]">
        <button className="h-[80px] aspect-[1/1] bg-gradient-to-t from-red to-[#ff6257]  rounded-xl shadow-sm flex items-center justify-center text-[white] transition ease-in-out delay-100 hover:scale-110 hover:shadow-xl">
          {icon}
        </button>
        <div className="break-words text-[10pt] text-center">{text}</div>
      </div>
    );
  };
  return (
    <div className="w-[100%] bg-[white]/100 rounded-xl shadow-sm justify-center">
      <div className="text-[18pt] font-bold p-4 w-[100%] rounded-t-xl ">
        Pilih Layanan
      </div>
      <div className="p-4 flex flex-row items-center justify-evenly">
        <Item
          text={"Ambulans"}
          icon={<LocalHospitalOutlined style={{ fontSize: 50 }} />}
        />
        <Item
          text={"Donor Darah"}
          icon={<BloodtypeOutlined style={{ fontSize: 50 }} />}
        />
        <Item
          text={"Persalinan"}
          icon={<ChildCareOutlined style={{ fontSize: 50 }} />}
        />
      </div>
    </div>
  );
}

function CarouselImage() {
  return (
    <>
      <div className="w-[100%] aspect-[2/1] rounded-xl bg-[#f0f0f0] flex justify-center items-center shadow-sm z-[0] relative border border-black">
        <div className="w-[100%] h-[100%] z-[1] absolute rounded-xl bg-gradient-to-t from-[black]/20 from-1% via-[white]/0  via-90%"></div>
        <img
          src="/public/donor.jpeg"
          className="object-fill w-[100%] aspect-[2/1] rounded-xl"
        />
        <div className="flex flex-row-reverse z-[2] absolute self-end  w-[100%] p-2 gap-2">
          <div className="w-[0.6rem] bg-gray-600 aspect-[1/1] shadow-sm rounded-full"></div>
          <div className="w-[0.6rem] bg-gray-600 aspect-[1/1] shadow-sm rounded-full"></div>
          <div className="w-[0.6rem] bg-[white] aspect-[1/1] shadow-sm rounded-full"></div>
        </div>
      </div>
    </>
  );
}
export default App;
