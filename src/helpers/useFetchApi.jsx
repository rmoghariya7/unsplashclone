import { useEffect, useState } from "react";
const secretKey = process.env.REACT_APP_ACCESS_KEY;

const useFetchApi = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchApi = async () => {
      try {
        if (query) {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?client_id=${secretKey}&page=${pageNumber}&query=${query}&per_page=10`,
            { signal }
          );

          if (!response.ok) return;
          const data = await response.json();

          setHasMore(data.results > 0);
          pageNumber === 1
            ? setImages(data.results)
            : setImages((prev) => [...prev, ...data.results]);
          setLoading(false);
        } else {
          setLoading(true);
          const response = await fetch(
            `https://api.unsplash.com/photos?client_id=${secretKey}&page=${pageNumber}&per_page=10&query=editorial`,
            { signal }
          );

          if (!response.ok) return;

          const data = await response.json();
          pageNumber === 1
            ? setImages(data)
            : setImages((prev) => [...prev, ...data]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    let timeoutID;
    timeoutID = setTimeout(() => {
      fetchApi();
    }, 300);

    return () => {
      controller.abort();
      clearTimeout(timeoutID);
    };
  }, [query, pageNumber]);
  return { loading, images, hasMore, setImages };
};

export default useFetchApi;
