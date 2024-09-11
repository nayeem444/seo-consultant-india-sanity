import React, { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const Calan = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true to indicate this code is now running on the client
    setIsClient(true);
  }, []);

  return (
    <div className="App bg-black text-white">
      {isClient && (
        <PopupWidget
          url="https://calendly.com/d/cpjz-pkk-k6k"
          rootElement={document.getElementById("__next")}
          text="Book A Free Call ​!"
          textColor="#ffffff"
          color="#2463eb"
          

    
        />
      )}
    </div>
  );
};

export default Calan;
