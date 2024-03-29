const cards = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/82/a4/75/82a47526700b03819887b377c6c97818.jpg",
    bg: "rgb(10,90,130)",
    text: "One Piece",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/5a/1c/86/5a1c86ec4fad3739dfe6534317ccacd2.jpg",
    bg: "rgb(190,75,21)",
    text: "Naruto",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/71/56/7d/71567df18d26dbdbe8815952df18c5fa.jpg",
    bg: "rgb(45,42,69)",
    text: "Bleach",
  },
];

function App() {
  return (
    <div className="flex flex-col  w-full h-screen items-center justify-center overflow-hidden">
      <h1 className="py-10 font-bold text-5xl text-slate-700">anime cards</h1>
      <div className="w-full h-screen flex flex-wrap items-center justify-center overflow-x-hidden">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card mx-10 my-5 min-w-[300px] w-[clamp(300px,320px,330px)] h-[400px] flex flex-col justify-between"
          >
            <div
              className={`relative top w-full h-[230px] overflow-hidden rounded-[25px] bg-cover -scale-x-100`}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="absolute w-[25px] aspect-square rounded-full bottom-0 left-1/2 shadow-[-10px_10px_0_white]"></div>
            </div>
            <div
              className={`bottom relative w-full h-[160px] rounded-[25px] rounded-tr-none`}
              style={{ backgroundColor: `${card.bg}` }}
            >
              <div
                className={`content absolute right-0 -top-[80px] w-1/2 h-[80px] rounded-tl-[25px] border-l-[10px] border-white border-t-[10px]`}
                style={{ backgroundColor: `${card.bg}` }}
              >
                <div className="absolute w-[25px] aspect-square rounded-full right-0 shadow-[10px_-10px_0_white]"></div>
                <div
                  className="absolute w-[25px] bottom-0 left-[-25px] aspect-square rounded-full"
                  style={{ boxShadow: `10px 10px 0 ${card.bg}` }}
                ></div>
                <div className="relative mx-auto mt-[10px] rounded-xl w-5/6 h-[60px] bg-white/50 border border-white flex items-center justify-center">
                  <p
                    className={` text-xl font-bold`}
                    style={{ color: `${card.bg}` }}
                  >
                    {card.text}
                  </p>
                </div>
                <div className="absolute w-[25px] bottom-[80px] right-0 aspect-square rounded-full shadow-[10px_10px_0_white]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
