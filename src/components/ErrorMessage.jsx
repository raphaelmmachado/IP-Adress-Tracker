import { useState } from "react";
import AlertIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import XMark from "@heroicons/react/24/outline/XMarkIcon";
function ErrorMessage() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <section className="bg-red-300 shadow-lg flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-6">
            <AlertIcon className="text-yellow-400 h-8 w-8" />
            <p className="">
              If the application is not working, your adblocker could be
              blocking access to the api. Please, disable your adblocker!
            </p>

            <AlertIcon className="text-yellow-400 h-8 w-8" />
          </div>
          <XMark
            onClick={() => setShow(false)}
            className="text-black rounded-lg py-1 cursor-pointer my-1 hover:bg-black/20 h-10 w-10"
          />
        </section>
      )}
    </>
  );
}
export { ErrorMessage };
