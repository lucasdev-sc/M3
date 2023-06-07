import "./styles.css";

export const FeaturedMovie = () => {
  return (
    <>
      <div className='bg-[url("img/card-img-1.png")] img w-full bg-no-repeat bg-contain flex justify-center items-center '>
        <div className="w-[632px] flex flex-col gap-2">
          <div className="bg-[rgba(29,29,29,0.5)] py-1 px-2 rounded-tr-lg rounded-bl-lg">
            <p className="text-[#0FEFFD]">Science Fiction</p>
          </div>
          <div>
            <p className="text-white text-[56px]">Godzilla vs. Kong</p>
            <p className="text-white text-base">
              In a time when monsters walk the Earth, humanity’s fight for its
              future sets Godzilla and Kong on a collision course that will see
              the two most powerful forces of nature on the planet collide in a
              spectacular battle for the ages.
            </p>
            <button>Watch now</button>
          </div>
        </div>
      </div>
    </>
  );
};
