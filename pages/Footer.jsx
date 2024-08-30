import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto my-5">
        <footer className="text-white text-center text-lg-start bg-gray-800">
          <div className="container p-4">
            <div className="flex flex-wrap mt-4">
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <h5 className="uppercase mb-4">About company</h5>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                </p>
                <div className="mt-4 flex space-x-3">
                  <button className="bg-white text-gray-800 p-2 rounded-full"><i className="fab fa-facebook-f"></i></button>
                  <button className="bg-white text-gray-800 p-2 rounded-full"><i className="fab fa-dribbble"></i></button>
                  <button className="bg-white text-gray-800 p-2 rounded-full"><i className="fab fa-twitter"></i></button>
                  <button className="bg-white text-gray-800 p-2 rounded-full"><i className="fab fa-google-plus-g"></i></button>
                </div>
              </div>
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <h5 className="uppercase mb-4 pb-1">Search something</h5>
                <div className="form-outline form-white mb-4">
                  <input type="text" id="formControlLg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="formControlLg">Search</label>
                </div>
                <ul className="list-none ml-6">
                  <li className="mb-3 flex items-center">
                    <i className="fas fa-home"></i><span className="ml-2">Warsaw, 00-967, Poland</span>
                  </li>
                  <li className="mb-3 flex items-center">
                    <i className="fas fa-envelope"></i><span className="ml-2">contact@example.com</span>
                  </li>
                  <li className="mb-3 flex items-center">
                    <i className="fas fa-phone"></i><span className="ml-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <h5 className="uppercase mb-4">Opening hours</h5>
                <table className="table-auto text-center text-white w-full">
                  <tbody className="font-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center p-3 bg-gray-700">
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
