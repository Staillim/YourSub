import { useEffect } from 'react';

export function MonetagAds() {
  useEffect(() => {
    // Primer script
    const script1 = document.createElement('script');
    script1.src = 'https://upskittyan.com/act/files/tag.min.js?z=9688577';
    script1.setAttribute('data-cfasync', 'false');
    script1.async = true;
    document.body.appendChild(script1);

    

    // Cuarto script
    const script2 = document.createElement('script');
    script4.src = 'https://gizokraijaw.net/401/9688583';
    document.body.appendChild(script4);

    // Limpieza al desmontar
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      
    };
  }, []);

  return null;
}
