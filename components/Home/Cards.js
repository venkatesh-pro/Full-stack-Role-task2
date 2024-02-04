import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Cards = ({ foodDatas }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 mt-10 m-auto  place-items-center w-[70vw]">
      {foodDatas.map((data) => {
        return (
          <div
            className={`relative w-[240px] h-[450px] rounded-xl ${
              data.isDifferentColor
                ? "bg-[#24222E] border-[1px] border-black 	"
                : "bg-[#eee]"
            }`}
            style={{
              boxShadow: data.isDifferentColor
                ? "-1px 2px 10px 1px white"
                : "none",
            }}
          >
            <div
              className={`absolute top-[10px] right-[10px] p-[7px] bg-[#ffffffbc] ${
                data.isLikeActive ? "text-[#F04A87] " : "text-[#A7A6A8] "
              } rounded-full`}
            >
              <FavoriteIcon />
            </div>
            <div className="h-[60%] p-4">
              <img
                src={data.image}
                className="w-[100%] rounded-lg h-[100%]"
                alt={data.title}
              ></img>
            </div>
            <div className="pl-4 pr-4 flex  justify-center">
              <p
                className={`p-1 pl-2 pr-2 rounded-xl text-[#F04A87] text-[10px] ${
                  data.isDifferentColor
                    ? "bg-[#392235] border-[#392235]"
                    : "bg-[#FCE9F1] border-[#fddfeb]"
                } inline border-2 `}
              >
                {data.category}
              </p>
            </div>
            <div
              className={`pl-4 pr-4 flex  justify-center ${
                data.isDifferentColor ? "text-white" : "text-black"
              } mt-2 text-[15px] font-bold text-center`}
            >
              <p className="">{data.title}</p>
            </div>
            <div className="pl-4 pr-4 flex  justify-center  mt-2 text-[#F04A87]  text-[15px] font-bold text-center">
              <p className="">
                {" "}
                {data.isPriceRange
                  ? `€${data.price.priceOne} - €${data.price.priceTwo}`
                  : `€${data.price}`}
              </p>
            </div>
            <div className="pl-4 pr-4 flex  justify-center  mt-2 text-white  text-[15px] font-bold text-center">
              <button
                className={`pl-4 pr-4 pt-1 pb-1 ${
                  data.isDifferentColor
                    ? "bg-[#F04A87] shadow-md shadow-[#9c438d] "
                    : "bg-black"
                } rounded-3xl`}
              >
                {data.buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
