import React, {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      const url = 'https://movies-api14.p.rapidapi.com/shows';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2feb3d9111msh6e0d9d4955c2502p1921f2jsn80839fa20f5c',
          'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Use the 'data' state variable in your JSX code
  return (
    <div>
      {data.movies && data.original_title}
    </div>
  );
}

export default App;
