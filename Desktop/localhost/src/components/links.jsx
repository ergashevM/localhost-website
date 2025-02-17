import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="h-[41px] flex items-center justify-between px-15">
      <div>
        <p className="font-light text-sm">
          © 2023 Localhost, Inc. All Rights Reserved
        </p>
      </div>
      <ul className="flex gap-x-10">
        <li className="font-light text-sm">
          <a href="">Privacy Policy</a>
        </li>
        <li className="font-light text-sm">
          <a href="">Terms & Conditions</a>
        </li>
        <li className="font-light text-sm">
          <Link to="/sign-up">Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
