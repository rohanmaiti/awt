import { useEffect, useState } from "react";
type QuoteType = {
  id: string;
  quote: string;
  author: string;
};
function App() {
  const [quote, setQuote] = useState<QuoteType[] >([]);
  const [pageContent, setPageContent] = useState<QuoteType | null>(null);
  const [pageno, setPageNo] = useState<number>(1);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((data) => data.json())
      .then((data) => {
        setQuote(data.quotes);
        setPageContent(data?.quotes[0]);
      });

      return ()=>{
        return alert("component will unmount");
      }
  }, []);

  useEffect(() => {
    setPageContent(quote[pageno]);
  }, [pageno]);

  const handlePageChange = (page: number) => {
    setPageNo(page);
  };

  return (
    <>
      <div>
        <div style={{ display:'flex' }} >
          {quote?.map((ele, index) => {
            return (
              <button  key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            );
          })}
        </div>
        <div>
            <h1>{pageContent?.quote}</h1>
            <h2>{pageContent?.author}</h2>
        </div>
      </div>
    </>
  );
}
export default App;
