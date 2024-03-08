import React, { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const Calan = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true to indicate this code is now running on the client
    setIsClient(true);
  }, []);

  return (
    <div className="App bg-blue-600">
      {isClient && (
        <PopupWidget
          url="https://calendly.com/shahmirishahid/seo-consultation"
          rootElement={document.getElementById("__next")}
          text="Book SEO Consultation Call ​!"
          textColor="#ffffff"
          color="#2463eb"
        />
      )}
    </div>
  );
};

export default Calan;
