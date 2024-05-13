import React, { useEffect, useState } from "react";
import brand from "../../assets/Brand-footer.png";
import profile from "../../assets/MyProfile.jpg";
import dashboard from "../../assets/dashboard.png";
import blog from "../../assets/blog.png";
import user from "../../assets/user.png";
import logout from "../../assets/logout.png";
import message from "../../assets/icons8-blog-50.png";
import users from "../../assets/icons8-user-48.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../../redux/messageSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.message.res);


  useEffect(() => {
    dispatch(getAllMessages());
    console.log(messages);
  }, [dispatch]);

  return (
    <div class="">
      <div className="h-full flex gap-20 ">
        <div className="w-64  h-[900px] mt-3 bg-[#04162C]">
          <Link to="/home">
            <img src={brand} alt="my-logo" className="w-24 h-24 ml-20 py-2" />
          </Link>
          <span className="flex items-center gap-5 ml-4 py-4 relative">
            <img
              src={profile}
              alt="user-profile"
              className="w-10 rounded-full "
              id="profile-image"
            />
            <Link to="/profile">
              <span className="" id="admin">
                Ismael
              </span>
            </Link>
            {/* <small className='text-red-600 absolute'>{ errors.subject?.message}</small> */}
          </span>
          <span className="flex items-center gap-5 ml-4 py-4">
            <img src={dashboard} alt="dashboard icon" className="w-10" />
            <Link to="/dashboard/dashboard" className="">
              <span>Dashboard</span>
            </Link>
          </span>
          <span className="flex items-center gap-5 ml-4 py-4">
            <img src={blog} alt="blog icon" className="w-10" />
            <Link to="/dashboard/blogdashboard" className="">
              <span>Blogs</span>
            </Link>
          </span>
          <span className="flex items-center gap-5 ml-4 py-4">
            <img src={user} alt="blog icon" className="w-10" />
            <Link to="/dashboard/user" className="">
              {" "}
              <span>Users</span>
            </Link>
          </span>
          <span className="flex items-center gap-5 ml-4 py-4">
            <img src={logout} alt="logout-icon" className="w-10" />
            <Link to="/home">
              <span className="" id="logoutBtns">
                Logout
              </span>
            </Link>
          </span>
        </div>

        <div className="">
          <h2
            id="dash-title"
            className="text-[#36c0c9] font-bold text-2xl pt-5"
          >
            WELCOME TO BLOG
          </h2>
          <div className="flex gap-20 ">
            <div className="bg-blue-950 w-60 p-3 rounded-lg mt-4 h-32">
              <span className="flex flex-col gap-6 ">
                <h3 className="font-semibold">TOTAL BLOGS</h3>
                <span className="flex justify-start gap-10 items-center">
                  <img src={message} alt="blog-icon" className="w-10 " />
                  <p id="allblogs">
                    {/* displays number of blogs dynamically  */}
                    {messages.length}
                  </p>
                </span>
              </span>
            </div>
            <div className="bg-blue-950 w-60 p-3 rounded-lg mt-4 h-32">
              <span className="flex flex-col gap-6 ">
                <h3>MONTHLY BLOGS</h3>
                <span className="flex justify-start gap-10 items-center">
                  <img src={message} alt="blog-icon" className="w-10" />
                  <p id="blogs">
                    {/* displays number of blogs dynamically  */}
                    {messages.length}
                  </p>
                </span>
              </span>
            </div>
          </div>

          <div className="w-[1400px] absolute top-[300px] z-0 mt-10">
            <h3 className="mb-4 text-[#36c0c9]">List of Feedbacks</h3>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full  text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
                <thead className="text-xs border-blue-400 border-b text-white bg-blue-950 uppercase   dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Names
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Emails
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-blue-950">
                  {messages &&
                    messages.map((message) => (
                      // console.log(message)
                      <tr className="bg-blue-950 border-b  border-blue-400 text-white  dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                        >
                          {message.username}
                        </th>
                        <td className="px-6 py-4">{message.email}</td>
                        <td className="px-6 py-4">{message.message}</td>
                        <td className="flex items-center px-6 py-4">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            View
                          </a>
                          <a
                            href="#"
                            className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
