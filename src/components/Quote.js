import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../features/quote/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);
  const author = useSelector((state) => state.quote.author);
  const quoteStatus = useSelector((state) => state.quote.status);

  useEffect(() => {
    if (quoteStatus === "idle") {
      dispatch(fetchQuote());
    }
  }, [quoteStatus, dispatch]);

  return (
    <div>
      <p>"{quote}"</p>
      <p>- {author}</p>
      <button onClick={() => dispatch(fetchQuote())}>New Quote</button>
    </div>
  );
};

export default Quote;
