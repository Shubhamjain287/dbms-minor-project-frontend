import React from "react";

function Footer() {
  return (
    <>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-200">
          © 2022 <a
            target="_Shubham"
            href="https://shubhamjain287.github.io/Social-media-links/"
            className="hover:underline"
          >
            Shubham Jain
          </a> !! All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-200 sm:mt-0">
          <li>
            <a
              target="_Shubham"
              href="https://www.linkedin.com/in/sakshi-raghuwanshi-2b49b3213/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Sakshi Raghuwanshi
            </a>
          </li>
          <li>
            <a
              target="_BT"
              href="https://www.linkedin.com/in/yash-sharma-55090a214/"
              className="mr-4 hover:underline md:mr-6"
            >
              Yash Sharma
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
