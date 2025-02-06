import React from "react";
import Loader from "./Loader";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ images, loader, saved, setSaved }) => {
  const saveImage = (img) => {
    let flag = true;

    if (saved != null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          // React Toastify
          toast.warn("Image Already Saved..! 👍 ", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
          });
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, img]);
      toast.success("Image Saved...! 👍 ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid text-center">
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="items"
                  onClick={() => {
                    saveImage(image);
                  }}
                >
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {images.length != 0 && (
          <div className="m-5">
            <a
              href="#top"
              className="border-4 border-red-600 bg-[#141414] p-3 text-2xl font-bold rounded-full"
            >
              Back To Top...!
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
