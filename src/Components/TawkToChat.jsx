import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66cb3967ea492f34bc09eaf3/1i64tgfc0';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', 'anonymous');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null; // This component does not render anything visible in the DOM
};

export default TawkToChat;
