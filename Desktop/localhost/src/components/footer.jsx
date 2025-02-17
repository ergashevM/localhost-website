import Links from '../components/links';

const Footer = () => {
  return (
    <div className="h-[329px]">
      <div className="flex items-center justify-center bg-stone-200">
        <div className="w-[1400px] grid grid-cols-4 gap-x-120">
          <div className="w-[300px] h-[288px] pt-7">
            <ul className="flex flex-col gap-y-2">
              <li className="text-[20px] font-semibold">Support</li>
              <li className="font-normal text-[16px]">
                <a href="">Help Centre</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">AirCover</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Combating discrimination</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Supporting people with disabilities</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Cencellation options</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Report neighbourhood concern</a>
              </li>
            </ul>
          </div>
          <div className="w-[300px] h-[288px] pt-7">
            <ul className="flex flex-col gap-y-2">
              <li className="text-[20px] font-semibold">Hosting</li>
              <li className="font-normal text-[16px]">
                <a href="">Local home</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Cover for hosts</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Hosting resources</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Community forum</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Hosting responsibly</a>
              </li>
            </ul>
          </div>
          <div className="w-[300px] h-[288px] pt-7">
            <ul className="flex flex-col gap-y-2">
              <li className="text-[20px] font-semibold">Localhost</li>
              <li className="font-normal text-[16px]">
                <a href="">Newsroom</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">New Features</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Careers</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Investres</a>
              </li>
              <li className="font-normal text-[16px]">
                <a href="">Gift cards</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Links/>
    </div>
  );
};

export default Footer;
