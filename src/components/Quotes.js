import React, { useState, useEffect } from "react";
import axios from "axios";

function Quotations({ numberOfQuotes }) {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, [numberOfQuotes]);

  const fetchQuotes = async () => {
    const requests = Array.from({ length: numberOfQuotes }, () =>
      axios.get("https://api.quotable.io/random")
    );

    try {
      const responses = await Promise.all(requests);
      const quotesData = responses.map((response) => {
        const quote = response.data;
        return {
          content: quote.content,
          author: quote.author,
          authorSlug: quote.authorSlug,
          dateAdded: quote.dateAdded,
          dateModified: quote.dateModified,
          tags: quote.tags,
        };
      });
      setQuotes(quotesData);
      console.log(responses);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {quotes.map((quote, index) => (
        <div key={index}>
          <div>Quote: {quote.content}</div>
          <div>Author: {quote.author}</div>
          <div>Author Slug: {quote.authorSlug}</div>
          <div>Date Added: {quote.dateAdded}</div>
          <div>Date Modified: {quote.dateModified}</div>
          <div>Tags: {quote.tags.join(", ")}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Quotations;
